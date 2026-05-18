import Link from "next/link";
import { ArrowRight, Newspaper, Compass, Star } from "lucide-react";
import type { ContentItem } from "@/types/content";

const icons = {
  news: Newspaper,
  guides: Compass,
  reviews: Star,
} as const;

const colors = {
  news: "text-[#15B04F]",
  guides: "text-[#3b82f6]",
  reviews: "text-[#ff9500]",
} as const;

export function ContentSection({
  title,
  subtitle,
  type,
  items,
  seeAll,
}: {
  title: string;
  subtitle: string;
  type: "news" | "guides" | "reviews";
  items: ContentItem[];
  seeAll: string;
}) {
  if (items.length === 0) return null;
  const Icon = icons[type];

  return (
    <div>
      <div className="section-header mb-3">
        <div>
          <div className="flex items-center gap-1.5">
            <Icon size={16} className={colors[type]} />
            <h2 className="section-title">{title}</h2>
          </div>
          <p className="text-[12px] text-[#999] mt-0.5">{subtitle}</p>
        </div>
        <Link href={seeAll} className="section-more">
          查看全部 <ArrowRight size={13} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.slug} href={`/${type}/${item.slug}`} className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40 rounded-2xl">
            <article className="card p-4 hover:border-[#15B04F]/20 hover:shadow-sm transition-all h-full">
              <span className="text-[11px] text-[#999]">{item.date}</span>
              <h3 className="text-[14px] font-semibold text-[#1a1a1a] mt-1.5 mb-1.5 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#999] line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
