"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  summary: string;
}

interface NewsTimelineProps {
  news: NewsItem[];
}

export function NewsTimeline({ news }: NewsTimelineProps) {
  if (!news.length) return null;

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2 mb-5">
        <Newspaper size={18} />
        最新动态
      </h2>

      <div className="relative pl-6 space-y-5">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#e8e8e8]" />

        {news.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-[23px] top-1.5 w-[13px] h-[13px] rounded-full border-2 border-[#15B04F] bg-white" />

            <time className="text-xs text-[#999] mb-1 block">{item.date}</time>
            <h4 className="text-[#1a1a1a] text-sm font-semibold mb-1">{item.title}</h4>
            <p className="text-[#666] text-xs leading-relaxed">{item.summary}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
