"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Star, Calendar } from "lucide-react";
import { ALL_GAMES } from "@/lib/games";
import { GameImage } from "@/components/GameImage";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Tab = "metacritic" | "rating" | "released";

const TABS: { key: Tab; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { key: "metacritic", label: "媒体评分", icon: Trophy },
  { key: "rating", label: "玩家评分", icon: Star },
  { key: "released", label: "最新发行", icon: Calendar },
];

function RankIcon({ rank }: { rank: number }) {
  if (rank === 0) return <span className="text-lg">🥇</span>;
  if (rank === 1) return <span className="text-lg">🥈</span>;
  if (rank === 2) return <span className="text-lg">🥉</span>;
  return <span className="text-[#999] font-bold text-sm w-6 text-center">{rank + 1}</span>;
}

export default function LeaderboardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("metacritic");

  const sorted = [...ALL_GAMES].sort((a, b) => {
    switch (tab) {
      case "metacritic": return b.metacritic - a.metacritic;
      case "rating": return b.rating - a.rating;
      case "released": return new Date(b.released).getTime() - new Date(a.released).getTime();
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 md:px-6 pt-20 pb-16">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft size={16} className="mr-2" />
        返回
      </Button>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] flex items-center gap-2 mb-1">
          <Trophy size={24} className="text-[#ff9500]" />
          游戏排行榜
        </h1>
        <p className="text-[#999] text-sm mb-6">基于多维度的 3A 大作排名</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 p-1 bg-[#f0f0f0] rounded-xl w-fit">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === t.key
                ? "bg-white text-[#1a1a1a] shadow-sm"
                : "text-[#999] hover:text-[#666]"
            }`}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {/* List */}
      <motion.div
        key={tab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="space-y-2"
      >
        {sorted.map((game, i) => (
          <motion.div
            key={game.slug}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <Link href={`/game/${game.slug}`} className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40 rounded-2xl block">
              <div className="card p-3 flex items-center gap-4 hover:border-[#15B04F]/20 hover:shadow-sm transition-all">
                <div className="flex-shrink-0 w-8 flex items-center justify-center">
                  <RankIcon rank={i} />
                </div>

                <div className="relative w-12 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <GameImage
                    src={game.background_image}
                    alt={game.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1a1a1a] font-semibold text-sm truncate">{game.name}</h3>
                  <p className="text-[11px] text-[#999] truncate mt-0.5">
                    {game.platforms?.slice(0, 2).map((p) => p.platform.name).join(" · ")}
                    {" · "}
                    {game.genres?.slice(0, 2).map((g) => g.name).join(" · ")}
                  </p>
                </div>

                <div className="flex-shrink-0 text-right">
                  <div className="text-lg font-bold font-mono tabular-nums text-[#15B04F]">
                    {tab === "released"
                      ? game.released?.slice(0, 4)
                      : tab === "metacritic"
                        ? game.metacritic
                        : game.rating.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-[#999]">
                    {tab === "released" ? "发行" : tab === "metacritic" ? "MC" : "评分"}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
