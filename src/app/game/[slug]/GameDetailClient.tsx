"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen, Gamepad2, ThumbsUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameMeta } from "@/components/GameMeta";
import { AIReviewSection } from "@/components/AIReviewSection";
import { DetailSkeleton } from "@/components/GameSkeleton";
import { GameImage } from "@/components/GameImage";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { NewsTimeline } from "@/components/NewsTimeline";
import { useGameDetail } from "@/hooks/useGameDetail";
import { analyzeGameReviews, generateFallbackAnalysis, generateMockReviews } from "@/lib/ai";
import { getSimilarGames } from "@/lib/games";
import type { ReviewTag } from "@/types/game";

export default function GameDetailClient() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { game, loading, error } = useGameDetail(slug);

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
      const mockReviews = generateMockReviews(game.name);
      const allReviews = [...new Set([...game.reviews, ...mockReviews])];
      const result = await analyzeGameReviews(game.name, allReviews);
      setAiResult(result);
    } catch {
      setAiResult(generateFallbackAnalysis(game.name));
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
        <div className="card p-12 text-center">
          <p className="text-[#666] text-lg mb-2">{error || "游戏未找到"}</p>
          <p className="text-[#999] text-sm">请检查链接是否正确</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero — compact, 16:6 ratio */}
      <div className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
        <GameImage
          src={game.hero_image || game.background_image}
          alt={game.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />

        <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
          <Button variant="ghost" onClick={() => router.back()} className="text-[#333] hover:bg-black/5">
            <ArrowLeft size={16} className="mr-2" />
            返回
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
              {game.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#fff8f0] text-[#ff9500]">
                <Star size={11} className="fill-[#ff9500]" />
                {game.rating.toFixed(1)}
              </span>
              {game.metacritic > 0 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold font-mono bg-[#e8f5ec] text-[#15B04F]">
                  MC {game.metacritic}
                </span>
              )}
              {game.genres?.map((g) => (
                <span key={g.id} className="chip">
                  {g.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <Breadcrumb items={[
          { label: "游戏", href: "/games" },
          { label: game.name },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {game.description_raw && (
              <motion.section
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="card p-5 md:p-6"
              >
                <h2 className="text-base font-bold text-[#1a1a1a] flex items-center gap-2 mb-3">
                  <BookOpen size={16} />
                  游戏简介
                </h2>
                <p className="text-[#333] text-sm leading-relaxed">
                  {game.description_raw}
                </p>
              </motion.section>
            )}

            {game.gameplay && (
              <motion.section
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="card p-5 md:p-6"
              >
                <h2 className="text-base font-bold text-[#1a1a1a] flex items-center gap-2 mb-3">
                  <Gamepad2 size={16} />
                  玩法特色
                </h2>
                <p className="text-[#333] text-sm leading-relaxed">
                  {game.gameplay}
                </p>
              </motion.section>
            )}

            {game.recommendation && (
              <motion.section
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="card p-5 md:p-6"
              >
                <h2 className="text-base font-bold text-[#1a1a1a] flex items-center gap-2 mb-3">
                  <ThumbsUp size={16} />
                  推荐理由
                </h2>
                <p className="text-[#333] text-sm leading-relaxed">
                  {game.recommendation}
                </p>
              </motion.section>
            )}

            {(game.screenshots?.length ?? 0) > 0 && (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <ScreenshotGallery screenshots={game.screenshots!} gameName={game.name} />
              </motion.div>
            )}

            {(game.news?.length ?? 0) > 0 && (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              >
                <NewsTimeline news={game.news!} />
              </motion.div>
            )}

            <motion.section
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <AIReviewSection
                gameName={game.name}
                reviewCount={game.reviews?.length || 0}
                isLoading={aiLoading}
                result={aiResult}
                onAnalyze={runAiAnalysis}
              />
            </motion.section>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-20 space-y-5">
              <GameMeta game={game} />

              {(() => {
                const related = getSimilarGames(game.slug, 4);
                if (related.length === 0) return null;
                return (
                  <div className="card p-4">
                    <h3 className="text-sm font-bold text-[#1a1a1a] mb-3">你可能也喜欢</h3>
                    <div className="space-y-2">
                      {related.map((g) => (
                        <Link
                          key={g.slug}
                          href={`/game/${g.slug}`}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#f5f5f5] transition-colors group"
                        >
                          <div className="relative w-10 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <GameImage
                              src={g.background_image}
                              alt={g.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[#1a1a1a] text-xs font-medium truncate group-hover:text-[#15B04F] transition-colors">
                              {g.name}
                            </p>
                            <p className="text-[#999] text-[10px] flex items-center gap-1 mt-0.5">
                              <Star size={9} className="text-[#ff9500] fill-[#ff9500]" />
                              {g.rating.toFixed(1)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
