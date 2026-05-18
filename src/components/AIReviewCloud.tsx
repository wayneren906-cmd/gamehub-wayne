"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ThumbsUp, ThumbsDown, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReviewTag } from "@/types/game";

interface AIReviewCloudProps {
  gameName: string;
  pros: ReviewTag[];
  cons: ReviewTag[];
  summary?: string;
  loading?: boolean;
  onRefresh?: () => void;
}

function TagBubble({
  tag,
  type,
  index,
  maxCount,
}: {
  tag: ReviewTag;
  type: "pro" | "con";
  index: number;
  maxCount: number;
}) {
  const ratio = maxCount > 0 ? tag.percentage / 100 : 0.5;
  const baseSize = 12;
  const maxSize = 20;
  const fontSize = baseSize + ratio * (maxSize - baseSize);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-medium transition-colors cursor-default",
        type === "pro"
          ? "bg-[#e8f5ec] border-[#15B04F]/30 text-[#15B04F] hover:bg-[#d4edd9]"
          : "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
      )}
      style={{ fontSize: `${fontSize}px` }}
      title={`${tag.percentage}% 的玩家提及 (约 ${tag.count} 条评价)`}
    >
      {tag.label}
      <span className="opacity-60 text-[0.7em]">{tag.percentage}%</span>
    </motion.span>
  );
}

export function AIReviewCloud({
  gameName,
  pros,
  cons,
  summary,
  loading,
  onRefresh,
}: AIReviewCloudProps) {
  const maxCount = Math.max(
    ...pros.map((p) => p.percentage),
    ...cons.map((c) => c.percentage),
    1
  );

  return (
    <div className="card p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-[#15B04F]" />
          <h3 className="text-lg font-bold text-[#1a1a1a]">AI 玩家评价分析</h3>
          {loading && (
            <span className="text-xs text-[#999] animate-pulse">分析中...</span>
          )}
        </div>
        {onRefresh && (
          <Button variant="ghost" size="sm" onClick={onRefresh} disabled={loading}>
            <RefreshCw size={14} className={cn(loading && "animate-spin")} />
          </Button>
        )}
      </div>

      {/* Summary */}
      <AnimatePresence>
        {summary && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#333] text-sm leading-relaxed border-l-2 border-[#15B04F]/50 pl-3"
          >
            {summary}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-[#15B04F]">
            <ThumbsUp size={15} />
            <span className="text-sm font-semibold">玩家好评</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {pros.map((tag, i) => (
                <TagBubble key={tag.label} tag={tag} type="pro" index={i} maxCount={maxCount} />
              ))}
            </AnimatePresence>
            {pros.length === 0 && !loading && (
              <p className="text-xs text-[#999]">暂无数据</p>
            )}
          </div>
        </div>

        {/* Cons */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-red-500">
            <ThumbsDown size={15} />
            <span className="text-sm font-semibold">玩家批评</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {cons.map((tag, i) => (
                <TagBubble key={tag.label} tag={tag} type="con" index={i} maxCount={maxCount} />
              ))}
            </AnimatePresence>
            {cons.length === 0 && !loading && (
              <p className="text-xs text-[#999]">暂无数据</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-[#999] text-center">
        基于玩家评价的 AI 分析 · 数据来源: {gameName} 社区评价
      </p>
    </div>
  );
}

function cn(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}
