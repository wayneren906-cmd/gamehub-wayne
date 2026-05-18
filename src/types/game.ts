export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  hero_image?: string;
  rating: number;
  metacritic: number;
  genres: Genre[];
  platforms: PlatformInfo[];
  esrb_rating: { name: string } | null;
  description_raw: string;
  developers: Developer[];
  publishers: Publisher[];
  tags: Tag[];
  dominant_color?: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformInfo {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
  requirements: {
    minimum?: string;
    recommended?: string;
  };
}

export interface Developer {
  id: number;
  name: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface GameListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface ReviewSummary {
  pros: ReviewTag[];
  cons: ReviewTag[];
}

export interface ReviewTag {
  label: string;
  percentage: number;
  count: number;
}

export interface HardwareSpec {
  cpu: string;
  gpu: string;
  ramGB: number;
  vramGB: number;
}

export interface GameRequirements {
  minCpu: string;
  minGpu: string;
  minRamGB: number;
  minVramGB: number;
  recCpu: string;
  recGpu: string;
  recRamGB: number;
  recVramGB: number;
}

export interface NewsItem {
  date: string;
  title: string;
  summary: string;
}

export interface GameDetail extends Game {
  description_raw: string;
  developers: Developer[];
  publishers: Publisher[];
  requirements: GameRequirements;
  reviews: string[];
  gameplay?: string;
  recommendation?: string;
  screenshots?: string[];
  news?: NewsItem[];
}

export interface CompatibilityResult {
  canRun: boolean;
  qualityLevel: "4K 60fps" | "2K 60fps" | "1080p 60fps" | "1080p 30fps" | "低于最低要求";
  radarData: {
    vram: number;
    textureFill: number;
    floatCompute: number;
    memory: number;
    diskSpeed: number;
    cpuCores: number;
  };
}
