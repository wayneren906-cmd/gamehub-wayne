import { Env } from "./types";
import { getCached, setCache } from "./kv";

const AI_CACHE_TTL = 86400; // 24 hours for AI results

interface ReviewTag {
  label: string;
  percentage: number;
  count: number;
}

interface ReviewAnalysis {
  pros: ReviewTag[];
  cons: ReviewTag[];
  summary: string;
}

const SYSTEM_PROMPT = `你是一个游戏评价分析师。根据给定的玩家评价列表，分析并提取：

1. "pros"（好评点）列表，包含标签、预估提及百分比和数量
2. "cons"（差评点）列表，包含标签、预估提及百分比和数量
3. "summary"：一句中文总结，概括整体玩家情绪

只返回 JSON，不要其他内容：
{
  "pros": [{ "label": "画面表现", "percentage": 85, "count": 7 }],
  "cons": [{ "label": "价格偏高", "percentage": 40, "count": 3 }],
  "summary": "综合评价优秀，画面和沉浸感获认可。"
}

规则：
- label 用中文，2-6 字
- percentage 0-100
- count 是预估提及该点的评价数
- 3-6 个 pros 和 cons
- summary 控制在 50 字以内`;

/**
 * Analyze game reviews using DeepSeek API.
 * Uses cache-aside: checks KV first, falls back to API, caches result.
 */
export async function analyzeReviews(
  env: Env,
  gameName: string,
  reviews: string[]
): Promise<ReviewAnalysis> {
  const cacheKey = `ai:review:${gameName}`;

  // Check KV cache
  const cached = await getCached<ReviewAnalysis>(env, cacheKey);
  if (cached) return cached;

  const apiKey = env.AI_API_KEY;
  if (!apiKey) {
    return fallbackAnalysis(reviews);
  }

  const reviewText = reviews
    .map((r, i) => `${i + 1}. ${r}`)
    .join("\n");

  const userMessage = `游戏: ${gameName}\n\n玩家评价:\n${reviewText}\n\n分析以上评价并返回JSON。`;

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
        max_tokens: 1024,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      console.error(`DeepSeek API error: ${response.status}`);
      return fallbackAnalysis(reviews);
    }

    const data = await response.json() as {
      choices: { message: { content: string } }[];
    };

    const text = data.choices?.[0]?.message?.content || "";

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return fallbackAnalysis(reviews);

    const analysis: ReviewAnalysis = JSON.parse(jsonMatch[0]);

    if (!analysis.pros || !analysis.cons) {
      return fallbackAnalysis(reviews);
    }

    // Cache the result
    await setCache(env, cacheKey, analysis, AI_CACHE_TTL);

    return analysis;
  } catch (e) {
    console.error(`AI analysis error: ${e}`);
    return fallbackAnalysis(reviews);
  }
}

/** Keyword-based fallback when AI API is unavailable */
function fallbackAnalysis(reviews: string[]): ReviewAnalysis {
  const text = reviews.join(" ");
  const pros: ReviewTag[] = [];
  const cons: ReviewTag[] = [];

  const proKeywords: [string, string][] = [
    ["画面", "graphics"], ["剧情", "story"], ["玩法", "gameplay"],
    ["音乐", "music"], ["优化", "performance"], ["沉浸感", "immersion"],
  ];
  const conKeywords: [string, string][] = [
    ["优化差", "bug"], ["价格高", "expensive"], ["内容少", "short"],
    ["重复度高", "repetitive"], ["服务器差", "server"], ["DLC太多", "dlc"],
  ];

  for (const [label, kw] of proKeywords) {
    const count = reviews.filter((r) => r.toLowerCase().includes(kw)).length;
    if (count > 0) {
      pros.push({ label, percentage: Math.round((count / reviews.length) * 100), count });
    }
  }
  for (const [label, kw] of conKeywords) {
    const count = reviews.filter((r) => r.toLowerCase().includes(kw)).length;
    if (count > 0) {
      cons.push({ label, percentage: Math.round((count / reviews.length) * 100), count });
    }
  }

  if (pros.length === 0) {
    pros.push({ label: "体验良好", percentage: 70, count: Math.round(reviews.length * 0.7) });
  }
  if (cons.length === 0) {
    cons.push({ label: "因人而异", percentage: 30, count: Math.round(reviews.length * 0.3) });
  }

  return {
    pros,
    cons,
    summary: reviews.length > 0
      ? "综合来看，玩家对该游戏的评价呈现多元化。"
      : "暂无足够评价数据进行分析。",
  };
}
