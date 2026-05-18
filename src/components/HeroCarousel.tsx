"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Game } from "@/types/game";
import { GameImage } from "@/components/GameImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroCarouselProps {
  games: Game[];
  compact?: boolean;
}

export function HeroCarousel({ games, compact = false }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const featured = games.slice(0, 5);
  const game = featured[current];

  const next = useCallback(() => {
    if (paused) return;
    setCurrent((c) => (c + 1) % featured.length);
  }, [featured.length, paused]);

  const prev = useCallback(() => {
    if (paused) return;
    setCurrent((c) => (c - 1 + featured.length) % featured.length);
  }, [featured.length, paused]);

  useEffect(() => {
    if (featured.length <= 1 || reducedMotion) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, featured.length, reducedMotion]);

  if (featured.length === 0) return null;

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-[#e8e8e8]"
      style={{ aspectRatio: compact ? "3/1" : "2/1" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <GameImage
            src={game?.hero_image || game?.background_image || ""}
            alt={game?.name || ""}
            fill
            className="object-cover"
            priority
            objectPosition={game?.hero_image ? "center" : "top"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {game?.name}
              </h2>
              <div className="flex items-center gap-2 mb-3">
                {game?.metacritic > 0 && (
                  <span className="inline-flex items-center text-[12px] font-bold font-mono text-[#15B04F] bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">
                    MC {game.metacritic}
                  </span>
                )}
                <span className="flex items-center gap-0.5 text-[12px] text-[#ff9500] font-semibold bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">
                  <Star size={10} className="fill-[#ff9500]" />
                  {game?.rating?.toFixed(1)}
                </span>
                <span className="text-[12px] text-white/70">
                  {game?.genres?.slice(0, 2).map((g) => g.name).join(" · ")}
                </span>
              </div>
              <Link
                href={`/game/${game?.slug}`}
                className="inline-flex items-center px-5 py-2 rounded-xl bg-[#15B04F] text-white text-sm font-semibold hover:bg-[#149a46] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                查看详情
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      {featured.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="上一张"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <div className="flex items-center gap-1.5">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                style={{
                  width: i === current ? 16 : 6,
                  height: 6,
                  background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                }}
                aria-label={`第 ${i + 1} 张`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="下一张"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
