"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Monitor } from "lucide-react";
import type { Game } from "@/types/game";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  game: Game;
  index: number;
}

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' fill='%2318181b'%3E%3Crect width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='%233f3f46' text-anchor='middle' dy='.3em' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";

function getMetacriticColor(score: number): string {
  if (score >= 90) return "bg-green-500 text-white";
  if (score >= 75) return "bg-green-400 text-black";
  if (score >= 50) return "bg-yellow-500 text-black";
  return "bg-red-500 text-white";
}

export function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
    >
      <div className="glass-card overflow-hidden transition-shadow duration-300 group-hover:border-indigo-500/30 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
        {/* Cover Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={game.background_image || PLACEHOLDER}
            alt={game.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            loading={index < 8 ? "eager" : "lazy"}
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Rating badge */}
          {game.rating > 0 && (
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs text-white">
              <Star size={11} className="text-yellow-400 fill-yellow-400" />
              {game.rating.toFixed(1)}
            </div>
          )}

          {/* Metacritic badge */}
          {game.metacritic > 0 && (
            <div
              className={`absolute top-2 right-2 rounded-md px-1.5 py-0.5 text-xs font-bold ${getMetacriticColor(game.metacritic)}`}
            >
              {game.metacritic}
            </div>
          )}

          {/* Platform icons on hover */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Monitor size={13} className="text-white/70" />
            <span className="text-xs text-white/70 truncate">
              {game.platforms?.slice(0, 3).map((p) => p.platform.name).join(" · ")}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-3 space-y-2">
          <h3 className="text-white font-semibold text-sm leading-tight truncate">
            {game.name}
          </h3>

          {game.genres && game.genres.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {game.genres.slice(0, 3).map((g) => (
                <Badge key={g.id} variant="secondary" className="text-[10px] px-1.5 py-0">
                  {g.name}
                </Badge>
              ))}
            </div>
          )}

          {game.released && (
            <p className="text-xs text-zinc-500">{new Date(game.released).getFullYear()}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
