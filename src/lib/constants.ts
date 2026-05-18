export const WORKER_URL =
  process.env.NEXT_PUBLIC_WORKER_URL || "https://gamehub.wayne-ren906.workers.dev";

export const RAWG_BASE_URL = "https://api.rawg.io/api";

export const CACHE_TTL_SECONDS = 3600;

export const RATE_LIMIT = {
  MAX_REQUESTS: 60,
  WINDOW_SECONDS: 60,
} as const;

export const DEFAULT_PAGE_SIZE = 20;

export const GENRES = [
  { label: "动作", value: "action" },
  { label: "角色扮演", value: "role-playing-games-rpg" },
  { label: "射击", value: "shooter" },
  { label: "冒险", value: "adventure" },
  { label: "策略", value: "strategy" },
  { label: "竞速", value: "racing" },
  { label: "体育", value: "sports" },
  { label: "模拟", value: "simulation" },
  { label: "独立", value: "indie" },
] as const;

export const ENGINES = [
  { label: "Unreal Engine 5", value: "unreal-engine-5" },
  { label: "Unreal Engine 4", value: "unreal-engine-4" },
  { label: "Unity", value: "unity" },
  { label: "CryEngine", value: "cryengine" },
  { label: "Frostbite", value: "frostbite" },
  { label: "id Tech", value: "id-tech" },
] as const;
