"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AIReviewCloud } from "@/components/AIReviewCloud";
import type { ReviewTag } from "@/types/game";

interface AIReviewSectionProps {
  gameName: string;
  reviewCount: number;
  isLoading: boolean;
  result: { pros: ReviewTag[]; cons: ReviewTag[]; summary: string } | null;
  onAnalyze: () => void;
  triggerLabel?: string;
  description?: string;
}

export function AIReviewSection({
  gameName,
  reviewCount,
  isLoading,
  result,
  onAnalyze,
  triggerLabel,
  description,
}: AIReviewSectionProps) {
  if (result) {
    return (
      <AIReviewCloud
        gameName={gameName}
        pros={result.pros}
        cons={result.cons}
        summary={result.summary}
        onRefresh={onAnalyze}
      />
    );
  }

  if (isLoading) {
    return (
      <div className="card p-8 text-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#15B04F] border-t-transparent rounded-full mx-auto mb-3" />
        <p className="text-[#999]">AI 正在基于玩家评价进行分析...</p>
      </div>
    );
  }

  return (
    <div className="card p-8 text-center">
      <Sparkles size={32} className="text-[#15B04F] mx-auto mb-3" />
      <p className="text-[#666] mb-4">
        {description || "基于玩家评价进行 AI 分析"}
      </p>
      <Button onClick={onAnalyze} disabled={reviewCount === 0}>
        <Sparkles size={16} className="mr-2" />
        {reviewCount === 0
          ? "暂无评价数据"
          : triggerLabel || "开始 AI 分析"}
      </Button>
    </div>
  );
}
