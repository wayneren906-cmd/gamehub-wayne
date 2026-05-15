import type { ReviewSummary } from "@/types/game";

const WORKER_URL =
  process.env.NEXT_PUBLIC_WORKER_URL || "https://gamehub-worker.example.workers.dev";

interface AIReviewResponse extends ReviewSummary {
  summary: string;
}

export async function analyzeGameReviews(
  gameName: string,
  reviews: string[]
): Promise<AIReviewResponse> {
  const response = await fetch(`${WORKER_URL}/api/ai/review`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ gameName, reviews }),
  });

  if (!response.ok) {
    throw new Error(`AI analysis failed: ${response.status}`);
  }

  return response.json();
}

// Mock reviews for demo/testing when real reviews aren't available
export function generateMockReviews(gameName: string): string[] {
  const templates = [
    `画面表现非常出色，光影效果令人惊艳。游戏优化也很好，${gameName}在我的中端配置上能稳定运行。`,
    `剧情设计巧妙，角色塑造令人印象深刻。可惜游戏时长偏短，大概30小时就通关了。`,
    `战斗系统流畅度很高，打击感十足。但重复任务较多，后期容易感到疲惫。`,
    `音乐和音效设计非常棒，极大地增强了沉浸感。价格方面有些偏高，建议等打折。`,
    `多人模式非常有趣，和朋友一起玩体验很好。不过服务器偶尔会掉线，需要改进。`,
    `作为系列老玩家，这款续作没有让我失望。画面提升明显，但部分核心玩法变化较大，需要时间适应。`,
    `优化表现参差不齐，高端显卡下体验极佳，但在旧设备上帧率不稳。画面调校选项丰富。`,
    `游戏世界构建得非常细腻，探索起来充满乐趣。支线任务质量很高，不输主线。`,
    `手柄适配做得很好，操作手感上乘。但键盘鼠标的默认按键设置不太合理。`,
    `整体来说是一款佳作，虽然有些小瑕疵，但不影响游戏的核心体验。推荐给喜欢这个类型的玩家。`,
  ];

  // Pick 5-8 random reviews
  const count = 5 + Math.floor(Math.random() * 4);
  const shuffled = [...templates].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
