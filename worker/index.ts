import { Env } from "./types";
import { getCached, setCache, buildCacheKey } from "./kv";
import { checkRateLimit } from "./rate-limiter";
import { fetchFromRawg } from "./rawg";

const CACHE_TTL = 3600;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
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
