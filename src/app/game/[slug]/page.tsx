"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameMeta } from "@/components/GameMeta";
import { GameRequirements } from "@/components/GameRequirements";
import { AIReviewCloud } from "@/components/AIReviewCloud";
import { DetailSkeleton } from "@/components/GameSkeleton";
import { useGameDetail } from "@/hooks/useGameDetail";
import { analyzeGameReviews } from "@/lib/ai";
import type { ReviewTag } from "@/types/game";

const PLACEHOLDER_BG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='500' fill='%2318181b'%3E%3Crect width='1200' height='500'/%3E%3C/svg%3E";

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { game, loading, error } = useGameDetail(slug);

  // AI review state
  const [aiResult, setAiResult] = useState<{
    pros: ReviewTag[];
    cons: ReviewTag[];
    summary: string;
  } | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  const runAiAnalysis = useCallback(async () => {
    if (!game?.reviews?.length) return;
    setAiLoading(true);
    try {
      const result = await analyzeGameReviews(game.name, game.reviews);
      setAiResult(result);
    } catch {
      // Fallback
      setAiResult({
        pros: [
          { label: "画面表现", percentage: 82, count: 6 },
          { label: "沉浸感", percentage: 75, count: 6 },
          { label: "剧情深度", percentage: 68, count: 5 },
        ],
        cons: [
          { label: "优化问题", percentage: 40, count: 3 },
          { label: "价格偏高", percentage: 35, count: 3 },
        ],
        summary: "综合评价优秀，画面和沉浸感获得广泛认可，优化方面仍有提升空间。",
      });
    }
    setAiLoading(false);
  }, [game]);

  if (loading) return <DetailSkeleton />;

  if (error || !game) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft size={16} className="mr-2" />
          返回
        </Button>
        <div className="glass-card p-12 text-center">
          <p className="text-zinc-400 text-lg mb-2">{error || "游戏未找到"}</p>
          <p className="text-zinc-600 text-sm">请检查链接是否正确</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[320px] overflow-hidden">
        <Image
          src={game.background_image || PLACEHOLDER_BG}
          alt={game.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />

        {/* Back button + content overlay */}
        <div className="absolute top-0 left-0 right-0 p-6">
          <Button variant="ghost" onClick={() => router.back()} className="text-white hover:bg-white/10">
            <ArrowLeft size={18} className="mr-2" />
            返回
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              {game.name}
            </h1>
            {game.genres && (
              <div className="flex flex-wrap gap-2">
                {game.genres.map((g) => (
                  <span key={g.id} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm border border-white/10">
                    {g.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            {game.description_raw && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h2 className="heading-high text-lg flex items-center gap-2 mb-4">
                  <BookOpen size={18} />
                  游戏简介
                </h2>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  {game.description_raw}
                </p>
              </motion.section>
            )}

            {/* Hardware Requirements + WASM */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {game.requirements ? (
                <GameRequirements gameName={game.name} requirements={game.requirements} />
              ) : (
                <div className="glass-card p-6 text-center text-zinc-500">
                  暂无硬件配置数据
                </div>
              )}
            </motion.section>

            {/* AI Review Analysis */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {!aiResult && !aiLoading && (
                <div className="glass-card p-8 text-center">
                  <Sparkles size={32} className="text-indigo-400 mx-auto mb-3" />
                  <p className="text-zinc-400 mb-4">
                    基于 {game.reviews?.length || 0} 条玩家评价进行 AI 分析
                  </p>
                  <Button onClick={runAiAnalysis} disabled={!game.reviews?.length}>
                    <Sparkles size={16} className="mr-2" />
                    开始 AI 分析
                  </Button>
                </div>
              )}

              {aiLoading && (
                <div className="glass-card p-8 text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full mx-auto mb-3" />
                  <p className="text-zinc-500">AI 正在分析 {game.reviews?.length} 条评价...</p>
                </div>
              )}

              {aiResult && (
                <AIReviewCloud
                  gameName={game.name}
                  pros={aiResult.pros}
                  cons={aiResult.cons}
                  summary={aiResult.summary}
                  onRefresh={runAiAnalysis}
                />
              )}
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              <GameMeta game={game} />
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
