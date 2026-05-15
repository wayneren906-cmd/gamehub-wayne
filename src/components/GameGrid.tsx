"use client";

import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";
import { GameGridSkeleton } from "@/components/GameSkeleton";
import type { Game } from "@/types/game";

interface GameGridProps {
  games: Game[];
  loading: boolean;
  error?: string | null;
  totalCount?: number;
}

export function GameGrid({ games, loading, error, totalCount }: GameGridProps) {
  if (error) {
    return (
      <div className="glass-card p-12 text-center">
        <p className="text-red-400 mb-2">加载失败</p>
        <p className="text-zinc-500 text-sm">{error}</p>
      </div>
    );
  }

  if (loading) {
    return <GameGridSkeleton count={12} />;
  }

  if (games.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <p className="text-zinc-500">没有找到游戏</p>
        <p className="text-zinc-600 text-sm mt-1">尝试调整筛选条件</p>
      </div>
    );
  }

  return (
    <div>
      {totalCount && (
        <p className="text-xs text-zinc-600 mb-4">
          共 {totalCount.toLocaleString()} 款游戏
        </p>
      )}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {games.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </motion.div>
    </div>
  );
}
