import type { Game, GameRequirements } from "@/types/game";

export interface GameDetail extends Game {
  description_raw: string;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  requirements: GameRequirements;
  reviews: string[];
}

const DETAILS: Record<string, GameDetail> = {
  "cyberpunk-2077": {
    ...getBaseGame("cyberpunk-2077", "Cyberpunk 2077", "2020-12-10",
      "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
      4.2, 86,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "Cyberpunk 2077 是一款开放世界动作冒险角色扮演游戏，故事发生在夜之城——一个痴迷于力量、魅力和身体改造的大都市。玩家扮演雇佣兵 V，追寻一种独一无二的植入物——永生之匙。在追逐的过程中，玩家将深入探索这座城市的黑暗面，与各色人物建立关系，并做出影响故事走向的抉择。",
    developers: [{ id: 1, name: "CD Projekt Red" }],
    publishers: [{ id: 1, name: "CD Projekt" }],
    requirements: {
      minCpu: "Intel Core i5-3570K", minGpu: "NVIDIA GeForce GTX 780", minRamGB: 8, minVramGB: 3,
      recCpu: "Intel Core i7-4790", recGpu: "NVIDIA GeForce GTX 1060", recRamGB: 12, recVramGB: 6,
    },
    reviews: [
      "画面在高端配置下极为出色，尤其是光追效果，夜之城的光影氛围营造堪称一绝。",
      "剧情设计有深度，角色塑造令人印象深刻，多个结局值得反复游玩。",
      "首发时 Bug 较多，经过多次更新后体验大幅改善，现在已是完整佳作。",
      "开放世界内容丰富，支线任务质量很高，探索感十足。",
      "战斗系统灵活，黑客、近战、枪械多种流派可以自由组合。",
      "驾驶手感一般，载具种类虽然多但操控体验参差不齐。",
      "音乐和音效沉浸感极强，电台歌曲贴合世界观。",
      "主线剧情偏短，但 DLC《往日之影》补充了大量高质量内容。",
    ],
  },

  "elden-ring": {
    ...getBaseGame("elden-ring", "Elden Ring", "2022-02-25",
      "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc6a3b3b912d21.jpg",
      4.7, 96,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 11, name: "魂系", slug: "souls-like" }],
      ["PC", "PlayStation 5", "Xbox Series X", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "Elden Ring 是由 FromSoftware 开发、Bandai Namco 发行的动作角色扮演游戏。游戏由宫崎英高和《冰与火之歌》作者乔治·R·R·马丁联手打造。玩家将探索广袤的交界地，挑战半神，收集大卢恩，修复艾尔登法环，成为艾尔登之王。游戏以其无与伦比的开放世界设计、深度的战斗系统和宏大的世界观获得了全球玩家的盛赞。",
    developers: [{ id: 2, name: "FromSoftware" }],
    publishers: [{ id: 2, name: "Bandai Namco" }],
    requirements: {
      minCpu: "Intel Core i5-8400", minGpu: "NVIDIA GeForce GTX 1060", minRamGB: 12, minVramGB: 3,
      recCpu: "Intel Core i7-8700K", recGpu: "NVIDIA GeForce GTX 1070", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "开放世界设计的教科书级作品，处处充满探索的惊喜和危险。",
      "战斗系统极具深度，Boss 战设计精妙，每次胜利都充满成就感。",
      "画面艺术风格独特，交界地的风景壮丽且诡异，令人难以忘怀。",
      "难度较高，对新手不友好，缺乏明确的任务指引。",
      "音乐壮丽恢弘，每个区域的配乐都完美烘托了氛围。",
      "PC 版本初期存在优化问题，部分场景掉帧明显。",
      "故事碎片化叙事风格独特，需要自行拼凑世界观。",
      "游戏体量庞大，100 小时以上才能完全探索。",
    ],
  },

  "baldurs-gate-3": {
    ...getBaseGame("baldurs-gate-3", "Baldur's Gate 3", "2023-08-03",
      "https://media.rawg.io/media/games/d82/d82990b9c67cbcf4c5a3f5865c2e2a1b.jpg",
      4.8, 96,
      [{ id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 5, name: "策略", slug: "strategy" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "Baldur's Gate 3 是由 Larian Studios 开发的角色扮演游戏，基于龙与地下城第五版规则。游戏设定在被遗忘的国度，玩家将带领一支被夺心魔蝌蚪感染的冒险者队伍，寻找解除诅咒的方法。游戏以其无与伦比的自由度、深刻的角色塑造和丰富的剧情分支而闻名，被广泛认为是史上最佳 CRPG 之一。",
    developers: [{ id: 3, name: "Larian Studios" }],
    publishers: [{ id: 3, name: "Larian Studios" }],
    requirements: {
      minCpu: "Intel Core i5-4690", minGpu: "NVIDIA GeForce GTX 970", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-8700K", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "CRPG 的新标杆，自由度之高令人难以置信，每个选择都有意义。",
      "角色塑造极为出色，同伴任务线感人至深。",
      "战斗系统完美还原 D&D 规则，策略性和创造性兼具。",
      "第三章优化不佳，部分场景帧率明显下降。",
      "画面精美，过场动画质量堪比电影。",
      "对话树庞大复杂，展现了惊人的分支设计。",
      "上手难度较高，D&D 新手需要时间适应规则。",
    ],
  },

  "black-myth-wukong": {
    ...getBaseGame("black-myth-wukong", "黑神话: 悟空", "2024-08-20",
      "https://media.rawg.io/media/games/b21/b21c4e4e4e4e4e4e4e4e4e4e4e4e4e4e.jpg",
      4.5, 90,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 12, name: "神话", slug: "mythology" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "黑神话: 悟空 是由游戏科学开发的国产动作角色扮演游戏，以中国古典名著《西游记》为背景。玩家将扮演一位天命人，踏上寻找大圣遗留之物的旅程，迎战各路妖王。游戏以出色的画面表现、流畅的战斗系统和深厚的中国文化底蕴，成为中国游戏史上的里程碑之作。",
    developers: [{ id: 4, name: "游戏科学" }],
    publishers: [{ id: 4, name: "游戏科学" }],
    requirements: {
      minCpu: "Intel Core i5-8400", minGpu: "NVIDIA GeForce GTX 1060", minRamGB: 16, minVramGB: 6,
      recCpu: "Intel Core i7-9700", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "国产游戏的里程碑，画面表现力达到世界一流水平。",
      "战斗系统流畅爽快，BOSS 设计各具特色，打击感极佳。",
      "中式美学贯穿始终，场景设计充满东方韵味。",
      "地图设计较为线性，缺少探索自由度。",
      "优化表现出色，即使在中等配置下也能流畅运行。",
      "UE5 引擎打造的画面令人叹为观止，光影效果惊艳。",
      "剧情叙事较为隐晦，需要了解《西游记》背景才能完全理解。",
      "音乐融合了中国传统乐器，配乐与场景完美契合。",
    ],
  },
};

function getBaseGame(
  slug: string, name: string, released: string, background_image: string,
  rating: number, metacritic: number,
  genres: { id: number; name: string; slug: string }[],
  platformNames: string[]
): Game {
  return {
    id: Math.abs(slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0)),
    slug, name, released, background_image, rating, metacritic,
    genres,
    platforms: platformNames.map((name, i) => ({
      platform: { id: i + 1, name, slug: name.toLowerCase().replace(/\s/g, "-") },
      requirements: {},
    })),
    esrb_rating: { name: "Mature" },
    description_raw: "",
    developers: [],
    publishers: [],
    tags: [],
  };
}

export function getGameDetail(slug: string): GameDetail | undefined {
  return DETAILS[slug];
}

// Game requirements for the WASM checker
export function getGameRequirements(slug: string): GameRequirements | undefined {
  return DETAILS[slug]?.requirements;
}
