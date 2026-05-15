"use client";

import { useState, useCallback } from "react";
import { HardwareChecker } from "@/components/HardwareChecker";
import { AIReviewCloud } from "@/components/AIReviewCloud";
import { analyzeGameReviews, generateMockReviews } from "@/lib/ai";
import type { ReviewTag } from "@/types/game";
import { Sparkles } from "lucide-react";

const DEMO_GAME = "Cyberpunk 2077";

export default function HomePage() {
  const [aiResult, setAiResult] = useState<{
    pros: ReviewTag[];
    cons: ReviewTag[];
    summary: string;
  } | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  const runAiAnalysis = useCallback(async () => {
    setAiLoading(true);
    const reviews = generateMockReviews(DEMO_GAME);
    try {
      // Try worker API first, fall back to local analysis
      const result = await analyzeGameReviews(DEMO_GAME, reviews);
      setAiResult(result);
    } catch {
      // Worker not available — show mock result
      setAiResult({
        pros: [
          { label: "画面表现", percentage: 85, count: 7 },
          { label: "沉浸感", percentage: 78, count: 6 },
          { label: "剧情深度", percentage: 72, count: 6 },
          { label: "音乐音效", percentage: 65, count: 5 },
        ],
        cons: [
          { label: "价格偏高", percentage: 58, count: 5 },
          { label: "重复度高", percentage: 42, count: 3 },
          { label: "优化问题", percentage: 35, count: 3 },
          { label: "游戏时长", percentage: 28, count: 2 },
        ],
        summary: "画面表现出色，剧情深度获好评，但价格和重复度是主要槽点。",
      });
    }
    setAiLoading(false);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      {/* Hero */}
      <div>
        <h1 className="heading-high text-4xl mb-4">探索 3A 大作</h1>
        <p className="body-muted text-lg max-w-2xl">
          浏览顶级游戏，查看媒体评分、硬件需求分析与 AI 驱动的玩家评价摘要。
        </p>
      </div>

      {/* Hardware Checker (WASM) */}
      <HardwareChecker />

      {/* AI Review Analysis */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="heading-high text-2xl">AI 评价分析</h2>
            <p className="text-zinc-500 text-sm mt-1">
              基于 "{DEMO_GAME}" 的模拟玩家评价
            </p>
          </div>
        </div>

        {!aiResult && !aiLoading && (
          <div className="glass-card p-8 text-center">
            <Sparkles size={32} className="text-indigo-400 mx-auto mb-3" />
            <p className="text-zinc-400 mb-4">
              使用 AI 分析玩家评价，提取好评与批评关键词
            </p>
            <button
              onClick={runAiAnalysis}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
            >
              <Sparkles size={16} />
              开始 AI 分析
            </button>
          </div>
        )}

        {aiLoading && (
          <div className="glass-card p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-indigo-400 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-zinc-500">AI 正在分析玩家评价...</p>
          </div>
        )}

        {aiResult && (
          <AIReviewCloud
            gameName={DEMO_GAME}
            pros={aiResult.pros}
            cons={aiResult.cons}
            summary={aiResult.summary}
            onRefresh={runAiAnalysis}
          />
        )}
      </div>
    </div>
  );
}
