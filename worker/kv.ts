import { Env, CacheEntry } from "./types";

export async function getCached<T>(
  env: Env,
  key: string
): Promise<T | null> {
  try {
    const raw = await env.RAW_GAMES_KV.get(key);
    if (!raw) return null;

    const entry: CacheEntry<T> = JSON.parse(raw);
    const now = Date.now();

    if (now - entry.timestamp > entry.ttl * 1000) {
      await env.RAW_GAMES_KV.delete(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

export async function setCache<T>(
  env: Env,
  key: string,
  data: T,
  ttlSeconds: number
): Promise<void> {
  const entry: CacheEntry<T> = {
    data,
    timestamp: Date.now(),
    ttl: ttlSeconds,
  };

  try {
    await env.RAW_GAMES_KV.put(key, JSON.stringify(entry), {
      expirationTtl: ttlSeconds,
    });
  } catch {
    console.error(`Failed to write cache for key: ${key}`);
  }
}

export function buildCacheKey(path: string, params: URLSearchParams): string {
  const sorted = new URLSearchParams([...params.entries()].sort());
  return `rawg:${path}?${sorted.toString()}`;
}
