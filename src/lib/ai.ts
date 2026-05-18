import type { ReviewSummary, ReviewTag } from "@/types/game";
import { WORKER_URL } from "@/lib/constants";

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

// Rich, categorized mock reviews for demo/testing
const REVIEW_TEMPLATES: Record<string, string[]> = {
  graphics: [
    "画面表现力达到了次世代水准，光影追踪效果令人叹为观止，每个场景都像一幅精美的画作。",
    "贴图质量很高，材质细节丰富，特别是在4K分辨率下，角色皮肤纹理和环境细节都清晰可见。",
    "美术风格独树一帜，色彩运用大胆而和谐，视觉风格让人过目不忘。",
    "画面优化做得非常好，中端显卡也能流畅运行的同时保持不错的画质，这一点值得称赞。",
    "粒子效果和物理模拟非常出色，战斗中的爆炸、碎片效果极具冲击力。",
    "虽然画面整体不错，但部分场景的贴图加载有延迟，影响了沉浸感。",
    "HDR效果调校得当，明暗对比自然，在OLED屏幕上玩简直是视觉盛宴。",
    "视距和远景细节处理一般，远处景物有些模糊，但这可能是为了性能做的妥协。",
    "UI界面设计精美，与游戏整体风格高度统一，交互反馈也很流畅。",
    "角色动画自然流畅，面部表情捕捉非常到位，过场动画如同看电影一般。",
    "环境光遮蔽和全局光照效果出色，不同时间段的氛围差异很大。",
    "水体效果和反射令人惊叹，下雨天的场景尤其真实，路面倒影做得非常细致。",
  ],
  gameplay: [
    "战斗系统深度十足，多种武器和技能组合带来了极高的可玩性，每次战斗都有新鲜感。",
    "操作手感极佳，按键响应迅速，打击感扎实，连招系统流畅自然。",
    "开放世界设计令人惊叹，地图上充满了有趣的探索内容和隐藏惊喜，完全不会感到空洞。",
    "关卡设计精妙，每个地图区域都有独特的地形特点和战斗策略，重复游玩价值高。",
    "角色成长系统丰富多样，不同的加点方向和技能搭配创造了极高的重玩价值。",
    "AI智能程度很高，敌人会根据玩家的战斗风格调整策略，不会显得愚蠢。",
    "解谜元素设计巧妙，难度循序渐进，既不会太简单也不会让人卡关太久。",
    "载具驾驶手感需要适应，物理引擎偏真实向，需要一定时间练习才能掌握。",
    "游戏的RPG元素丰富，对话选项和分支剧情让玩家真正感受到自己的选择有意义。",
    "收集要素过多，有些重复枯燥，给人一种是为了拉长游戏时间而设计的感觉。",
    "多人模式内容丰富，匹配机制公平，和朋友组队的体验非常愉快。",
    "游戏引导做得不够好，有些系统没有详细说明，新手可能需要花时间摸索。",
  ],
  story: [
    "剧情引人入胜，叙事节奏把控得当，让人有强烈的一口气通关的冲动。",
    "角色塑造非常成功，每个主要角色都有自己的背景故事和性格特点，令人印象深刻。",
    "剧本质量高，对白自然有力，情感渲染到位，有些场景真的让人热泪盈眶。",
    "世界观构建宏大而细腻，背景故事丰富，各种文本和录音让世界更加立体。",
    "支线任务质量奇高，很多支线的剧情深度和设计水准甚至不输主线任务。",
    "故事中期节奏有些拖沓，部分章节略显冗长，影响了整体的叙事节奏。",
    "结局处理得当，无论是情感上还是逻辑上都让人满意，没有虎头蛇尾。",
    "叙事手法创新，通过多种媒介（对话、信件、环境叙事）讲述故事，增强了代入感。",
    "多结局设计合理，不同选择带来的后果真实且有分量，让人愿意多周目体验。",
    "主线的某些情节转折略显生硬，角色动机不够充分，有些为剧情服务的设计感。",
  ],
  audio: [
    "背景音乐水准极高，旋律优美且与场景氛围完美契合，战斗音乐让人热血沸腾。",
    "音效设计精细，从脚步声到环境音都非常真实，使用好的耳机能获得极佳体验。",
    "配音阵容强大，每位角色的声音都富有特色，情感表达到位，中文配音也很自然。",
    "音乐切换流畅，从探索到战斗的过渡自然，不会给人突兀的感觉。",
    "环境音效丰富，森林、城市、洞穴等不同场景的音效差异明显，沉浸感强。",
    "部分音效重复度较高，长时间游玩后会感觉有些单调。",
    "3D音效定位准确，在竞技场景中能清晰判断敌人的方位，对 gameplay 有实际帮助。",
    "游戏支持自定义音效设置，各项音量独立调节，考虑到了不同玩家的需求。",
  ],
  performance: [
    "整体优化出色，主流配置下能稳定60帧运行，帧生成时间也很平稳，没有卡顿感。",
    "加载速度很快，SSD优化到位，快速旅行和场景切换基本不需要等待。",
    "PC版的图形设置选项丰富，从低到高的画质档位区分明显，缩放比例灵活。",
    "主机版性能模式和质量模式差异明显，玩家可以根据偏好自由选择。",
    "在某些密集场景下会出现掉帧，特别是大型城市区域或多人战斗时比较明显。",
    "VRAM占用偏高，6GB以下的显卡在高画质下可能会遇到显存不足的问题。",
    "首发版本存在一些稳定性问题，偶尔会出现闪退，希望后续补丁能修复。",
    "键鼠适配做得很好，按键自定义程度高，快捷键设计合理。",
  ],
  value: [
    "内容丰富度极高，主线加上大量支线内容轻松超过60小时，性价比很高。",
    "定价合理，考虑到游戏的质量和内容量，这个价格物有所值。",
    "DLC资料片质量极高，新增内容相当于一个完整游戏，推荐购买。",
    "游戏内购元素控制得当，没有Pay-to-Win的问题，皮肤和装饰品不影响平衡。",
    "本体内容偏少，加上DLC后总价偏高，建议等完整版打折再入手。",
    "二手/折扣后入手非常划算，以半价体验这款作品完全值得。",
    "游戏提供了试玩版/Demo，可以让玩家先体验再决定是否购买，这一点很良心。",
    "季票内容发布周期太长，等到全部出完热度已经过去了。",
  ],
  innovation: [
    "核心机制有创新，打破了传统类型的框架，带来了全新的游戏体验。",
    "独特的设定和玩法让人眼前一亮，这种创新精神在3A游戏中很难得。",
    "虽然不是颠覆性的创新，但在现有框架内做到了极致，打磨得非常完善。",
    "游戏在某些方面的尝试很新颖，但执行上还有改进空间，潜力很大。",
    "融合了多种游戏类型的元素，这种跨界混搭产生了有趣的化学反应。",
    "相比前作有显著进步，特别是在某些核心系统上的改进非常到位。",
  ],
};

const CATEGORY_WEIGHTS: Record<string, number> = {
  graphics: 0.22,
  gameplay: 0.25,
  story: 0.2,
  audio: 0.13,
  performance: 0.1,
  value: 0.05,
  innovation: 0.05,
};

export function generateMockReviews(gameName: string): string[] {
  const reviews: string[] = [];
  const targetCount = 30 + Math.floor(Math.random() * 21); // 30-50 reviews

  // Distribute reviews across categories by weight
  Object.entries(CATEGORY_WEIGHTS).forEach(([category, weight]) => {
    const templates = REVIEW_TEMPLATES[category];
    if (!templates) return;
    const count = Math.max(1, Math.round(targetCount * weight));
    for (let i = 0; i < count; i++) {
      const template = templates[i % templates.length];
      // Add slight randomization to avoid exact duplicates
      const prefix = [
        "我个人觉得，", "说实话，", "客观来说，", "作为玩家，", "从体验来看，",
        "", "", "", "", "",
      ][Math.floor(Math.random() * 10)];
      reviews.push(prefix + template);
    }
  });

  // Add some game-specific contextual reviews
  const gameContexts: string[] = [
    `在${gameName}中，我花了超过100小时，依然觉得还有很多内容没探索完。`,
    `${gameName}是我今年玩过最好的游戏之一，强烈推荐给喜欢这个类型的朋友。`,
    `和朋友聊到${gameName}，大家的评价虽然有些分歧，但普遍认为它是款佳作。`,
    `之前在E3看到${gameName}的预告就很期待，实际体验后觉得没有辜负我的等待。`,
    `${gameName}对新手比较友好，教程循序渐进，不会让人觉得不知所措。`,
  ];
  reviews.push(...gameContexts);

  // Shuffle and return
  return reviews.sort(() => Math.random() - 0.5);
}

/** Generate detailed fallback analysis when AI endpoint is unavailable */
export function generateFallbackAnalysis(gameName: string): {
  pros: ReviewTag[];
  cons: ReviewTag[];
  summary: string;
} {
  // Check for known games
  const known: Record<string, { pros: ReviewTag[]; cons: ReviewTag[]; summary: string }> = {
    "赛博朋克 2077": {
      pros: [
        { label: "画面表现", percentage: 92, count: 38 },
        { label: "沉浸感", percentage: 86, count: 35 },
        { label: "剧情深度", percentage: 82, count: 33 },
        { label: "音乐音效", percentage: 78, count: 29 },
        { label: "角色塑造", percentage: 76, count: 28 },
        { label: "夜之城设计", percentage: 88, count: 30 },
      ],
      cons: [
        { label: "首发Bug", percentage: 62, count: 25 },
        { label: "驾驶手感", percentage: 45, count: 18 },
        { label: "警察系统", percentage: 38, count: 15 },
        { label: "技能平衡", percentage: 32, count: 12 },
      ],
      summary: "夜之城的沉浸感和画面表现无可匹敌，经过数次大型更新后已成为一款优秀作品。光追效果和城市设计是最大亮点，但部分系统仍有打磨空间。推荐购买《往日之影》DLC，体验进一步提升。",
    },
    "艾尔登法环": {
      pros: [
        { label: "探索自由度", percentage: 95, count: 42 },
        { label: "Boss设计", percentage: 92, count: 38 },
        { label: "艺术风格", percentage: 88, count: 36 },
        { label: "地图设计", percentage: 90, count: 37 },
        { label: "武器多样性", percentage: 82, count: 31 },
        { label: "重玩价值", percentage: 78, count: 28 },
      ],
      cons: [
        { label: "难度门槛", percentage: 58, count: 24 },
        { label: "优化问题", percentage: 42, count: 17 },
        { label: "任务指引弱", percentage: 36, count: 14 },
        { label: "PVP平衡", percentage: 28, count: 10 },
      ],
      summary: "开放世界与魂系战斗的完美融合，Boss战设计精妙绝伦。探索的自由度和地图的垂直设计令人叹为观止，是宫崎英高迄今为止最具野心的作品。虽然高难度对新人不友好，但战胜强敌后的成就感无与伦比。",
    },
    "黑神话：悟空": {
      pros: [
        { label: "画面表现", percentage: 94, count: 40 },
        { label: "Boss设计", percentage: 90, count: 37 },
        { label: "东方美学", percentage: 92, count: 38 },
        { label: "战斗手感", percentage: 85, count: 33 },
        { label: "场景设计", percentage: 88, count: 35 },
        { label: "文化传承", percentage: 86, count: 34 },
      ],
      cons: [
        { label: "地图设计", percentage: 48, count: 20 },
        { label: "叙事隐晦", percentage: 38, count: 15 },
        { label: "空气墙", percentage: 42, count: 17 },
        { label: "后期内容", percentage: 30, count: 12 },
      ],
      summary: "中国3A游戏的里程碑之作，UE5打造的东方美学奇观令人屏息。Boss战设计达到世界一流水平，战斗系统兼具深度与爽快感。虽然在关卡设计和叙事方面有小瑕疵，但整体品质足以媲美国际顶尖作品。",
    },
  };

  // Try to match known games
  for (const [key, data] of Object.entries(known)) {
    if (gameName.includes(key) || key.includes(gameName)) return data;
  }

  // Default fallback with richer data
  return {
    pros: [
      { label: "画面品质", percentage: 82, count: 22 },
      { label: "游戏性", percentage: 78, count: 20 },
      { label: "沉浸体验", percentage: 75, count: 18 },
      { label: "音乐音效", percentage: 72, count: 17 },
      { label: "内容丰富度", percentage: 68, count: 15 },
    ],
    cons: [
      { label: "优化问题", percentage: 42, count: 11 },
      { label: "价格偏高", percentage: 35, count: 9 },
      { label: "重复内容", percentage: 30, count: 8 },
      { label: "操作门槛", percentage: 22, count: 6 },
    ],
    summary: `《${gameName}》整体品质优秀，画面和玩法获得广泛认可。游戏在核心体验上表现出色，但在优化和定价方面存在一些争议。推荐对这类游戏感兴趣的玩家尝试。`,
  };
}
