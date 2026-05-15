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

const SYSTEM_PROMPT = `You are a game review analyst. Given a list of player reviews for a video game, analyze them and extract:

1. A list of "pros" (positive aspects mentioned across reviews) with estimated percentage of reviewers mentioning each
2. A list of "cons" (negative aspects mentioned) with estimated percentages
3. A one-sentence summary in Chinese capturing the overall sentiment

Return ONLY valid JSON in this exact format, no other text:
{
  "pros": [{ "label": "string", "percentage": number, "count": number }],
  "cons": [{ "label": "string", "percentage": number, "count": number }],
  "summary": "string"
}

Rules:
- Labels should be in Chinese, short (2-6 characters)
- Percentages are 0-100, roughly how many reviews mention this point
- Count is the estimated number of reviews mentioning it
- Include 3-6 pros and 3-6 cons
- Summary should be a natural Chinese sentence under 50 characters`;

export async function analyzeReviews(
  env: Env,
  gameName: string,
  reviews: string[]
): Promise<ReviewAnalysis> {
  const cacheKey = `ai:review:${gameName}`;

  // Check KV cache
  const cached = await getCached<ReviewAnalysis>(env, cacheKey);
  if (cached) return cached;

  // Build user message with reviews
  const reviewText = reviews
    .map((r, i) => `${i + 1}. ${r}`)
    .join("\n");

  const userMessage = `Game: ${gameName}\n\nPlayer reviews:\n${reviewText}\n\nAnalyze these reviews and return the JSON.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.AI_API_KEY || env.RAWG_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      console.error(`AI API error: ${response.status}`);
      return fallbackAnalysis(reviews);
    }

    const data = await response.json() as { content: { text: string }[] };
    const text = data.content?.[0]?.text || "";

    // Extract JSON from response (Claude may wrap in markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return fallbackAnalysis(reviews);

    const analysis: ReviewAnalysis = JSON.parse(jsonMatch[0]);

    // Validate
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

function fallbackAnalysis(reviews: ReviewAnalysis["pros"]): ReviewAnalysis {
  // Keyword-based fallback when AI is unavailable
  const text = reviews.join(" ").toLowerCase();
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

  // Ensure at least some results
  if (pros.length === 0) {
    pros.push({ label: "体验良好", percentage: 70, count: Math.round(reviews.length * 0.7) });
  }
  if (cons.length === 0) {
    cons.push({ label: "因人而异", percentage: 30, count: Math.round(reviews.length * 0.3) });
  }

  return {
    pros,
    cons,
    summary: text.length > 0 ? "综合来看，玩家对该游戏的评价呈现多元化。" : "暂无足够评价数据进行分析。",
  };
}
