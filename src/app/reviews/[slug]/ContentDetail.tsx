"use client";

import { useParams } from "next/navigation";
import { getContent } from "@/lib/content";
import { ContentRenderer } from "@/components/ContentRenderer";

export default function ContentDetail() {
  const { slug } = useParams() as { slug: string };
  const item = getContent(slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#999]">内容未找到</p>
      </div>
    );
  }

  return <ContentRenderer item={item} />;
}
