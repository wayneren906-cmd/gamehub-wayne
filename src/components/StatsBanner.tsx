"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Star, Trophy, MessageSquare } from "lucide-react";
import type { Game } from "@/types/game";
import { ALL_GAMES } from "@/lib/games";

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}

function StatItem({
  value,
  label,
  icon: Icon,
}: {
  value: number;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  const count = useCountUp(value);
  return (
    <div className="text-center p-4 rounded-xl bg-[#f5f5f5] border border-[#e8e8e8]">
      <Icon size={18} className="text-[#15B04F] mx-auto mb-2 opacity-60" />
      <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight tabular-nums">
        {count}
      </div>
      <div className="text-xs text-[#999] mt-1">{label}</div>
    </div>
  );
}

export function StatsBanner({ games }: { games: Game[] }) {
  const avgMeta =
    games.length > 0
      ? Math.round(games.reduce((s, g) => s + g.metacritic, 0) / games.length)
      : 0;

  const genreSet = new Set<string>();
  games.forEach((g) => g.genres?.forEach((genre) => genreSet.add(genre.slug)));

  const totalReviews = ALL_GAMES.reduce(
    (s, d) => s + (d.reviews?.length || 0),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatItem value={games.length} label="收录游戏" icon={Gamepad2} />
        <StatItem value={avgMeta} label="平均 Metacritic" icon={Trophy} />
        <StatItem value={genreSet.size} label="涵盖类型" icon={Star} />
        <StatItem value={totalReviews} label="玩家评测" icon={MessageSquare} />
      </div>
    </motion.div>
  );
}
