import { HardwareChecker } from "@/components/HardwareChecker";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="heading-high text-4xl mb-4">探索 3A 大作</h1>
      <p className="body-muted text-lg max-w-2xl mb-12">
        浏览顶级游戏，查看媒体评分、硬件需求分析与 AI 驱动的玩家评价摘要。
      </p>
      <HardwareChecker />
    </div>
  );
}
