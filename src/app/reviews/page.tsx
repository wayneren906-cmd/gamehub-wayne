import { getReviews } from "@/lib/content";
import { ContentCard } from "@/components/ContentCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  const items = getReviews();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16">
      <Breadcrumb items={[{ label: "测评" }]} />
      <div className="mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] flex items-center gap-3 mb-2">
          <Star size={32} className="text-[#ff9500] fill-[#ff9500]" />
          游戏测评
        </h1>
        <p className="text-[#999]">深度游戏体验评测与分析</p>
      </div>

      {items.length === 0 ? (
        <div className="card p-12 text-center mt-8">
          <p className="text-[#666]">暂无测评</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {items.map((item) => (
            <ContentCard key={item.slug} item={item} type="reviews" />
          ))}
        </div>
      )}
    </div>
  );
}
