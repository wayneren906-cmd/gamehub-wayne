"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { GameRow } from "@/components/GameRow";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ContentSection } from "@/components/ContentSection";
import { ALL_GAMES } from "@/lib/games";
import { getNews, getGuides, getReviews } from "@/lib/content";
import { useFavorites } from "@/hooks/useFavorites";

// Deduplicate helper: prefer metacritic
function dedupe(games: (typeof ALL_GAMES)[number][]) {
  const seen = new Set<string>();
  return games.filter((g) => {
    if (seen.has(g.slug)) return false;
    seen.add(g.slug);
    return true;
  });
}

export default function HomePage() {
  const { favorites } = useFavorites();

  const featured = dedupe([...ALL_GAMES].sort((a, b) => b.metacritic - a.metacritic)).slice(0, 8);
  const hot = dedupe([...ALL_GAMES].sort((a, b) => b.rating - a.rating)).slice(0, 10);
  const latest = dedupe([...ALL_GAMES].sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime())).slice(0, 10);
  const popular = dedupe([...ALL_GAMES].sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0))).slice(0, 10);
  const favoritesList = favorites.size > 0
    ? ALL_GAMES.filter((g) => favorites.has(g.slug)).slice(0, 10)
    : [];

  return (
    <div className="pb-8">
      {/* Search bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-3 pb-2">
        <Link href="/games">
          <div className="flex items-center gap-2 bg-white border border-[#e8e8e8] rounded-xl px-4 py-3 cursor-pointer hover:border-[#15B04F]/30 transition-colors">
            <Search size={17} className="text-[#999] flex-shrink-0" />
            <span className="text-[15px] text-[#999]">搜索游戏...</span>
          </div>
        </Link>
      </div>

      {/* Featured banner */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-2 pb-3">
        <HeroCarousel games={featured.slice(0, 5)} compact />
      </div>

      {/* Favorites row */}
      {favoritesList.length > 0 && (
        <div className="mt-6">
          <GameRow
            title="我的收藏"
            games={favoritesList}
          />
        </div>
      )}

      {/* Hot games row */}
      <div className="mt-8">
        <GameRow
          title="热门推荐"
          games={hot}
          href="/games?sort=-rating"
        />
      </div>

      {/* Latest row */}
      <div className="mt-8">
        <GameRow
          title="最新上架"
          games={latest}
          href="/games?sort=-released"
        />
      </div>

      {/* Popular discussions row */}
      <div className="mt-8">
        <GameRow
          title="热议大作"
          games={popular}
          href="/leaderboard"
        />
      </div>

      {/* Content sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 space-y-10">
        <ContentSection
          title="最新资讯"
          subtitle="游戏圈新鲜事"
          type="news"
          items={getNews().slice(0, 3)}
          seeAll="/news"
        />
        <ContentSection
          title="精选攻略"
          subtitle="从入门到精通"
          type="guides"
          items={getGuides().slice(0, 3)}
          seeAll="/guides"
        />
        <ContentSection
          title="深度测评"
          subtitle="真实游戏体验"
          type="reviews"
          items={getReviews().slice(0, 3)}
          seeAll="/reviews"
        />
      </div>
    </div>
  );
}
