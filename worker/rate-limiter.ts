import { Env, RateLimitEntry } from "./types";

const MAX_REQUESTS = 60;
const WINDOW_SECONDS = 60;

export async function checkRateLimit(
  env: Env,
  ip: string
): Promise<{ allowed: boolean; retryAfter?: number }> {
  const key = `rate:${ip}`;
  const now = Math.floor(Date.now() / 1000);

  try {
    const raw = await env.RATE_LIMIT_KV.get(key);
    let entry: RateLimitEntry;

    if (raw) {
      entry = JSON.parse(raw);

      if (now >= entry.resetAt) {
        entry = { count: 0, resetAt: now + WINDOW_SECONDS };
      }
    } else {
      entry = { count: 0, resetAt: now + WINDOW_SECONDS };
    }

    if (entry.count >= MAX_REQUESTS) {
      return {
        allowed: false,
        retryAfter: entry.resetAt - now,
      };
    }

    entry.count++;
    await env.RATE_LIMIT_KV.put(key, JSON.stringify(entry), {
      expirationTtl: WINDOW_SECONDS,
    });

    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}
