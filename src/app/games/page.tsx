"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { FilterBar, type Filters } from "@/components/FilterBar";
import { GameGrid } from "@/components/GameGrid";
import { GenreBanner } from "@/components/GenreBanner";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ALL_GAMES } from "@/lib/games";
import { applyClientFilters } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";
import { GENRES } from "@/lib/constants";
import { Compass } from "lucide-react";

function parseUrlFilters(): Partial<Filters> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("q") || "",
    genres: params.get("genre") || "",
    ordering: params.get("sort") || "-rating",
  };
}

function GamesContent() {
  const [initialFilters] = useState(() => parseUrlFilters());

  const [filters, setFilters] = useState<Filters>({
    genres: initialFilters.genres || "",
    ordering: initialFilters.ordering || "-rating",
    search: initialFilters.search || "",
  });

  const { favorites } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  let filtered = showFavorites
    ? [...ALL_GAMES].filter((g) => favorites.has(g.slug))
    : applyClientFilters(ALL_GAMES, filters);

  const activeGenreInfo = filters.genres
    ? GENRES.find((g) => g.value === filters.genres)
    : null;

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16">
      <Breadcrumb items={[{ label: "游戏发现" }]} />
      <div className="mt-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-2">
          <Compass size={32} className="text-[#15B04F]" />
          游戏发现
        </h1>
        <p className="text-[#999]">
          探索 {ALL_GAMES.length} 款精选 3A 大作，按你的喜好筛选
        </p>
      </div>

      {activeGenreInfo && !showFavorites && (
        <GenreBanner
          label={activeGenreInfo.label}
          count={filtered.length}
          onClear={() => {
            setFilters((f) => ({ ...f, genres: "" }));
            window.history.replaceState(null, "", window.location.pathname);
          }}
        />
      )}

      <FilterBar
        onFiltersChange={(f) => {
          setFilters(f);
          setShowFavorites(false);
          setVisibleCount(24);
        }}
        initialFilters={initialFilters}
        favoritesCount={favorites.size}
        showFavorites={showFavorites}
        onFavoritesToggle={() => setShowFavorites((v) => !v)}
        gameNames={ALL_GAMES.map((g) => g.name)}
        onSuggestionClick={(name) => {
          const match = ALL_GAMES.find((g) => g.name === name);
          if (match) window.location.href = `/game/${match.slug}`;
        }}
      />

      <div className="mt-6">
        {showFavorites && favorites.size === 0 ? (
          <div className="card p-12 text-center">
            <p className="text-[#666] mb-2">还没有收藏游戏</p>
            <p className="text-[#999] text-sm">
              浏览游戏时点击 <span className="text-red-500">♥</span> 即可加入收藏
            </p>
            <Link href="/games" className="inline-block mt-4 px-5 py-2 rounded-xl bg-[#15B04F] text-white text-sm font-semibold hover:bg-[#149a46] transition-colors">
              去发现游戏
            </Link>
          </div>
        ) : (
          <>
            <GameGrid
              games={filtered.slice(0, visibleCount)}
              loading={false}
              error={null}
              totalCount={filtered.length}
            />
            {visibleCount < filtered.length && (
              <div className="flex justify-center pt-8">
                <button
                  onClick={() =>
                    setVisibleCount((c) => Math.min(c + 24, filtered.length))
                  }
                  className="px-8 py-3 rounded-xl bg-[#e8f5ec] border border-[#15B04F]/20 text-[#15B04F] hover:bg-[#d4edd9] hover:text-[#149a46] transition-colors text-sm font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
                >
                  加载更多 ({filtered.length - visibleCount} 款未显示)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function GamesPage() {
  return (
    <Suspense fallback={null}>
      <GamesContent />
    </Suspense>
  );
}
