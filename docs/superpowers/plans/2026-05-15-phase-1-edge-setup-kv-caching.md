# Phase 1: Edge Computing Setup & KV Caching Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize a Next.js 3A game aggregation site with dark glassmorphism theme, shadcn/ui components, and a Cloudflare Worker API proxy with KV cache-aside caching and rate limiting for RAWG API.

**Architecture:** Next.js App Router serves the frontend at edge via Cloudflare Pages. A separate Cloudflare Worker acts as an API middleware layer — it receives frontend requests, checks KV cache (TTL 3600s), fetches from RAWG API on miss, stores in KV, and returns results. Rate limiting (60 req/min per IP) prevents RAWG API abuse.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Cloudflare Workers, Cloudflare KV, RAWG API.

**Project Directory:** `C:/A_game_hub` (completely separate from existing `C:/A_trae_code` profile site)

---

## File Structure

```
C:/A_game_hub/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: dark theme provider, ambient glow bg, metadata
│   │   ├── page.tsx                # Home page (placeholder for Phase 4)
│   │   ├── globals.css             # Global styles: forced dark mode, glassmorphism, animations
│   │   └── game/[slug]/
│   │       └── page.tsx            # Detail page (placeholder for Phase 5)
│   ├── components/
│   │   ├── ui/                     # shadcn/ui generated components
│   │   │   ├── button.tsx
│   │   │   ├── select.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── command.tsx
│   │   │   └── badge.tsx
│   │   ├── Navbar.tsx              # Glassmorphism top navigation
│   │   ├── AmbientGlow.tsx         # Dynamic background color orbs
│   │   └── GameSkeleton.tsx        # Skeleton card for loading states
│   ├── lib/
│   │   ├── utils.ts                # cn() utility
│   │   ├── api.ts                  # Frontend API client (calls worker)
│   │   └── constants.ts            # RAWG base URL, cache TTL, rate limits
│   └── types/
│       └── game.ts                 # Game, Review, HardwareSpec TypeScript interfaces
├── worker/
│   ├── index.ts                    # Cloudflare Worker entry: proxy, cache, rate-limit
│   ├── kv.ts                       # KV helpers: get/set with TTL
│   ├── rate-limiter.ts             # Sliding window rate limiter
│   ├── rawg.ts                     # RAWG API client (fetch + error handling)
│   └── types.ts                    # Worker-specific types
├── wrangler.toml                   # Cloudflare Pages + Workers config
├── next.config.ts                  # Next.js config
├── tailwind.config.ts              # Tailwind configuration (dark-only, custom tokens)
├── tsconfig.json                   # TypeScript config
├── components.json                 # shadcn/ui config
├── package.json
├── .env.local                      # RAWG_API_KEY (gitignored)
├── .env.example                    # Template for env vars
└── .gitignore
```

---

### Task 1: Initialize Next.js Project with TypeScript and Tailwind CSS

**Files:**
- Create: `C:/A_game_hub/package.json`
- Create: `C:/A_game_hub/next.config.ts`
- Create: `C:/A_game_hub/tsconfig.json`
- Create: `C:/A_game_hub/tailwind.config.ts`
- Create: `C:/A_game_hub/postcss.config.mjs`
- Create: `C:/A_game_hub/.gitignore`
- Create: `C:/A_game_hub/.env.example`
- Create: `C:/A_game_hub/.env.local`

- [ ] **Step 1: Scaffold Next.js project with create-next-app**

Run:
```bash
cd C:/ && npx create-next-app@latest A_game_hub --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

Expected: Project created at C:/A_game_hub with all files.

- [ ] **Step 2: Install additional dependencies**

Run:
```bash
cd C:/A_game_hub && npm install framer-motion clsx tailwind-merge class-variance-authority lucide-react
```

Expected: Dependencies installed.

- [ ] **Step 3: Create .gitignore**

Write `C:/A_game_hub/.gitignore`:
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# wrangler
.wrangler/
```

- [ ] **Step 4: Create .env.example**

Write `C:/A_game_hub/.env.example`:
```
RAWG_API_KEY=your_rawg_api_key_here
NEXT_PUBLIC_WORKER_URL=http://localhost:8787
```

- [ ] **Step 5: Create .env.local with placeholder**

Write `C:/A_game_hub/.env.local`:
```
RAWG_API_KEY=placeholder_replace_with_real_key
NEXT_PUBLIC_WORKER_URL=http://localhost:8787
```

- [ ] **Step 6: Commit**

```bash
cd C:/A_game_hub && git init && git add -A && git commit -m "feat: scaffold Next.js project with TypeScript and Tailwind"
```

---

### Task 2: Configure Forced Dark Theme and Glassmorphism

**Files:**
- Create: `C:/A_game_hub/src/app/globals.css`
- Modify: `C:/A_game_hub/tailwind.config.ts`

- [ ] **Step 1: Write Tailwind config with dark-only tokens**

Write `C:/A_game_hub/tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "rgba(255,255,255,0.1)",
        background: "#09090b",
        foreground: "#fafafa",
        muted: {
          DEFAULT: "#27272a",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#6366f1",
          foreground: "#e0e7ff",
        },
        card: {
          DEFAULT: "rgba(0,0,0,0.4)",
          foreground: "#fafafa",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["Inter", "Geist", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite alternate",
        "shimmer": "shimmer 1.5s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        glowPulse: {
          "0%": { opacity: "0.5", transform: "scale(1)" },
          "100%": { opacity: "0.8", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

- [ ] **Step 2: Write global CSS with glassmorphism and ambient glow utilities**

Write `C:/A_game_hub/src/app/globals.css`:
```css
@import "tailwindcss";

@layer base {
  html {
    color-scheme: dark;
  }

  html.dark {
    color-scheme: dark;
  }

  body {
    @apply bg-zinc-950 text-zinc-400 antialiased;
    font-family: "Inter", "Geist", system-ui, sans-serif;
  }
}

@layer components {
  /* Glassmorphism card */
  .glass-card {
    @apply bg-black/40 backdrop-blur-md border border-white/10 rounded-lg;
  }

  /* Glass navbar */
  .glass-nav {
    @apply bg-black/40 backdrop-blur-md border-b border-white/10;
  }

  /* Heading contrast */
  .heading-high {
    @apply text-white font-bold tracking-tight;
  }

  /* Body text */
  .body-muted {
    @apply text-zinc-400 text-sm leading-relaxed;
  }

  /* Skeleton shimmer */
  .skeleton-shimmer {
    @apply relative overflow-hidden bg-white/5 rounded-md;
  }
  .skeleton-shimmer::after {
    content: "";
    @apply absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent;
    animation: shimmer 1.5s ease-in-out infinite;
  }
}

@layer utilities {
  /* Ambient glow orbs */
  .glow-orb {
    @apply absolute rounded-full pointer-events-none;
    filter: blur(80px);
    will-change: transform;
  }
}
```

- [ ] **Step 3: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: configure forced dark theme, glassmorphism, and ambient glow utilities"
```

---

### Task 3: Install and Configure shadcn/ui

**Files:**
- Create: `C:/A_game_hub/components.json`
- Create: `C:/A_game_hub/src/lib/utils.ts`
- Create: `C:/A_game_hub/src/components/ui/button.tsx`
- Create: `C:/A_game_hub/src/components/ui/select.tsx`
- Create: `C:/A_game_hub/src/components/ui/popover.tsx`
- Create: `C:/A_game_hub/src/components/ui/skeleton.tsx`
- Create: `C:/A_game_hub/src/components/ui/command.tsx`
- Create: `C:/A_game_hub/src/components/ui/badge.tsx`

- [ ] **Step 1: Create cn() utility**

Write `C:/A_game_hub/src/lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create components.json for shadcn/ui**

Write `C:/A_game_hub/components.json`:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

- [ ] **Step 3: Generate shadcn/ui components**

Run:
```bash
cd C:/A_game_hub && npx shadcn@latest add button select popover skeleton command badge --yes
```

Expected: Components created in `src/components/ui/`.

- [ ] **Step 4: Verify components exist**

Run:
```bash
ls C:/A_game_hub/src/components/ui/
```

Expected: `button.tsx`, `select.tsx`, `popover.tsx`, `skeleton.tsx`, `command.tsx`, `badge.tsx`

- [ ] **Step 5: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: install and configure shadcn/ui with base components"
```

---

### Task 4: Create Core Layout Components

**Files:**
- Modify: `C:/A_game_hub/src/app/layout.tsx`
- Create: `C:/A_game_hub/src/components/Navbar.tsx`
- Create: `C:/A_game_hub/src/components/AmbientGlow.tsx`
- Create: `C:/A_game_hub/src/components/GameSkeleton.tsx`

- [ ] **Step 1: Write Navbar component (glassmorphism)**

Write `C:/A_game_hub/src/components/Navbar.tsx`:
```tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="heading-high text-xl tracking-tight">
          GameHub
        </Link>
        <div className="flex items-center gap-6 text-zinc-400 text-sm font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            探索
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            排行榜
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            关于
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Write AmbientGlow component**

Write `C:/A_game_hub/src/components/AmbientGlow.tsx`:
```tsx
"use client";

interface AmbientGlowProps {
  /** CSS color value for the orb, e.g. "#6366f1" */
  primaryColor?: string;
  /** Secondary color for the second orb */
  secondaryColor?: string;
}

export function AmbientGlow({
  primaryColor = "#6366f1",
  secondaryColor = "#8b5cf6",
}: AmbientGlowProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary orb */}
      <div
        className="glow-orb w-[600px] h-[600px] -top-1/4 -right-1/4 animate-glow-pulse"
        style={{
          background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
        }}
      />
      {/* Secondary orb */}
      <div
        className="glow-orb w-[500px] h-[500px] -bottom-1/4 -left-1/5 animate-glow-pulse"
        style={{
          background: `radial-gradient(circle, ${secondaryColor}25 0%, transparent 70%)`,
          animationDelay: "-2s",
          animationDuration: "5s",
        }}
      />
    </div>
  );
}
```

- [ ] **Step 3: Write GameSkeleton component**

Write `C:/A_game_hub/src/components/GameSkeleton.tsx`:
```tsx
import { Skeleton } from "@/components/ui/skeleton";

export function GameCardSkeleton() {
  return (
    <div className="glass-card p-3 space-y-3">
      <Skeleton className="aspect-[3/4] w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function GameGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-8">
      <div className="flex gap-8">
        <Skeleton className="w-72 aspect-[3/4] rounded-lg flex-shrink-0" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
          <div className="flex gap-3">
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
          </div>
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Write root layout**

Write `C:/A_game_hub/src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AmbientGlow } from "@/components/AmbientGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameHub | 3A 游戏聚合探索",
  description: "探索顶级 3A 大作，查看评分、硬件需求与 AI 玩家评价",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen relative">
        <AmbientGlow />
        <Navbar />
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Create placeholder home page**

Write `C:/A_game_hub/src/app/page.tsx`:
```tsx
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="heading-high text-4xl mb-4">探索 3A 大作</h1>
      <p className="body-muted text-lg max-w-2xl">
        浏览顶级游戏，查看媒体评分、硬件需求分析与 AI 驱动的玩家评价摘要。
      </p>
    </div>
  );
}
```

- [ ] **Step 6: Verify build**

Run:
```bash
cd C:/A_game_hub && npm run build
```

Expected: Successful production build.

- [ ] **Step 7: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: add core layout components with glassmorphism, ambient glow, and skeletons"
```

---

### Task 5: Create TypeScript Type Definitions

**Files:**
- Create: `C:/A_game_hub/src/types/game.ts`
- Create: `C:/A_game_hub/src/lib/constants.ts`

- [ ] **Step 1: Write game types**

Write `C:/A_game_hub/src/types/game.ts`:
```typescript
export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
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
```

- [ ] **Step 2: Write constants**

Write `C:/A_game_hub/src/lib/constants.ts`:
```typescript
export const RAWG_BASE_URL = "https://api.rawg.io/api";

export const CACHE_TTL_SECONDS = 3600; // 1 hour

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
```

- [ ] **Step 3: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: add TypeScript type definitions and constants"
```

---

### Task 6: Build Cloudflare Worker — KV Cache Layer

**Files:**
- Create: `C:/A_game_hub/worker/types.ts`
- Create: `C:/A_game_hub/worker/kv.ts`
- Create: `C:/A_game_hub/worker/rate-limiter.ts`

- [ ] **Step 1: Write worker types**

Write `C:/A_game_hub/worker/types.ts`:
```typescript
export interface Env {
  RAW_GAMES_KV: KVNamespace;
  RATE_LIMIT_KV: KVNamespace;
  RAWG_API_KEY: string;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export interface RateLimitEntry {
  count: number;
  resetAt: number;
}
```

- [ ] **Step 2: Write KV cache helpers**

Write `C:/A_game_hub/worker/kv.ts`:
```typescript
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
      // Expired — delete stale entry
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
    // KV write failure is non-fatal; request proceeds without cache
    console.error(`Failed to write cache for key: ${key}`);
  }
}

export function buildCacheKey(path: string, params: URLSearchParams): string {
  const sorted = new URLSearchParams([...params.entries()].sort());
  return `rawg:${path}?${sorted.toString()}`;
}
```

- [ ] **Step 3: Write sliding window rate limiter**

Write `C:/A_game_hub/worker/rate-limiter.ts`:
```typescript
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

      // Reset window if expired
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
    // If rate limiter fails, allow the request (fail open)
    return { allowed: true };
  }
}
```

- [ ] **Step 4: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: add KV cache helpers and sliding window rate limiter for worker"
```

---

### Task 7: Build Cloudflare Worker — RAWG Proxy and Entry Point

**Files:**
- Create: `C:/A_game_hub/worker/rawg.ts`
- Create: `C:/A_game_hub/worker/index.ts`

- [ ] **Step 1: Write RAWG API client**

Write `C:/A_game_hub/worker/rawg.ts`:
```typescript
const RAWG_BASE = "https://api.rawg.io/api";

export async function fetchFromRawg(
  path: string,
  params: URLSearchParams,
  apiKey: string
): Promise<Response> {
  const url = new URL(`${RAWG_BASE}${path}`);
  params.set("key", apiKey);
  url.search = params.toString();

  const response = await fetch(url.toString(), {
    headers: {
      "Accept": "application/json",
      "User-Agent": "GameHub/1.0 (Cloudflare Worker)",
    },
  });

  if (!response.ok) {
    console.error(`RAWG API error: ${response.status} ${response.statusText}`);
    return new Response(
      JSON.stringify({
        error: "Upstream API error",
        status: response.status,
      }),
      {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return response;
}
```

- [ ] **Step 2: Write worker entry point**

Write `C:/A_game_hub/worker/index.ts`:
```typescript
import { Env } from "./types";
import { getCached, setCache, buildCacheKey } from "./kv";
import { checkRateLimit } from "./rate-limiter";
import { fetchFromRawg } from "./rawg";

const CACHE_TTL = 3600;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Health check
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Only proxy /api/* paths
    if (!url.pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404, headers: corsHeaders });
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

    // Strip /api prefix to get RAWG path
    const rawgPath = url.pathname.replace("/api", "");
    const params = new URLSearchParams(url.search);

    // Cache key
    const cacheKey = buildCacheKey(rawgPath, params);

    // Check cache
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

    // Fetch from RAWG
    const rawgResponse = await fetchFromRawg(
      rawgPath,
      params,
      env.RAWG_API_KEY
    );

    // Clone response to cache the body
    const data = await rawgResponse.clone().json();

    // Store in cache (don't await — fire and forget)
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
```

- [ ] **Step 3: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: add Cloudflare Worker entry point with RAWG proxy, cache-aside, and rate limiting"
```

---

### Task 8: Write Frontend API Client

**Files:**
- Create: `C:/A_game_hub/src/lib/api.ts`

- [ ] **Step 1: Write API client**

Write `C:/A_game_hub/src/lib/api.ts`:
```typescript
import { Game, GameListResponse } from "@/types/game";

const WORKER_URL =
  process.env.NEXT_PUBLIC_WORKER_URL || "https://gamehub-worker.example.workers.dev";

async function apiFetch<T>(
  path: string,
  params?: Record<string, string>
): Promise<T> {
  const url = new URL(`${WORKER_URL}/api${path}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v) url.searchParams.set(k, v);
    });
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.error || `API error: ${response.status}`
    );
  }

  return response.json();
}

export async function getGames(params?: {
  page?: number;
  page_size?: number;
  genres?: string;
  search?: string;
  ordering?: string;
  dates?: string;
}): Promise<GameListResponse> {
  const searchParams: Record<string, string> = {};
  if (params?.page) searchParams.page = String(params.page);
  if (params?.page_size) searchParams.page_size = String(params.page_size);
  if (params?.genres) searchParams.genres = params.genres;
  if (params?.search) searchParams.search = params.search;
  if (params?.ordering) searchParams.ordering = params.ordering;
  if (params?.dates) searchParams.dates = params.dates;

  return apiFetch<GameListResponse>("/games", searchParams);
}

export async function getGame(slug: string): Promise<Game> {
  return apiFetch<Game>(`/games/${slug}`);
}

export async function searchGames(query: string): Promise<GameListResponse> {
  return apiFetch<GameListResponse>("/games", { search: query, page_size: "10" });
}
```

- [ ] **Step 2: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: add frontend API client with typed RAWG proxy methods"
```

---

### Task 9: Configure Cloudflare Pages and Workers Deployment

**Files:**
- Create: `C:/A_game_hub/wrangler.toml`

- [ ] **Step 1: Write wrangler.toml**

Write `C:/A_game_hub/wrangler.toml`:
```toml
name = "gamehub"
compatibility_date = "2025-05-15"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"

# Worker for API proxy
[[workers]]
name = "gamehub-api"
main = "worker/index.ts"

[[workers.kv_namespaces]]
binding = "RAW_GAMES_KV"
id = "RAW_GAMES_KV_NAMESPACE_ID"  # Replace after `wrangler kv:namespace create`
preview_id = "RAW_GAMES_KV_PREVIEW_ID"

[[workers.kv_namespaces]]
binding = "RATE_LIMIT_KV"
id = "RATE_LIMIT_KV_NAMESPACE_ID"  # Replace after `wrangler kv:namespace create`
preview_id = "RATE_LIMIT_KV_PREVIEW_ID"

[workers.vars]
RAWG_API_KEY = ""  # Set via `wrangler secret put RAWG_API_KEY`

[env.production]
[env.production.vars]
RAWG_API_KEY = ""  # Set via `wrangler secret put RAWG_API_KEY --env production`
```

- [ ] **Step 2: Verify wrangler is authenticated**

Run:
```bash
npx wrangler whoami
```

Expected: Cloudflare account email displayed. If not, run `npx wrangler login`.

- [ ] **Step 3: Create KV namespaces**

Run:
```bash
npx wrangler kv:namespace create "RAW_GAMES_KV"
npx wrangler kv:namespace create "RATE_LIMIT_KV"
npx wrangler kv:namespace create "RAW_GAMES_KV" --preview
npx wrangler kv:namespace create "RATE_LIMIT_KV" --preview
```

Expected: Namespace IDs returned. Update `wrangler.toml` with the actual IDs.

- [ ] **Step 4: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "feat: add wrangler.toml with KV namespace config for Cloudflare deployment"
```

---

### Task 10: Local Development Verification

- [ ] **Step 1: Build Next.js app**

Run:
```bash
cd C:/A_game_hub && npm run build
```

Expected: Successful build with no errors.

- [ ] **Step 2: Start Next.js dev server**

Run:
```bash
cd C:/A_game_hub && npm run dev
```

Expected: Dev server at `http://localhost:3000`. Visit and verify dark glassmorphism navbar and placeholder home page render correctly.

- [ ] **Step 3: Test worker locally with wrangler**

Run:
```bash
cd C:/A_game_hub && npx wrangler dev worker/index.ts
```

Expected: Worker starts on `http://localhost:8787`. Test health endpoint:
```bash
curl http://localhost:8787/health
```
Expected: `{"status":"ok"}`

- [ ] **Step 4: Test worker cache behavior**

Run (requires RAWG_API_KEY set):
```bash
curl http://localhost:8787/api/games?page_size=1
```
Expected: First request `X-Cache: MISS`, second request `X-Cache: HIT`.

- [ ] **Step 5: Commit**

```bash
cd C:/A_game_hub && git add -A && git commit -m "chore: verify local development workflow for Next.js + Worker"
```

---
