"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { ContentItem } from "@/types/content";

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-[#1a1a1a]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderTable(lines: string[], startIdx: number) {
  const rows: { cells: string[] }[] = [];
  let i = startIdx;

  // skip header separator line (|---|---|...)
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      rows.push({ cells });
      i++;
    } else {
      break;
    }
  }

  const hasHeader =
    rows.length >= 2 &&
    rows[1].cells.every((c) => /^[-:]+$/.test(c));

  const bodyRows = hasHeader ? rows.slice(2) : rows;
  const headerRow = hasHeader ? rows[0] : null;

  const renderedRows: React.ReactNode[] = [];
  let idx = 0;

  if (headerRow) {
    renderedRows.push(
      <tr key="header">
        {headerRow.cells.map((cell, ci) => (
          <th
            key={ci}
            className="border border-gray-300 px-3 py-2 text-left text-sm font-bold text-[#1a1a1a] bg-[#f7f7f7]"
          >
            {renderInline(cell)}
          </th>
        ))}
      </tr>
    );
  }

  renderedRows.push(
    ...bodyRows.map((row, ri) => (
      <tr key={`body-${ri}`}>
        {row.cells.map((cell, ci) => (
          <td
            key={ci}
            className="border border-gray-300 px-3 py-2 text-sm text-[#333]"
          >
            {renderInline(cell)}
          </td>
        ))}
      </tr>
    ))
  );

  return { elements: [<table key={startIdx} className="w-full my-4 border-collapse border border-gray-300">{renderedRows}</table>], consumed: i - startIdx };
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // horizontal rule / heading-like bold lines (e.g., "**核心角色培养优先级**")
    if (/^\*\*.+\*\*$/.test(line.trim())) {
      elements.push(
        <p key={i} className="text-[#1a1a1a] font-bold text-sm mt-6 mb-2">
          {renderInline(line.trim())}
        </p>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-[#1a1a1a] mt-8 mb-4">
          {renderInline(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-[#333] mt-6 mb-3">
          {renderInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={i} className="text-base font-semibold text-[#444] mt-5 mb-2">
          {renderInline(line.slice(5))}
        </h4>
      );
    } else if (line.startsWith("|") && line.endsWith("|")) {
      const { elements: tableEls, consumed } = renderTable(lines, i);
      elements.push(...tableEls);
      i += consumed - 1;
    } else if (line.match(/^\d+\.\s/)) {
      // numbered list item
      const content = line.replace(/^\d+\.\s*/, "");
      elements.push(
        <li key={i} className="ml-6 mb-1 text-[#333] text-sm list-decimal">
          {renderInline(content)}
        </li>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*[：:]?\s*(.*)/);
      if (match) {
        elements.push(
          <li key={i} className="ml-4 mb-2 text-[#333] text-sm list-disc">
            <strong className="text-[#1a1a1a]">{match[1]}</strong>
            {match[2] && (
              <>
                ：<span className="text-[#666]">{renderInline(match[2])}</span>
              </>
            )}
          </li>
        );
      } else {
        elements.push(
          <li key={i} className="ml-4 mb-1 text-[#333] text-sm list-disc">
            {renderInline(line.slice(2))}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-4 mb-1 text-[#333] text-sm list-disc">
          {renderInline(line.slice(2))}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<br key={i} />);
    } else {
      elements.push(
        <p key={i} className="text-[#333] text-sm leading-relaxed mb-2">
          {renderInline(line)}
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
