"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Game } from "@/types/game";
import { GameCard } from "@/components/GameCard";

export function GameRow({
  title,
  games,
  href,
  loading,
}: {
  title: string;
  games: Game[];
  href?: string;
  loading?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <div>
      <div className="section-header px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="section-title">{title}</h2>
        <div className="flex items-center gap-2">
          {href && (
            <Link href={href} className="section-more">
              查看全部 <ArrowRight size={13} />
            </Link>
          )}
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
            aria-label="向左滚动"
          >
            <ChevronLeft size={16} className="text-[#666]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
            aria-label="向右滚动"
          >
            <ChevronRight size={16} className="text-[#666]" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-4 md:px-6 max-w-7xl mx-auto pb-2 hide-scrollbar"
        >
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-[240px] sm:w-[280px]">
                  <GameRowSkeleton />
                </div>
              ))
            : games.map((game, i) => (
                <div key={game.slug} className="flex-shrink-0 w-[240px] sm:w-[280px]">
                  <GameCard game={game} index={i} />
                </div>
              ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f5f5f5] to-transparent hidden md:block" />
      </div>
    </div>
  );
}

function GameRowSkeleton() {
  return (
    <div className="card p-0 overflow-hidden">
      <div className="aspect-video shimmer-bg" />
      <div className="p-3 space-y-2">
        <div className="h-4 w-3/4 rounded bg-[#e8e8e8] animate-pulse" />
        <div className="flex gap-2">
          <div className="h-5 w-12 rounded bg-[#e8e8e8] animate-pulse" />
          <div className="h-5 w-10 rounded bg-[#e8e8e8] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
