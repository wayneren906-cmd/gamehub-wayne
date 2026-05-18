import Link from "next/link";
import type { ContentItem } from "@/types/content";

export function ContentCard({
  item,
  type,
}: {
  item: ContentItem;
  type: "news" | "guides" | "reviews";
}) {
  const labels = { news: "资讯", guides: "攻略", reviews: "测评" };
  const accentColors = {
    news: "text-[#15B04F]",
    guides: "text-[#3b82f6]",
    reviews: "text-[#ff9500]",
  };
  const tagBg = {
    news: "bg-[#e8f5ec] text-[#15B04F]",
    guides: "bg-blue-50 text-blue-500",
    reviews: "bg-[#fff8f0] text-[#ff9500]",
  };

  return (
    <Link href={`/${type}/${item.slug}`} className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40 rounded-2xl block">
      <article className="card p-5 hover:border-[#15B04F]/20 hover:shadow-sm transition-all h-full">
        <span className="text-[10px] font-medium uppercase tracking-wider text-[#999]">
          {item.date} · <span className={accentColors[type]}>{labels[type]}</span>
        </span>
        <h3 className="text-[#1a1a1a] font-semibold mt-2 mb-2 leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-[#999] text-xs leading-relaxed line-clamp-2">
          {item.summary}
        </p>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-[10px] rounded-full ${tagBg[type]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
