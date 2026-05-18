"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { ContentItem } from "@/types/content";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-[#1a1a1a] mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-[#333] mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*[：:]?\s*(.*)/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 mb-2 text-[#333] text-sm list-disc">
            <strong className="text-[#1a1a1a]">{match[1]}</strong>
            {match[2] && (
              <>
                ：<span className="text-[#666]">{match[2]}</span>
              </>
            )}
          </li>
        );
      } else {
        elements.push(
          <p key={i} className="text-[#333] text-sm leading-relaxed mb-2 ml-4">
            {line.slice(2)}
          </p>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 mb-1 text-[#333] text-sm list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-[#1a1a1a] font-bold text-sm mt-4">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "") {
      elements.push(<br key={i} />);
    } else {
      elements.push(
        <p key={i} className="text-[#333] text-sm leading-relaxed mb-2">
          {line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1a1a1a]">$1</strong>')}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export function ContentRenderer({ item }: { item: ContentItem }) {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 md:px-6 pt-24 pb-16">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft size={16} className="mr-2" />
        返回
      </Button>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4">
          {item.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-[#999]">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {item.date}
          </span>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f0f0f0]"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        <div className="card p-6 md:p-8 space-y-1">
          {item.body.map((block, i) => (
            <div key={i}>{renderMarkdown(block)}</div>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
