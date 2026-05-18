"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Game } from "@/types/game";
import { GameImage } from "@/components/GameImage";
import { useFavorites } from "@/hooks/useFavorites";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GameCardProps {
  game: Game;
  index?: number;
}

export function GameCard({ game, index = 0 }: GameCardProps) {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(game.slug);
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
    >
      <Link
        href={`/game/${game.slug}`}
        className="block group cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40 focus-visible:ring-offset-2"
      >
        <div className="card-hover">
          <div className="relative aspect-video overflow-hidden">
            <GameImage
              src={game.background_image}
              alt={game.name}
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-105"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 22vw"
              priority={index < 4}
              objectPosition="top"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle(game.slug);
              }}
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
              aria-label={fav ? "取消收藏" : "收藏"}
            >
              <HeartIcon filled={fav} />
            </button>
          </div>

          <div className="p-3">
            <h3 className="text-[14px] font-semibold text-[#1a1a1a] truncate leading-tight">
              {game.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5">
              {game.metacritic > 0 && (
                <span className="inline-flex items-center text-[11px] font-bold font-mono text-[#15B04F] bg-[#e8f5ec] px-1.5 py-0.5 rounded">
                  {game.metacritic}
                </span>
              )}
              <span className="flex items-center gap-0.5 text-[12px] text-[#ff9500] font-semibold">
                <Star size={10} className="fill-[#ff9500]" />
                {game.rating.toFixed(1)}
              </span>
              {game.genres?.slice(0, 2).map((g) => (
                <span key={g.id} className="text-[11px] text-[#999]">
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "#e74c3c" : "none"}
      stroke={filled ? "#e74c3c" : "#999"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
