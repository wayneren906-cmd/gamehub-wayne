import { Env } from "./types";
import { getCached, setCache, buildCacheKey } from "./kv";
import { checkRateLimit } from "./rate-limiter";
import { fetchFromRawg } from "./rawg";
import { analyzeReviews } from "./ai";

const CACHE_TTL = 3600;

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!url.pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404, headers: corsHeaders });
    }

    // Image proxy — fetch from media.rawg.io (accessible from Cloudflare edge)
    if (url.pathname.startsWith("/api/images/")) {
      const imagePath = url.pathname.replace("/api/images/", "");
      let imageUrl = `https://media.rawg.io/media/${imagePath}`;

      // Append sizing params if provided — rawg.io supports width cropping
      const w = url.searchParams.get("w");
      if (w) imageUrl += `?w=${w}`;

      const accept = request.headers.get("Accept") || "";
      const supportsWebp = accept.includes("image/webp");

      const cache = caches.default;
      const cached = await cache.match(request);
      if (cached) return cached;

      try {
        const fetchHeaders: Record<string, string> = {
          "User-Agent": "GameHub/1.0 (Cloudflare Worker)",
        };
        // Signal upstream we prefer WebP if the client supports it
        if (supportsWebp) {
          fetchHeaders["Accept"] = "image/webp,image/avif,image/*";
        }

        const imageResponse = await fetch(imageUrl, { headers: fetchHeaders });

        if (!imageResponse.ok) {
          return new Response("Image not found", { status: 404, headers: corsHeaders });
        }

        const headers = new Headers(imageResponse.headers);
        headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800");
        headers.set("Access-Control-Allow-Origin", "*");
        headers.delete("Set-Cookie");

        if (supportsWebp && imageResponse.headers.get("Content-Type")?.includes("webp")) {
          headers.set("Vary", "Accept");
        }

        const response = new Response(imageResponse.body, {
          status: imageResponse.status,
          headers,
        });

        ctx.waitUntil(cache.put(request, response.clone()));
        return response;
      } catch {
        return new Response("Image proxy error", { status: 502, headers: corsHeaders });
      }
    }

    // Rate limit
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const rateResult = await checkRateLimit(env, ip);
    if (!rateResult.allowed) {
      return new Response(
        JSON.stringify({
          error: "Rate limit exceeded",
          retryAfter: rateResult.retryAfter,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(rateResult.retryAfter),
            ...corsHeaders,
          },
        }
      );
    }

    // AI review analysis endpoint
    if (url.pathname === "/api/ai/review" && request.method === "POST") {
      try {
        const body: { gameName: string; reviews: string[] } = await request.json();
        if (!body.gameName || !body.reviews?.length) {
          return new Response(
            JSON.stringify({ error: "gameName and reviews[] are required" }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        const analysis = await analyzeReviews(env, body.gameName, body.reviews);
        return new Response(JSON.stringify(analysis), {
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      } catch (e) {
        return new Response(
          JSON.stringify({ error: "AI analysis failed" }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // RAWG API proxy
    const rawgPath = url.pathname.replace("/api", "");
    const params = new URLSearchParams(url.search);

    const cacheKey = buildCacheKey(rawgPath, params);

    const cached = await getCached<any>(env, cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        headers: {
          "Content-Type": "application/json",
          "X-Cache": "HIT",
          ...corsHeaders,
        },
      });
    }

    const rawgResponse = await fetchFromRawg(
      rawgPath,
      params,
      env.RAWG_API_KEY
    );

    const data = await rawgResponse.clone().json();

    setCache(env, cacheKey, data, CACHE_TTL);

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "X-Cache": "MISS",
        ...corsHeaders,
      },
    });
  },
};
