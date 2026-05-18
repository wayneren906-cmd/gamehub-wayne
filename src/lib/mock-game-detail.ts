import type { Game, GameRequirements, GameDetail } from "@/types/game";

export const MOCK_GAME_DETAILS: Record<string, GameDetail> = {
  "cyberpunk-2077": {
    ...getBaseGame("cyberpunk-2077", "赛博朋克 2077", "2020-12-10",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
      4.2, 86,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "赛博朋克 2077 是一款开放世界动作冒险角色扮演游戏，故事发生在夜之城——一个痴迷于力量、魅力和身体改造的大都市。玩家扮演雇佣兵 V，追寻一种独一无二的植入物——永生之匙。在追逐的过程中，玩家将深入探索这座城市的黑暗面，与各色人物建立关系，并做出影响故事走向的抉择。",
    gameplay: "第一人称视角开放世界 RPG，融合枪战、黑客入侵与近战三种战斗流派。玩家可通过义体改造自定义角色能力，从潜行黑客到狂暴战士自由切换。对话选择影响剧情分支，多条故事线交织成复杂叙事网络。载具驾驶、公寓装修等生活元素丰富城市场景的沉浸感。",
    recommendation: "如果你喜欢深度叙事、赛博朋克美学和高自由度的角色构筑，这款游戏不容错过。经过 2.0 更新和《往日之影》DLC 后，它已进化为当今最出色的开放世界 RPG 之一。夜之城的每一处街角都藏着故事，值得投入 100+ 小时细细品味。",
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
    screenshots: steamScreenshots(1091500,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg"
    ),
    news: [
      { date: "2024-12-10", title: "2.2 版本更新上线", summary: "新增车辆自定义、照片模式增强，多项游戏体验优化。" },
      { date: "2024-09-26", title: "《往日之影》获 TGA 最佳叙事提名", summary: "DLC 凭借出色的剧情和角色塑造获得行业认可。" },
      { date: "2024-06-15", title: "夜之城传奇挑战赛开启", summary: "官方社区活动，完成指定任务赢取限定奖励。" },
    ],
  },

  "elden-ring": {
    ...getBaseGame("elden-ring", "艾尔登法环", "2022-02-25",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
      4.7, 96,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 11, name: "魂系", slug: "souls-like" }],
      ["PC", "PlayStation 5", "Xbox Series X", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "艾尔登法环 是由 FromSoftware 开发、Bandai Namco 发行的动作角色扮演游戏。游戏由宫崎英高和《冰与火之歌》作者乔治·R·R·马丁联手打造。玩家将探索广袤的交界地，挑战半神，收集大卢恩，修复艾尔登法环，成为艾尔登之王。游戏以其无与伦比的开放世界设计、深度的战斗系统和宏大的世界观获得了全球玩家的盛赞。",
    gameplay: "第三人称动作 RPG，魂系战斗为核心——精准闪避、格挡与反击是生存关键。开放世界无缝衔接六大区域，地牢、城堡与隐藏 Boss 散落各处。自由构筑流派，近战、魔法、信仰、龙飨等数十种武器与战技可任意组合。灵马托雷特赋予骑乘战斗能力，大幅提升探索自由度。",
    recommendation: "FromSoftware 迄今最具野心的作品，将魂系的紧张战斗与开放世界的探索乐趣完美融合。即使你从未接触过魂系游戏，交界地的壮美与神秘也足以让你流连忘返。每一次发现隐藏地牢、击败强大 Boss 的成就感无可替代。2022 年 TGA 年度游戏，名副其实。",
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
    screenshots: steamScreenshots(1245620,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg"
    ),
    news: [
      { date: "2024-06-21", title: "《黄金树幽影》DLC 正式发售", summary: "史上最大规模 DLC，新增广袤地图、数十个新 Boss 和武器。" },
      { date: "2024-02-25", title: "销量突破 2500 万", summary: "FromSoftware 宣布 Elden Ring 全球销量已达 2500 万份。" },
      { date: "2023-12-07", title: "获得 TGA 年度游戏", summary: "凭借无与伦比的开放世界设计获颁 The Game Awards 年度游戏大奖。" },
    ],
  },

  "god-of-war-ragnarok": {
    ...getBaseGame("god-of-war-ragnarok", "战神: 诸神黄昏", "2022-11-09",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/library_600x900.jpg",
      4.6, 94,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }],
      ["PC", "PlayStation 5", "PlayStation 4"]
    ),
    description_raw: "战神: 诸神黄昏 是 Santa Monica Studio 开发的史诗动作冒险游戏，延续奎托斯与阿特柔斯在北欧神话世界的旅程。诸神黄昏即将降临，父子二人必须面对奥丁的威胁，同时处理彼此之间日益紧张的关系。游戏以其震撼的视觉效果、深情的叙事和一流的战斗系统，成为 PS5 世代最具代表性的作品之一。",
    gameplay: "越肩第三人称动作冒险，利维坦之斧与混沌之刃双武器即时切换，打出华丽连招。阿特柔斯作为 AI 同伴提供弓箭支援与符文召唤。半开放世界设计，九界各具特色，解密元素与战斗交织。装备系统支持符文、握柄与护甲套装搭配，流派构筑深度丰富。",
    recommendation: "如果你追求电影级叙事与爽快战斗的完美结合，Ragnarök 是必玩之作。奎托斯的角色弧光从希腊战神到北欧慈父的转变令人动容，九界的视觉奇观无与伦比。PC 版支持超宽屏和 DLSS，体验更佳。",
    developers: [{ id: 5, name: "Santa Monica Studio" }],
    publishers: [{ id: 5, name: "PlayStation PC" }],
    requirements: {
      minCpu: "Intel Core i5-4670K", minGpu: "NVIDIA GeForce GTX 1060", minRamGB: 8, minVramGB: 6,
      recCpu: "Intel Core i5-8600", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "剧情演出达到电影级水准，角色情感描绘令人动容。",
      "战斗系统在前作基础上大幅进化，武器切换流畅爽快。",
      "九界的场景设计各具特色，视觉震撼力无与伦比。",
      "部分解密过于频繁，打断了战斗节奏。",
      "PC 移植质量优秀，支持超宽屏和 DLSS。",
      "支线任务质量极高，每个都有完整的故事线。",
    ],
    screenshots: steamScreenshots(2322010,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/library_600x900.jpg"
    ),
    news: [
      { date: "2024-09-19", title: "PC 版正式发售", summary: "Santa Monica Studio 为 PC 玩家带来终极体验，支持 DLSS 3.5 和超宽屏。" },
      { date: "2024-01-23", title: "免费 DLC《英灵神殿》发布", summary: "新增 Roguelite 模式，奎托斯在英灵殿中迎接无尽挑战。" },
      { date: "2023-12-07", title: "获 TGA 多项大奖", summary: "Ragnarök 斩获最佳叙事、最佳音效等多项大奖。" },
    ],
  },

  "baldurs-gate-3": {
    ...getBaseGame("baldurs-gate-3", "博德之门 3", "2023-08-03",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_600x900.jpg",
      4.8, 96,
      [{ id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 5, name: "策略", slug: "strategy" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "博德之门 3 是由 Larian Studios 开发的角色扮演游戏，基于龙与地下城第五版规则。游戏设定在被遗忘的国度，玩家将带领一支被夺心魔蝌蚪感染的冒险者队伍，寻找解除诅咒的方法。游戏以其无与伦比的自由度、深刻的角色塑造和丰富的剧情分支而闻名，被广泛认为是史上最佳 CRPG 之一。",
    gameplay: "回合制战术战斗基于 D&D 5E 规则，高度依赖地形、环境互动与团队配合。探索采用自由视角，可攀爬、飞行、潜行、推撞，几乎每种想法都能付诸实践。掷骰子系统贯穿对话与行为判定，带来桌游般的不确定性。支持最多 4 人联机合作，每人可控制自己的角色。",
    recommendation: "史上评分最高的 CRPG 之一，自由度近乎疯狂——你可以与任何 NPC 对话、交易、战斗甚至偷窃。角色塑造登峰造极，同伴故事线感人至深。如果你热爱深度角色扮演和策略战斗，这将是你玩过的最好的游戏。",
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
    screenshots: steamScreenshots(1086940,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_600x900.jpg"
    ),
    news: [
      { date: "2024-11-15", title: "官方 Mod 工具上线", summary: "Larian 发布官方 Mod 制作工具，创意工坊内容已超 3000 件。" },
      { date: "2024-03-21", title: "销量突破 1500 万", summary: "BG3 成为 Larian 历史上最畅销的游戏，并获多项年度游戏大奖。" },
      { date: "2023-12-07", title: "斩获 TGA 年度游戏", summary: "Baldur's Gate 3 在 TGA 2023 中横扫包括年度游戏在内的六项大奖。" },
    ],
  },

  "red-dead-redemption-2": {
    ...getBaseGame("red-dead-redemption-2", "荒野大镖客: 救赎 2", "2018-10-26",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
      4.5, 97,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "荒野大镖客: 救赎 2 是 Rockstar Games 出品的西部题材开放世界动作冒险游戏。故事设定在 1899 年的美国西部，玩家扮演范德林帮的成员亚瑟·摩根，在法治逐渐侵蚀荒野的时代挣扎求生。游戏以惊人的细节刻画了一个充满生命力的世界，从茂密森林到广袤平原，从繁华城镇到荒凉营地，被誉为开放世界游戏的最高杰作。",
    gameplay: "第三人称开放世界，涵盖枪战、狩猎、钓鱼、赌博、马匹驯养等丰富活动。死神之眼系统允许在战斗中精准锁定多个目标。荣誉系统根据玩家的道德选择改变 NPC 对你的态度和剧情走向。营地管理、武器保养、马匹羁绊等细节系统营造极强的沉浸感。",
    recommendation: "Rockstar 投入 8 年打造的传世之作，史上细节最丰富的开放世界。亚瑟·摩根的故事堪称游戏叙事的巅峰——关于忠诚、救赎与时代的终结。即便只为了骑马穿越星空下的荒野，也值回票价。Metacritic 97 分，必玩中的必玩。",
    developers: [{ id: 6, name: "Rockstar Games" }],
    publishers: [{ id: 6, name: "Rockstar Games" }],
    requirements: {
      minCpu: "Intel Core i5-2500K", minGpu: "NVIDIA GeForce GTX 770", minRamGB: 8, minVramGB: 2,
      recCpu: "Intel Core i7-4770K", recGpu: "NVIDIA GeForce GTX 1060", recRamGB: 12, recVramGB: 6,
    },
    reviews: [
      "开放世界细节的巅峰之作，每个 NPC 都有独立的生活作息。",
      "亚瑟·摩根的人物塑造无懈可击，结局令人心碎。",
      "画面表现力惊人，光影和天气系统营造的氛围无与伦比。",
      "狩猎和钓鱼系统做得比许多专门的游戏还要好。",
      "主线节奏偏慢，前期需要耐心投入。",
      "PC 版首发时有优化问题，现已修复。",
      "Red Dead Online 模式内容丰富，可玩性极高。",
    ],
    screenshots: steamScreenshots(1174180,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg"
    ),
    news: [
      { date: "2024-10-29", title: "Red Dead Redemption 初代登陆 PC", summary: "Rockstar 将初代 RDR 及其丧尸 DLC 移植至 PC 平台。" },
      { date: "2024-05-15", title: "Red Dead Online 新职业上线", summary: "新增猎人追踪者职业，开放全新传奇动物和专属装备。" },
      { date: "2023-12-01", title: "社区活动：西部传奇月", summary: "双倍经验、限定奖励，重温亚瑟·摩根的不朽旅程。" },
    ],
  },

  "the-witcher-3": {
    ...getBaseGame("the-witcher-3", "巫师 3: 狂猎", "2015-05-19",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg",
      4.6, 93,
      [{ id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 3, name: "冒险", slug: "adventure" }],
      ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Nintendo Switch"]
    ),
    description_raw: "巫师 3: 狂猎 是 CD Projekt Red 开发的开放世界角色扮演游戏，改编自波兰作家安杰伊·萨普科夫斯基的小说。玩家扮演传奇猎魔人杰洛特，在饱受战乱蹂躏的北方王国中寻找养女希里。游戏以其深刻的叙事、丰富的支线任务和庞大的世界观被誉为史上最伟大的 RPG 之一。",
    gameplay: "第三人称动作 RPG，钢剑对人、银剑对怪的经典双剑系统。法印战斗提供五种魔法能力：阿尔德冲击、伊格尼火焰、昆恩护盾、亚登陷阱和亚克西魅惑。炼金系统支持煎药、炸弹与剑油制作。开放世界分为威伦、史凯利格、诺维格瑞等多个区域，每处都有独特生态。",
    recommendation: "即使发售十年后，巫师 3 依然是最优秀的 RPG 之一。石之心和血与酒两个 DLC 体量堪比完整游戏。次世代更新带来了光追画面和中文配音。如果你喜欢深刻的故事、复杂的道德抉择和庞大的奇幻世界，这款游戏是必玩之作。",
    developers: [{ id: 1, name: "CD Projekt Red" }],
    publishers: [{ id: 1, name: "CD Projekt" }],
    requirements: {
      minCpu: "Intel Core i5-2500K", minGpu: "NVIDIA GeForce GTX 660", minRamGB: 6, minVramGB: 2,
      recCpu: "Intel Core i7-3770", recGpu: "NVIDIA GeForce GTX 770", recRamGB: 8, recVramGB: 4,
    },
    reviews: [
      "支线任务质量堪称业界最高，每个都有完整的故事和情感。",
      "杰洛特和希里的父女情感人至深，角色塑造顶级。",
      "昆特牌是游戏史上最成功的内置小游戏之一。",
      "战斗系统虽然流畅但深度不足，后期略显单调。",
      "血与酒 DLC 的画面和叙事达到新高度，体量堪比完整游戏。",
      "音乐配乐民族风格浓郁，史凯利格群岛的配乐尤为出色。",
    ],
    screenshots: steamScreenshots(292030,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_600x900.jpg"
    ),
    news: [
      { date: "2024-11-10", title: "次世代更新 4.04 版本发布", summary: "进一步优化光追性能，新增跨平台存档功能。" },
      { date: "2024-05-19", title: "巫师 3 九周年纪念", summary: "CDPR 发布幕后纪录片，回顾这款传奇 RPG 的开发历程。" },
      { date: "2023-12-14", title: "Netflix 联动任务回归", summary: "限时回归 Netflix 剧集联动任务，获取专属猎魔人装备。" },
    ],
  },

  "spider-man-2": {
    ...getBaseGame("spider-man-2", "漫威蜘蛛侠 2", "2023-10-20",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2651280/library_600x900.jpg",
      4.4, 90,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "漫威蜘蛛侠 2 是 Insomniac Games 开发的超级英雄动作游戏，玩家可同时操控彼得·帕克和迈尔斯·莫拉莱斯两位蜘蛛侠，在更大的纽约城中穿梭。面对毒液和猎人克莱文等经典反派的威胁，两位蜘蛛侠必须携手守护城市。游戏在前作基础上全面进化，摆荡速度和战斗流畅度达到新高度。",
    gameplay: "双主角即时切换，彼得拥有共生体黑色战衣能力，迈尔斯保留生物电隐形技能。蛛网摆荡速度翻倍，配合蛛网翼实现高速滑翔飞行。战斗系统新增格挡机制和技能连携，两位蜘蛛侠可打出联合终结技。开放世界增加了更丰富的随机犯罪事件和收集要素。",
    recommendation: "超级英雄游戏的新标杆。蛛网摆荡+滑翔翼的高速移动体验无与伦比，在纽约摩天楼之间穿梭的爽快感很难在其他游戏中找到。双主角叙事将彼得与迈尔斯的故事线交织得感人且精彩。PC 版画面表现顶级。",
    developers: [{ id: 7, name: "Insomniac Games" }],
    publishers: [{ id: 7, name: "PlayStation PC" }],
    requirements: {
      minCpu: "Intel Core i3-8100", minGpu: "NVIDIA GeForce GTX 1650", minRamGB: 16, minVramGB: 4,
      recCpu: "Intel Core i5-8400", recGpu: "NVIDIA GeForce RTX 3060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "蛛网摆荡速度大幅提升，配合滑翔翼的移动体验极为爽快。",
      "毒液共生体的战斗风格独特且富有冲击力。",
      "双主角切换自然流畅，两个角色的故事线都很丰满。",
      "主线剧情偏短，大约 15 小时即可通关。",
      "NYC 城市场景细节精美，光线追踪效果出色。",
      "PC 移植表现优秀，支持多种画面技术。",
    ],
    screenshots: steamScreenshots(2651280,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2651280/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2651280/library_600x900.jpg"
    ),
    news: [
      { date: "2024-10-19", title: "PC 版正式发售", summary: "漫威蜘蛛侠 2 登陆 PC 平台，支持光线追踪和超宽屏显示。" },
      { date: "2024-03-07", title: "新游戏+ 模式更新", summary: "新增 New Game+ 模式，可继承所有战衣和能力重新体验故事。" },
      { date: "2023-12-07", title: "TGA 最佳动作游戏提名", summary: "凭借出色的摆荡机制和战斗系统获得 TGA 最佳动作游戏提名。" },
    ],
  },

  "zelda-tears-of-the-kingdom": {
    ...getBaseGame("zelda-tears-of-the-kingdom", "塞尔达传说: 王国之泪", "2023-05-12",
      "/covers/zelda-totk.jpg",
      4.7, 96,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }],
      ["Nintendo Switch"]
    ),
    description_raw: "塞尔达传说: 王国之泪是任天堂开发的开放世界动作冒险游戏，是《旷野之息》的正统续作。林克与塞尔达在海拉鲁城堡地下发现远古壁画后，被卷入一场跨越天空与地底的宏大冒险。游戏在保留前作开放世界自由探索精神的基础上，引入了全新的创造与建造机制，将玩法可能性推向了前所未有的高度。",
    gameplay: "究极手系统允许玩家拼接任何物体，建造载具、桥梁、飞行器等装置。余料建造可将一切材料与武器融合，创造独特装备。通天术让林克可穿越天花板直达上层，彻底改变了探索方式。天空群岛、地表海拉鲁与地下深渊三层世界构成垂直探索空间，地图规模为前作两倍以上。",
    recommendation: "重新定义了开放世界游戏的自由度上限。究极手建造系统的创造力空间近乎无限——别人在玩动作冒险，你在造高达、造轰炸机、造自动化生产线。三层世界叠加近百小时的内容密度，每一处都藏着惊喜。如果你只能玩一款 Switch 游戏，毫无疑问是它。",
    developers: [{ id: 8, name: "Nintendo EPD" }],
    publishers: [{ id: 8, name: "Nintendo" }],
    requirements: {
      minCpu: "Nintendo Switch 独占", minGpu: "Nintendo Switch 独占", minRamGB: 0, minVramGB: 0,
      recCpu: "Nintendo Switch 独占", recGpu: "Nintendo Switch 独占", recRamGB: 0, recVramGB: 0,
    },
    reviews: [
      "究极手建造系统彻底改变了开放世界玩法，创造力无限。",
      "三层世界——天空、地表、地下——的垂直探索体验震撼人心。",
      "叙事比前作更加强烈和感人，龙之泪任务线令人泪目。",
      "Switch 机能限制了画面表现，部分场景帧率不稳。",
      "神庙解密设计精巧，充分利用新能力。",
      "地底世界的探索氛围紧张刺激，完全不同的生存体验。",
    ],
    screenshots: [
      "/covers/zelda-totk.jpg",
      "/covers/zelda-totk.jpg",
      "/covers/zelda-totk.jpg",
      "/covers/zelda-totk.jpg",
      "/covers/zelda-totk.jpg",
    ],
    news: [
      { date: "2024-09-26", title: "塞尔达传说新作公布", summary: "任天堂宣布全新的 2D 塞尔达传说《智慧的再现》，塞尔达首次作为可控主角。" },
      { date: "2024-05-12", title: "王国之泪一周年纪念", summary: "全球销量突破 2000 万份，玩家社区创作了大量令人惊叹的究极手作品。" },
      { date: "2023-12-07", title: "获 TGA 最佳动作/冒险游戏", summary: "TGA 2023 上王国之泪获最佳动作冒险游戏奖。" },
    ],
  },

  "resident-evil-4-remake": {
    ...getBaseGame("resident-evil-4-remake", "生化危机 4 重制版", "2023-03-24",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_600x900.jpg",
      4.3, 92,
      [{ id: 1, name: "动作", slug: "action" }, { id: 6, name: "射击", slug: "shooter" }, { id: 12, name: "恐怖", slug: "horror" }],
      ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X"]
    ),
    description_raw: "生化危机 4 重制版 是 Capcom 对 2005 年经典生存恐怖游戏的全面重制。特工里昂·S·肯尼迪奉命前往西班牙偏远村庄，营救被邪教组织绑架的总统女儿阿什莉。游戏在保留原作精髓的基础上，以 RE 引擎重新构建了全部画面和系统，将恐怖氛围与动作射击的平衡推向新的高度。",
    gameplay: "越肩视角第三人称射击，战斗强调资源管理和精准射击。新增小刀格挡机制，可格挡飞斧、电锯甚至投矛。商人系统提供武器升级和宝物兑换。潜行暗杀系统为战斗提供更多战术选择。附身模式让玩家体验阿什莉的视角，增加了恐怖感。",
    recommendation: "史上最佳重制游戏之一。RE 引擎将原作的恐怖氛围和动作手感全面现代化，小刀格挡等新机制让战斗更具深度。即使你玩过原版，重制版的敌人 AI 和关卡调整也会带来全新体验。恐怖与爽快射击的完美平衡。",
    developers: [{ id: 9, name: "Capcom" }],
    publishers: [{ id: 9, name: "Capcom" }],
    requirements: {
      minCpu: "Intel Core i5-7500", minGpu: "NVIDIA GeForce GTX 1050 Ti", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-8700", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "RE 引擎带来的画面进化令人震惊，恐怖氛围渲染出色。",
      "战斗系统在原作基础上完美进化，枪械手感一流。",
      "小刀格挡机制让战斗节奏更加紧张刺激。",
      "内容相较原版有些删减，部分关卡被精简。",
      "原作经典桥段得到忠实还原的同时加入了新意。",
      "佣兵模式回归，为通关后提供了充足的重复可玩性。",
    ],
    screenshots: steamScreenshots(2050650,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/library_600x900.jpg"
    ),
    news: [
      { date: "2024-09-24", title: "黄金版发布", summary: "RE4 重制版黄金版包含所有 DLC 和佣兵模式新增角色。" },
      { date: "2024-02-01", title: "Separate Ways DLC 好评如潮", summary: "艾达王篇 DLC 获得超高评价，被认为是 DLC 制作的典范。" },
      { date: "2023-12-07", title: "获 TGA 最佳动作游戏提名", summary: "RE4 重制版在 TGA 2023 获多项提名。" },
    ],
  },

  "starfield": {
    ...getBaseGame("starfield", "星空", "2023-09-06",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/library_600x900.jpg",
      3.8, 83,
      [{ id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 13, name: "科幻", slug: "sci-fi" }],
      ["PC", "Xbox Series X"]
    ),
    description_raw: "星空 是 Bethesda Game Studios 二十五年来首个全新 IP，也是其首款太空题材角色扮演游戏。故事设定在 2330 年，人类已殖民多个星系。玩家将加入星座组织，在浩瀚的太空中探索未知星球、揭开神秘遗物的秘密。游戏以 NASA 朋克美学为基调，融合了 Bethesda 标志性的开放世界叙事与太空探索的自由感。",
    gameplay: "第一/第三人称太空 RPG，飞船驾驶、太空战斗与地面探索无缝切换。飞船定制系统允许从引擎到舱室全面改造。技能树涵盖战斗、科技、体能、社交和科学五大方向。哨站建造系统可在任意星球建立资源采集基地。超过 1000 颗星球可供探索，融合程序生成与手工艺内容。",
    recommendation: "Bethesda 的太空史诗，适合喜欢慢节奏探索和自由角色扮演的玩家。飞船定制和建造系统的深度令人着迷，NASA 朋克视觉风格独树一帜。推荐给热爱《辐射》和《上古卷轴》系列，并愿意在浩瀚星空中寻找自己方向的玩家。",
    developers: [{ id: 10, name: "Bethesda Game Studios" }],
    publishers: [{ id: 10, name: "Bethesda Softworks" }],
    requirements: {
      minCpu: "Intel Core i7-6800K", minGpu: "NVIDIA GeForce GTX 1070 Ti", minRamGB: 16, minVramGB: 8,
      recCpu: "Intel Core i5-10600K", recGpu: "NVIDIA GeForce RTX 2080", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "飞船建造和太空探索的自由度令人震撼。",
      "NASA 朋克美术风格独特，飞船内饰设计精美。",
      "频繁的黑屏加载打断了探索的沉浸感。",
      "支线任务质量上乘，阵营任务线比主线更精彩。",
      "太空战斗手感扎实，飞船改装系统深度十足。",
      "星球探索重复度较高，程序生成内容缺乏惊喜。",
    ],
    screenshots: steamScreenshots(1716740,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/library_600x900.jpg"
    ),
    news: [
      { date: "2024-05-01", title: "Shattered Space DLC 发布", summary: "首个大型扩展包带来新的星球、故事线和装备。" },
      { date: "2024-02-20", title: "Creation Kit 正式支持 Mod", summary: "Bethesda 发布官方 Mod 工具，社区创作生态蓬勃发展。" },
      { date: "2023-11-15", title: "DLSS 3 帧生成支持", summary: "更新加入 DLSS 3 和 FSR 3 支持，性能大幅提升。" },
    ],
  },

  "horizon-forbidden-west": {
    ...getBaseGame("horizon-forbidden-west", "地平线: 西之绝境", "2022-02-18",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/library_600x900.jpg",
      4.3, 88,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 3, name: "冒险", slug: "adventure" }],
      ["PC", "PlayStation 5", "PlayStation 4"]
    ),
    description_raw: "地平线: 西之绝境 是 Guerrilla Games 开发的开放世界动作角色扮演游戏，是《零之曙光》的续作。埃洛伊前往被神秘红色枯萎病侵蚀的西部禁域，寻找拯救地球的答案。游戏以壮丽的末世自然景观、进化的机械兽狩猎系统和更深入的世界观探索，将这一系列的品质推向新高度。",
    gameplay: "第三人称开放世界，弓箭、投石索、标枪等多样化远程武器对战巨型机械兽。焦点扫描系统揭示敌人弱点和行动路径。新增水下探索、滑翔伞和自由攀爬系统，极大地丰富了移动自由度。技能树分为战士、猎人、生存者、渗透者和机器大师五种流派，支持深度构筑。",
    recommendation: "PS5 时代画面最惊艳的游戏之一，机械兽的设计和战斗演出令人叹为观止。从水下遗迹到雪山之巅，西部禁域的生态多样性令人沉浸。PC 版支持超宽屏和高帧率，是体验这款视觉奇观的最佳平台。",
    developers: [{ id: 11, name: "Guerrilla Games" }],
    publishers: [{ id: 7, name: "PlayStation PC" }],
    requirements: {
      minCpu: "Intel Core i3-8100", minGpu: "NVIDIA GeForce GTX 1650", minRamGB: 16, minVramGB: 4,
      recCpu: "Intel Core i5-8600", recGpu: "NVIDIA GeForce RTX 3060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "画面表现力达到新高度，机械兽的细节令人叹为观止。",
      "战斗系统在前作基础上极大丰富，每种武器都有独特手感。",
      "开放世界内容丰富，支线任务质量高于前作。",
      "主线剧情中段节奏略显拖沓。",
      "水下探索和飞行坐骑为探索增加了新维度。",
      "PC 版优化出色，支持 DLSS 和超宽屏。",
    ],
    screenshots: steamScreenshots(2420110,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/library_600x900.jpg"
    ),
    news: [
      { date: "2024-03-21", title: "PC 版正式发售", summary: "Horizon Forbidden West 完整版登陆 PC，含 Burning Shores DLC 和全部更新。" },
      { date: "2023-12-10", title: "Burning Shores 获好评", summary: "Burning Shores DLC 在洛杉矶废墟上带来震撼的机械龙 Boss 战。" },
      { date: "2023-06-15", title: "Guerrilla 宣布多人游戏项目", summary: "Guerrilla Games 确认正在开发设定在 Horizon 宇宙的多人合作游戏。" },
    ],
  },

  "black-myth-wukong": {
    ...getBaseGame("black-myth-wukong", "黑神话: 悟空", "2024-08-20",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_600x900.jpg",
      4.5, 90,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 12, name: "神话", slug: "mythology" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "黑神话: 悟空 是由游戏科学开发的国产动作角色扮演游戏，以中国古典名著《西游记》为背景。玩家将扮演一位天命人，踏上寻找大圣遗留之物的旅程，迎战各路妖王。游戏以出色的画面表现、流畅的战斗系统和深厚的中国文化底蕴，成为中国游戏史上的里程碑之作。",
    gameplay: "高速动作战斗为核心，如意棒三种架势（劈棍、立棍、戳棍）可实时切换。法术系统涵盖定身术、分身术、变身术等，每种有独特战术价值。变身系统允许玩家化身为已击败的妖王，使用其独有招式。无传统格挡，强调精准闪避和见切反击，Boss 战节奏紧凑。",
    recommendation: "中国游戏史上的里程碑，证明了国产 3A 的无限潜力。UE5 引擎打造的东方美学奇观令人屏息——每一帧都是壁纸。Boss 战设计精妙且极具挑战性，击败强敌的成就感不输任何国际大作。如果你热爱动作游戏和东方神话，这是必玩之作。",
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
    screenshots: steamScreenshots(2358720,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_600x900.jpg"
    ),
    news: [
      { date: "2024-12-10", title: "获 TGA 最佳动作游戏", summary: "黑神话: 悟空在 TGA 2024 上斩获最佳动作游戏奖等多项大奖。" },
      { date: "2024-09-20", title: "销量突破 2000 万", summary: "游戏科学宣布全球销量突破 2000 万份，成为最畅销的国产单机游戏。" },
      { date: "2024-08-20", title: "一周年：免费 Boss Rush 模式上线", summary: "为庆祝发售一周年，新增 Boss 连战挑战模式与全新外观套装。" },
    ],
  },

  "gta-5": {
    ...getBaseGame("gta-5", "侠盗猎车手 5", "2015-04-14",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_600x900.jpg",
      4.5, 96,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "侠盗猎车手 5 是 Rockstar Games 开发的现象级开放世界动作冒险游戏，故事发生在阳光明媚的洛圣都——一个以洛杉矶为原型的广阔都会。玩家将操控三位截然不同的主角——麦克、富兰克林和崔佛，在充满犯罪、背叛与金钱的都市中展开一场惊心动魄的冒险。GTA Online 模式更是将游戏打造成了持续更新的线上世界。",
    gameplay: "第三人称/第一人称自由切换的开放世界。三位主角可在任务中实时切换，各自拥有特殊能力。海陆空载具全面覆盖——汽车、直升机、快艇甚至潜艇。抢劫任务系列是游戏精华，需团队配合完成精心策划的大型行动。GTA Online 持续更新，涵盖竞技场、赌场、岛屿劫案等海量内容。",
    recommendation: "销量 2 亿份的现象级作品，开放世界游戏的终极形态。洛圣都的每一寸土地都充满了细节与生命力。三位主角的叙事交织精彩纷呈，GTA Online 的持续更新让它至今依然是最活跃的在线游戏之一。如果你还没玩过，你可能是地球上的最后一个人。",
    developers: [{ id: 6, name: "Rockstar Games" }],
    publishers: [{ id: 6, name: "Rockstar Games" }],
    requirements: {
      minCpu: "Intel Core 2 Quad Q6600", minGpu: "NVIDIA GeForce 9800 GT", minRamGB: 4, minVramGB: 1,
      recCpu: "Intel Core i5-3470", recGpu: "NVIDIA GeForce GTX 660", recRamGB: 8, recVramGB: 2,
    },
    reviews: [
      "史上最畅销的娱乐产品之一，洛圣都的世界令人沉迷。",
      "三位主角切换机制创新十足，每个角色都有独特魅力。",
      "GTA Online 的持续更新让游戏生命力长达十年。",
      "部分任务设计略显线性，自由度不如整体开放世界。",
      "中文语音和字幕让中国玩家体验更佳。",
      "抢劫任务是系列巅峰——需要真正的团队配合和技巧。",
    ],
    screenshots: steamScreenshots(271590,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_600x900.jpg"
    ),
    news: [
      { date: "2025-01-15", title: "GTA VI 开发进度更新", summary: "Rockstar 确认 GTA VI 将于 2025 年秋登陆 PS5 和 Xbox Series X，PC 版稍后。" },
      { date: "2024-12-10", title: "GTA Online 圣诞活动上线", summary: "限时双倍奖励、雪天洛圣都、节日限定载具回归。" },
      { date: "2024-09-01", title: "PC 版光线追踪更新", summary: "PC 版获得增强光追效果，包括反射和阴影的质量提升。" },
    ],
  },

  "monster-hunter-world": {
    ...getBaseGame("monster-hunter-world", "怪物猎人: 世界", "2018-08-09",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_600x900.jpg",
      4.5, 90,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }],
      ["PC", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "怪物猎人: 世界是 Capcom 开发的共斗动作游戏，是系列史上最成功的作品。玩家将扮演一名猎人，在新大陆——一片未被探索的原始生态中，与各种巨大的怪物展开激烈狩猎。游戏以精妙的生态系统设计、深度的战斗系统和华丽的联机体验而闻名，全球销量超过 2500 万份。",
    gameplay: "14 种武器类型各有独特连招和战斗风格——太刀见切反击、大剑真蓄力斩、大锤眩晕流等。怪物无血条，需通过观察行为判断状态。环境互动丰富——落石、藤蔓陷阱、领地争夺均可利用。4 人联机狩猎是核心体验，配合闪光弹、陷阱、回复粉尘等辅助道具，团队协作感极强。",
    recommendation: "Capcom 史上销量最高的游戏，14 种武器的差异化设计让每位猎人都能找到自己的战斗方式。与朋友联机狩猎巨大怪物的爽快感无可替代。冰原 DLC 更是将内容量翻倍，大师级怪物带来真正的挑战。如果你想要一款可以玩上千小时的联机游戏，这就是。",
    developers: [{ id: 9, name: "Capcom" }],
    publishers: [{ id: 9, name: "Capcom" }],
    requirements: {
      minCpu: "Intel Core i5-4460", minGpu: "NVIDIA GeForce GTX 760", minRamGB: 8, minVramGB: 2,
      recCpu: "Intel Core i7-3770", recGpu: "NVIDIA GeForce GTX 1060", recRamGB: 8, recVramGB: 3,
    },
    reviews: [
      "狩猎体验的天花板，14 种武器设计各有深度。",
      "生态系统设计精妙，怪物之间的互动令人惊叹。",
      "冰原 DLC 内容量堪比一部完整游戏。",
      "联机体验极佳，与朋友一起狩猎乐趣翻倍。",
      "初期上手有一定门槛，但一旦掌握就停不下来。",
      "PC 版优化初期有问题，现已经过多次更新改善。",
    ],
    screenshots: steamScreenshots(582010,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_600x900.jpg"
    ),
    news: [
      { date: "2024-06-12", title: "怪物猎人: 荒野公布", summary: "Capcom 正式公布系列新作《怪物猎人: 荒野》，预计 2025 年发售，画面全面进化。" },
      { date: "2024-03-01", title: "冰原回归活动开启", summary: "限定怪猎世界+冰原捆绑包折扣，吸引大量新猎人加入。" },
      { date: "2023-12-05", title: "销量突破 2500 万", summary: "Capcom 宣布怪猎世界全球累计销量突破 2500 万份。" },
    ],
  },

  "sekiro": {
    ...getBaseGame("sekiro", "只狼: 影逝二度", "2019-03-22",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg",
      4.6, 90,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }, { id: 11, name: "魂系", slug: "souls-like" }],
      ["PC", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "只狼: 影逝二度 是 FromSoftware 开发的忍者题材动作冒险游戏，荣获 2019 年 TGA 年度游戏大奖。故事设定在 16 世纪末的日本战国时代，玩家扮演独臂忍者狼，为守护年幼的皇子而踏上了复仇与救赎之路。游戏以其精准的拼刀战斗系统、立体化的地图探索和深刻的和风美学而受到全球玩家和评论家的高度赞誉。",
    gameplay: "以格挡为核心的单人动作游戏，拼刀系统要求精准弹开敌人攻击并寻找反击窗口。义手忍具提供多样化战术——手里剑追击、爆竹惊敌、雾鸦闪避等。钩绳系统赋予立体机动能力，可飞檐走壁、空中暗杀。死亡后可在佛像处复活一次，但多次死亡会传播龙咳疾病。Boss 战强调节奏感和反应速度。",
    recommendation: "2019 TGA 年度游戏，FromSoftware 最具节奏感的战斗系统。与敌人拼刀的金属碰撞声中蕴含着游戏的灵魂——这是一场关于技巧、耐心和专注力的修行。如果你渴望一款真正考验技术的动作游戏，只狼会给你最纯粹的挑战和最深刻的满足。",
    developers: [{ id: 2, name: "FromSoftware" }],
    publishers: [{ id: 10, name: "Activision" }],
    requirements: {
      minCpu: "Intel Core i3-2100", minGpu: "NVIDIA GeForce GTX 760", minRamGB: 4, minVramGB: 2,
      recCpu: "Intel Core i5-2500K", recGpu: "NVIDIA GeForce GTX 970", recRamGB: 8, recVramGB: 4,
    },
    reviews: [
      "弹刀系统的金属碰撞感是游戏史上最好的近战体验之一。",
      "钩绳移动让地图探索充满立体感和自由度。",
      "Boss 战设计如同刀剑对决的舞蹈，每一场都令人难忘。",
      "难度极高，但每次击败 Boss 的成就感无与伦比。",
      "和风美学贯穿始终，苇名城的场景氛围令人沉醉。",
      "缺少角色构筑多样性，不像魂系有那么多流派选择。",
    ],
    screenshots: steamScreenshots(814380,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/library_600x900.jpg"
    ),
    news: [
      { date: "2023-09-26", title: "只狼五周年纪念", summary: "FromSoftware 发布只狼五周年纪念插图，感谢全球玩家支持。" },
      { date: "2023-03-22", title: "销量突破 1000 万", summary: "只狼全球销量正式突破 1000 万份，成为 FS 社最畅销作品之一。" },
    ],
  },

  "dark-souls-3": {
    ...getBaseGame("dark-souls-3", "黑暗之魂 3", "2016-04-12",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_600x900.jpg",
      4.5, 89,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 11, name: "魂系", slug: "souls-like" }],
      ["PC", "PlayStation 4", "Xbox One"]
    ),
    description_raw: "黑暗之魂 3 是 FromSoftware 开发的魂系动作角色扮演游戏的集大成之作。初火将熄，钟声响起，古老的薪王们从坟墓中苏醒，不死人再次踏上传承初火的旅程。游戏汇集了系列最精华的关卡设计、最宏大的 Boss 战和最悲壮的世界观，为黑暗之魂三部曲画上了完美的句号。",
    gameplay: "经典魂系第三人称动作 RPG，体力管理、精准闪避和盾牌格挡是生存三大要素。武器类别多达数十种，力量、敏捷、智力、信仰四大流派各有独特装备和法术。篝火存档点覆盖全图，死亡后魂掉落需返回拾取。在线模式支持合作通关和 PvP 入侵。DLC 画中世界和环印城提供更难的挑战。",
    recommendation: "魂系三部曲的完美收官之作，汇集了系列所有精华。Boss 战设计达到巅峰——无名王者、芙莉德修女、盖尔爷爷……每一场都是艺术品般的死斗体验。如果你体验了艾尔登法环后想追溯其源头，黑魂 3 是魂系最好的入门和终点。",
    developers: [{ id: 2, name: "FromSoftware" }],
    publishers: [{ id: 2, name: "Bandai Namco" }],
    requirements: {
      minCpu: "Intel Core i3-2100", minGpu: "NVIDIA GeForce GTX 750 Ti", minRamGB: 4, minVramGB: 2,
      recCpu: "Intel Core i7-3770", recGpu: "NVIDIA GeForce GTX 970", recRamGB: 8, recVramGB: 4,
    },
    reviews: [
      "Boss 战设计的巅峰之作，每场战斗都是视觉与操作的完美结合。",
      "关卡设计环环相扣，捷径和隐藏区域的布局令人叹为观止。",
      "环形地图设计让探索充满惊喜，回到起点的瞬间令人震撼。",
      "难度曲线合理，适合新手入坑魂系。",
      "DLC 质量极高，环印城的末世场景令人难忘。",
      "部分武器平衡性欠佳，PvP 环境有待改进。",
    ],
    screenshots: steamScreenshots(374320,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/library_600x900.jpg"
    ),
    news: [
      { date: "2024-04-12", title: "黑暗之魂 3 八周年", summary: "社区举办八周年纪念活动，回顾这款魂系集大成之作的辉煌历程。" },
      { date: "2023-06-20", title: "在线服务恢复", summary: "FromSoftware 修复了存在已久的安全漏洞，在线功能全面恢复。" },
    ],
  },

  "ghost-of-tsushima": {
    ...getBaseGame("ghost-of-tsushima", "对马岛之魂", "2024-05-16",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/library_600x900.jpg",
      4.6, 83,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "对马岛之魂 是 Sucker Punch 开发的开放世界动作冒险游戏，以 1274 年蒙古入侵日本对马岛为背景。玩家扮演武士境井仁，在武士道的荣誉与拯救家园的现实之间做出抉择，化身战鬼，以非常规手段对抗蒙古大军。游戏以壮美的和风场景、流畅的剑戟战斗和独特的黑泽明模式而闻名。",
    gameplay: "第三人称开放世界，主打日本刀剑戟战斗。四种架势针对不同敌人类型——磐式对剑士、水式对盾兵、风式对枪兵、月式对莽汉。战鬼武器包括苦无、烟雾弹、粘性弹等，丰富了暗杀和战术选择。对峙系统允许在开战前瞬间斩杀多人。引导之风取代传统导航箭头，画面干净沉浸。",
    recommendation: "最美的和风开放世界——金黄色的芦苇荡、绯红的枫叶林、洁白的雪原，每一帧都是浮世绘。剑戟战斗手感扎实且华丽，对峙系统让每场遭遇战都如电影的刀剑对决。如果《荒野大镖客 2》是西部片的极致，《对马岛之魂》就是黑泽明式武士片在游戏中的完美呈现。",
    developers: [{ id: 12, name: "Sucker Punch" }],
    publishers: [{ id: 7, name: "PlayStation PC" }],
    requirements: {
      minCpu: "Intel Core i3-8100", minGpu: "NVIDIA GeForce GTX 960", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i5-8600", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "最美的和风开放世界，场景设计如浮世绘般令人沉醉。",
      "剑戟战斗手感出众，对峙系统极为爽快。",
      "引导之风取代导航 UI 的设计让探索充满沉浸感。",
      "主线剧情情感充沛，仁的武士道抉择令人深思。",
      "支线任务重复度略高，开放世界内容密度不够。",
      "PC 版支持超宽屏和高帧率，体验完胜主机版。",
    ],
    screenshots: steamScreenshots(2215430,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/library_600x900.jpg"
    ),
    news: [
      { date: "2024-09-25", title: "续作《羊蹄山之魂》公布", summary: "Sucker Punch 正式公布续作，舞台转移至日本北海道。" },
      { date: "2024-05-16", title: "PC 版正式发售", summary: "对马岛之魂导演剪辑版登陆 PC，支持 DLSS 3 和 FSR 3。" },
    ],
  },

  "death-stranding": {
    ...getBaseGame("death-stranding", "死亡搁浅", "2022-03-30",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1850570/library_600x900.jpg",
      4.3, 86,
      [{ id: 1, name: "动作", slug: "action" }, { id: 3, name: "冒险", slug: "adventure" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "死亡搁浅 是小岛秀夫独立后制作的首款游戏，由小岛工作室开发。在未来的末日美国，死亡搁浅现象模糊了生与死的界限。玩家扮演快递员山姆·波特·布里吉斯，肩负连接分散的人类聚落、重建社会联系的使命。游戏以其独特的送货玩法、深邃的剧情和好莱坞全明星阵容著称。",
    gameplay: "核心玩法是穿越各种地形完成快递任务，需要管理负重、平衡和路线规划。BB 探测器可感知隐形怪物 BT，潜行躲避或使用血液武器对抗。异步联机系统允许玩家共享建设的桥梁、公路和滑索，将孤独的旅途变成无声的协作。载具包括摩托车、卡车和滑索网络，逐渐解锁更高效的运输方式。",
    recommendation: "小岛秀夫最具个人风格的作品，一款关于连接与孤独的哲学之旅。游戏的核心创意——让送货成为一种艺术——在行业中独一无二。当你在绝境中看到其他玩家留下的梯子和提示，那种跨越空间的人性温暖令人动容。适合喜欢慢节奏沉浸体验和独特叙事的玩家。",
    developers: [{ id: 13, name: "Kojima Productions" }],
    publishers: [{ id: 13, name: "505 Games" }],
    requirements: {
      minCpu: "Intel Core i5-3470", minGpu: "NVIDIA GeForce GTX 1050", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-8700K", recGpu: "NVIDIA GeForce RTX 2080", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "送货玩法的创新性独一无二，规划路线本身就是一种乐趣。",
      "异步联机系统让孤独的旅途充满温暖和惊喜。",
      "剧情深邃且脑洞大开，典型的 Kojima 式叙事。",
      "前期节奏较慢，需要耐心才能感受到游戏魅力。",
      "画面表现力顶级，Decima 引擎的远景渲染令人叹服。",
      "BB 的设定让人产生真实的情感连接，结局催泪。",
    ],
    screenshots: steamScreenshots(1850570,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1850570/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1850570/library_600x900.jpg"
    ),
    news: [
      { date: "2025-03-10", title: "死亡搁浅 2 发售日确定", summary: "小岛秀夫宣布续作《死亡搁浅 2: 冥滩之上》定档 2025 年 6 月。" },
      { date: "2024-01-31", title: "真人电影化决定", summary: "A24 与小岛工作室宣布将死亡搁浅改编为真人电影。" },
    ],
  },

  "hades": {
    ...getBaseGame("hades", "黑帝斯", "2020-09-17",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900.jpg",
      4.7, 93,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 15, name: "独立", slug: "indie" }],
      ["PC", "Nintendo Switch"]
    ),
    description_raw: "黑帝斯 是 Supergiant Games 开发的 Roguelike 动作地牢游戏，荣获 2021 年 TGA 年度游戏提名和最佳动作游戏奖。玩家扮演冥王哈迪斯之子扎格柔斯，试图逃离冥界到达奥林匹斯山。每次逃跑失败后都会回到冥府，与各色神明和冥界居民互动，逐步揭开奥林匹斯家族的秘密。",
    gameplay: "俯视角高速 Roguelike 动作游戏，六种武器各有独特形态变异。奥林匹斯众神提供祝福——宙斯的连环闪电、波塞冬的击退波浪、雅典娜的神圣偏折等，祝福之间的组合可触发双重祝福。每次逃跑中收集的黑暗、宝石和钥匙可永久强化角色能力。NPC 好感系统影响剧情解锁和道具获取。",
    recommendation: "Roguelike 游戏的叙事典范——每次死亡不是失败，而是推进剧情的机会。Supergiant 标志性的美术风格和 Darren Korb 的神级配乐让冥界之旅充满魅力。六种武器 × 众神祝福 × 形态变异的组合深度惊人，即使 100 次逃跑后依然有新发现。独立游戏天花板。",
    developers: [{ id: 14, name: "Supergiant Games" }],
    publishers: [{ id: 14, name: "Supergiant Games" }],
    requirements: {
      minCpu: "Dual Core 2.4 GHz", minGpu: "NVIDIA GeForce 8600", minRamGB: 4, minVramGB: 1,
      recCpu: "Dual Core 3.0 GHz", recGpu: "NVIDIA GeForce GTX 460", recRamGB: 8, recVramGB: 1,
    },
    reviews: [
      "Roguelike 的叙事新标杆，每次死亡都推动剧情前进。",
      "画风精美绝伦，人物立绘和场景设计充满艺术感。",
      "祝福组合系统深度惊人，每次逃跑的体验都不同。",
      "NPC 互动充满温度，冥界诸神的性格塑造极为出色。",
      "音乐堪称神级，Darren Korb 的配乐让战斗更加热血。",
      "高热度模式下难度骤增，挑战极限的成就感强烈。",
    ],
    screenshots: steamScreenshots(1145360,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900.jpg"
    ),
    news: [
      { date: "2024-05-06", title: "黑帝斯 2 抢先体验版上线", summary: "Supergiant 发布黑帝斯 2 抢先体验版，首日 Steam 在线峰值超 10 万。" },
      { date: "2023-12-15", title: "黑帝斯 2 正式公布", summary: "在 TGA 2023 上正式公布续作，玩家将扮演冥界公主梅莉诺伊。" },
    ],
  },

  "hogwarts-legacy": {
    ...getBaseGame("hogwarts-legacy", "霍格沃茨之遗", "2023-02-10",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg",
      4.4, 83,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "霍格沃茨之遗 是 Avalanche Software 开发的哈利·波特世界观开放世界动作 RPG。故事设定在 19 世纪末的魔法世界，玩家扮演一名拥有感知古代魔法能力的霍格沃茨五年级新生。在学院中学习魔法课程、探索霍格沃茨城堡的秘密、驯服神奇生物，同时揭开古代魔法背后隐藏的黑暗真相。",
    gameplay: "第三人称开放世界 RPG，霍格沃茨城堡、霍格莫德村及周边地区无缝探索。魔法战斗基于连击系统，基础咒语与古代魔法终结技配合。有求必应屋是玩家的自定义空间，可种植植物、调配药剂和装饰环境。扫帚飞行和鹰马飞行让探索更加自由。四个学院有不同的公共休息室和专属任务。",
    recommendation: "哈利·波特粉丝的终极梦想——终于有一款游戏让你真正走进霍格沃茨。城堡的每个角落都藏着秘密，飞天扫帚穿越苏格兰高地的自由感令人心醉。即使你不是系列粉丝，出色的 RPG 系统和美丽的开放世界也值得一玩。2023 年全球销量冠军名副其实。",
    developers: [{ id: 15, name: "Avalanche Software" }],
    publishers: [{ id: 15, name: "Warner Bros. Games" }],
    requirements: {
      minCpu: "Intel Core i5-6600", minGpu: "NVIDIA GeForce GTX 960", minRamGB: 16, minVramGB: 4,
      recCpu: "Intel Core i7-8700", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "霍格沃茨城堡的还原度令人惊叹，每个细节都充满魔法世界的魅力。",
      "扫帚飞行穿越苏格兰高地的自由感无与伦比，是游戏最美妙的体验。",
      "战斗系统出人意料地流畅，咒语连击和古代魔法终结技爽快。",
      "主线剧情中规中矩，缺乏令人惊喜的转折。",
      "PC 版优化初期较差，多次更新后有显著改善。",
      "有求必应屋的装饰系统极富创意，让人流连忘返。",
    ],
    screenshots: steamScreenshots(990080,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/library_600x900.jpg"
    ),
    news: [
      { date: "2024-06-04", title: "夏季更新上线", summary: "新增拍照模式、新发型和霍格莫德商店等免费内容。" },
      { date: "2024-01-26", title: "销量突破 2400 万", summary: "WB Games 宣布霍格沃茨之遗成 2023 年全球最畅销游戏。" },
    ],
  },

  "doom-eternal": {
    ...getBaseGame("doom-eternal", "毁灭战士: 永恒", "2020-03-20",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_600x900.jpg",
      4.5, 89,
      [{ id: 1, name: "动作", slug: "action" }, { id: 6, name: "射击", slug: "shooter" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "毁灭战士: 永恒 是 id Software 开发的第一人称射击游戏，延续 DOOM (2016) 重启后的高速战斗风格。地狱大军入侵地球，毁灭战士必须再次挺身而出，在人类世界、地狱与天堂之间战场中穿梭，猎杀地狱祭司以拯救人类。游戏以其令人窒息的战斗节奏、重金属配乐和极致的爽快感著称。",
    gameplay: "高速 FPS，强调永不停歇的移动和射击。弹药、护甲和生命值通过特定方式回复——电锯获取弹药、火焰喷射器获取护甲、荣耀击杀获取生命值。资源循环逼迫玩家不断切换武器和击杀方式。平台跳跃和解密元素穿插在战斗之间。战斗难度极高但节奏紧凑，每场遭遇战都如舞蹈般流畅。",
    recommendation: "FPS 战斗的终极形态——当重金属音乐响起，在地狱中高速移动、切换武器、撕裂恶魔的时刻，你感受到的是最纯粹的射击游戏爽快感。DOOM Eternal 不给你喘息的机会，但也正是这种压迫感让每次胜利都酣畅淋漓。如果你想要释放压力，这就是最好的选择。",
    developers: [{ id: 16, name: "id Software" }],
    publishers: [{ id: 10, name: "Bethesda Softworks" }],
    requirements: {
      minCpu: "Intel Core i5 @ 3.3 GHz", minGpu: "NVIDIA GeForce GTX 1050 Ti", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-6700K", recGpu: "NVIDIA GeForce GTX 1060", recRamGB: 8, recVramGB: 6,
    },
    reviews: [
      "FPS 战斗的终极进化，高速移动+资源管理的完美融合。",
      "重金属配乐与战斗节奏天衣无缝，肾上腺素的极致释放。",
      "武器设计各具特色，每把枪都有独特的战斗定位。",
      "平台跳跃部分略显突兀，不是所有玩家都喜欢。",
      "id Tech 7 引擎优化极佳，即使在中等配置上也能流畅运行。",
      "DLC 古代众神提供了更疯狂和更有挑战性的战斗。",
    ],
    screenshots: steamScreenshots(782330,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_600x900.jpg"
    ),
    news: [
      { date: "2024-06-08", title: "DOOM: The Dark Ages 公布", summary: "id Software 在 Xbox 发布会上正式公布系列新作，中世纪的毁灭战士形象引发热议。" },
      { date: "2023-10-01", title: "光线追踪更新", summary: "DOOM Eternal 获得光追支持和 DLSS 3，画面效果进一步提升。" },
    ],
  },

  "stray": {
    ...getBaseGame("stray", "迷失", "2022-07-19",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/library_600x900.jpg",
      4.4, 83,
      [{ id: 3, name: "冒险", slug: "adventure" }, { id: 15, name: "独立", slug: "indie" }],
      ["PC", "PlayStation 5", "PlayStation 4"]
    ),
    description_raw: "迷失 是 BlueTwelve Studio 开发的第三人称冒险游戏，玩家扮演一只迷失在赛博朋克城市中的橘猫。在一座被遗忘的地下都市中，这只猫必须与一架小型无人机 B-12 合作，解开这座城市的谜团，寻找回到地面的道路。游戏以其独特的猫咪视角、精美的赛博朋克美学和温馨的叙事获得了广泛好评。",
    gameplay: "以猫的视角进行的第三人称探索冒险，包含攀爬、跳跃、钻洞等猫咪特有动作。环境叙事为主，通过壁画、机器人居民的对话和场景细节讲述故事。解谜元素轻度直观，配合平台跳跃和潜行躲避敌人 Zurks 的追捕。B-12 无人机可翻译机器人语言、照明和骇入设备，是探索的关键伙伴。",
    recommendation: "一款让所有猫奴心化的游戏——你真的可以推倒桌上的花瓶、挠沙发、在机器人身上打盹。但 Stray 不止于卖萌，它在赛博朋克废墟中讲述了一段温馨而忧伤的文明寓言。短小精悍（约 6-8 小时），适合一个周末沉浸其中。",
    developers: [{ id: 17, name: "BlueTwelve Studio" }],
    publishers: [{ id: 17, name: "Annapurna Interactive" }],
    requirements: {
      minCpu: "Intel Core i5-2300", minGpu: "NVIDIA GeForce GTX 650 Ti", minRamGB: 8, minVramGB: 2,
      recCpu: "Intel Core i5-8400", recGpu: "NVIDIA GeForce GTX 780", recRamGB: 8, recVramGB: 4,
    },
    reviews: [
      "猫咪模拟器的终极形态，所有猫咪的小动作都被完美还原。",
      "赛博朋克废土的美术风格独特且富有感染力。",
      "叙事温馨动人，B-12 作为伙伴的塑造令人难忘。",
      "流程偏短，大约 6-8 小时即可通关。",
      "解谜和平台难度适中，适合休闲玩家。",
      "音乐的电子氛围风格完美烘托了城市的孤独感。",
    ],
    screenshots: steamScreenshots(1332010,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/library_600x900.jpg"
    ),
    news: [
      { date: "2024-06-18", title: "Stray 改编动画电影官宣", summary: "Annapurna 动画部门宣布将 Stray 改编为动画长片。" },
      { date: "2023-11-28", title: "macOS 版本发布", summary: "Stray 正式登陆 Mac 平台，支持 MetalFX 画质增强。" },
    ],
  },

  "ff7-remake": {
    ...getBaseGame("ff7-remake", "最终幻想 7 重制版", "2022-06-17",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/library_600x900.jpg",
      4.5, 89,
      [{ id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 1, name: "动作", slug: "action" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "最终幻想 7 重制版 是 Square Enix 对 1997 年经典 RPG 的全面重制，以现代技术重新诠释了米德加的冒险。游戏讲述雇佣兵克劳德加入反神罗组织雪崩，对抗能源巨头神罗公司的故事。重制版将原作的回合制战斗革新为实时动作系统，同时大幅扩展了角色和世界观深度。",
    gameplay: "实时动作+指令菜单的混合战斗系统，ATB 槽满后可暂停时间选择技能、魔法和极限技。四个可操控角色各有独特战斗风格——克劳德的破坏剑、蒂法的拳击连段、巴雷特的远程射击、爱丽丝的魔法支援。武器升级盘提供深度定制。米德加的城市探索线性但场景密度极高。",
    recommendation: "对经典的完美致敬与大胆革新。从蒂法的战斗动作到爱丽丝的鲜花，每一个像素都散发着对原作的深爱。战斗系统是 Square Enix 近年来最好的——既保持策略深度又有动作的爽快感。如果你是 FF7 老玩家，重制版的改动会让你又哭又笑；如果是新玩家，这是了解经典的最佳途径。",
    developers: [{ id: 18, name: "Square Enix" }],
    publishers: [{ id: 18, name: "Square Enix" }],
    requirements: {
      minCpu: "Intel Core i5-3330", minGpu: "NVIDIA GeForce GTX 780", minRamGB: 8, minVramGB: 3,
      recCpu: "Intel Core i7-3770", recGpu: "NVIDIA GeForce GTX 1080", recRamGB: 12, recVramGB: 8,
    },
    reviews: [
      "对经典的致敬与革新达到完美平衡，角色塑造超越原作。",
      "战斗系统融合了动作的爽快和 RPG 的策略深度。",
      "音乐重编版恢弘壮丽，植松伸夫的旋律经过现代管弦乐编排后更加动人。",
      "流程偏线性，缺少原作的世界地图探索。",
      "PC 版优化一般，部分场景存在着色器编译卡顿。",
      "剧情改动大胆且有争议，老玩家反应两极分化。",
    ],
    screenshots: steamScreenshots(1462040,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1462040/library_600x900.jpg"
    ),
    news: [
      { date: "2024-02-29", title: "FF7 重生登陆 PC", summary: "最终幻想 7 重生 PC 版正式发售，Metacritic 评分 92。" },
      { date: "2023-12-07", title: "TGA 最佳 RPG 提名", summary: "FF7 重生获 TGA 年度游戏和最佳 RPG 提名。" },
    ],
  },

  "diablo-4": {
    ...getBaseGame("diablo-4", "暗黑破坏神 4", "2023-06-06",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/library_600x900.jpg",
      3.8, 86,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "暗黑破坏神 4 是 Blizzard Entertainment 开发的暗黑系列正统续作，回归系列黑暗血腥的根源。故事设定在暗黑破坏神 3 数十年后的庇护之地，莉莉丝——憎恨之王墨菲斯托的女儿——被召唤回这个世界。玩家将在广阔的开放世界中对抗地狱大军、收集传奇装备、解锁强大的技能与天赋。",
    gameplay: "俯视角等距 ARPG，五大职业——野蛮人、法师、德鲁伊、游侠、死灵法师各有独特机制。技能树+巅峰面板提供深度构筑空间。开放世界设计为系列首次，可无缝探索五大区域，世界 Boss 和地狱狂潮等公共事件随时触发。赛季模式每三个月刷新主题和机制，保持长期可玩性。",
    recommendation: "暗黑系列最黑暗、最宏大的一作。开放世界让庇护之地的探索感大幅提升，世界 Boss 战斗场面宏大。战斗的爽快感依旧是暗黑的核心——成群结队地消灭恶魔、收集传奇装备的循环令人上瘾。如果你是刷宝 ARPG 爱好者，D4 是当今最好的选择之一，且赛季模式持续注入新鲜血液。",
    developers: [{ id: 19, name: "Blizzard Entertainment" }],
    publishers: [{ id: 19, name: "Blizzard Entertainment" }],
    requirements: {
      minCpu: "Intel Core i5-2500K", minGpu: "NVIDIA GeForce GTX 660", minRamGB: 8, minVramGB: 2,
      recCpu: "Intel Core i7-8700K", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "暗黑系列回归黑暗根源，美术风格和氛围塑造出色。",
      "战斗爽快感依旧顶级，刷装备的循环令人沉迷。",
      "开放世界设计为系列注入新鲜感，世界 Boss 战壮观。",
      "赛季更新节奏良好，每个赛季都有新鲜内容。",
      "后期内容深度不足，装备系统有待打磨。",
      "Steam 版体验流畅，与战网版数据互通。",
    ],
    screenshots: steamScreenshots(2344520,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/library_600x900.jpg"
    ),
    news: [
      { date: "2024-10-07", title: "憎恨之躯扩展包上线", summary: "首个大型资料片带来新职业魂灵师、新区域纳汉图和 Mercenaries 系统。" },
      { date: "2024-05-14", title: "第四赛季大改版", summary: "全面重做装备系统，新增淬炼和精铸机制，广受好评。" },
    ],
  },

  "armored-core-6": {
    ...getBaseGame("armored-core-6", "装甲核心 6", "2023-08-25",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/library_600x900.jpg",
      4.4, 86,
      [{ id: 1, name: "动作", slug: "action" }, { id: 6, name: "射击", slug: "shooter" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "装甲核心 6: 境界天火 是 FromSoftware 开发的机甲动作游戏，是装甲核心系列时隔十年的重启之作。故事设定在未来星际文明中，玩家扮演一名强化人佣兵，驾驶巨大的机甲（AC）在星际企业战争中执行任务。游戏以其极致的机甲定制系统、高速的立体战斗和 FromSoftware 标志性的挑战性著称。",
    gameplay: "第三人称机甲动作射击，3D 空间中的高速立体战斗。组装系统是核心——头部、核心、手臂、腿部、推进器、武器等数十种部件可自由搭配，影响机动性、负重和火力。ACS 架势系统要求持续攻击以击晕敌人，然后释放高伤害追击。BOOST 机动允许空中冲刺和快速转向。",
    recommendation: "FromSoftware 的机甲魂——虽然没有魂系的体力条，但 Boss 战的挑战性和精致度完全不输艾尔登法环。组装一台属于自己的机甲，在 3D 弹幕中穿梭，击败巨型 Boss 的爽快感独一无二。如果你喜欢高达、EVA 或任何机甲题材，这是近年来最纯粹的机甲游戏体验。",
    developers: [{ id: 2, name: "FromSoftware" }],
    publishers: [{ id: 2, name: "Bandai Namco" }],
    requirements: {
      minCpu: "Intel Core i7-4790K", minGpu: "NVIDIA GeForce GTX 1650", minRamGB: 12, minVramGB: 4,
      recCpu: "Intel Core i7-7700", recGpu: "NVIDIA GeForce GTX 1060", recRamGB: 12, recVramGB: 6,
    },
    reviews: [
      "机甲定制的深度令人惊叹，数十种部件可创造无限组合。",
      "Boss 战设计一如既往的出色，3D 弹幕的压迫感十足。",
      "战斗速度快感极强，高速 BOOST 冲刺和火力全开的感觉无与伦比。",
      "剧情隐晦且主要通过简报传达，缺乏角色情感连接。",
      "操作门槛较高，需要掌握双持武器和四键操作。",
      "PC 版运行流畅，支持 120fps 的机甲战斗体验极佳。",
    ],
    screenshots: steamScreenshots(1888160,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/library_600x900.jpg"
    ),
    news: [
      { date: "2024-01-15", title: "销量突破 300 万", summary: "FromSoftware 宣布装甲核心 6 全球销量突破 300 万份。" },
      { date: "2023-12-07", title: "获 TGA 最佳动作游戏提名", summary: "装甲核心 6 在 TGA 2023 获最佳动作游戏提名。" },
    ],
  },

  "lies-of-p": {
    ...getBaseGame("lies-of-p", "匹诺曹的谎言", "2023-09-19",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/library_600x900.jpg",
      4.3, 80,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 11, name: "魂系", slug: "souls-like" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "匹诺曹的谎言 是韩国 Round8 Studio 开发的魂系动作 RPG，以卡洛·科洛迪的经典童话《木偶奇遇记》为背景进行黑暗改编。玩家扮演人偶 P，在被疯狂木偶和机械怪物占据的克拉特城中寻找吉佩托先生。游戏以其精美的美术风格、深度的武器组合系统和扎实的魂系战斗而受到好评。",
    gameplay: "经典的魂系第三人称动作，但加入了独特的武器组合系统——每把武器的刀刃和手柄可拆分重组，创造全新攻击模组。军团手臂提供钩索、电击、火焰喷射等辅助能力。谎言系统贯穿剧情——选择是否说谎影响结局和角色发展。格挡和闪避并重，Boss 战设计硬核而精致。",
    recommendation: "近年来最好的非 FromSoftware 魂系游戏。武器组合系统创意十足，让你可以打造专属的战斗风格。黑暗童话的美术风格独具魅力，克拉特城的每一个角落都笼罩在 Belle Époque 的诡异美学中。如果你通关了所有 FromSoftware 游戏依然饥渴，匹诺曹会给你惊喜。",
    developers: [{ id: 20, name: "Round8 Studio" }],
    publishers: [{ id: 20, name: "Neowiz" }],
    requirements: {
      minCpu: "Intel Core i3-6300", minGpu: "NVIDIA GeForce GTX 960", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-8700", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 6,
    },
    reviews: [
      "武器组合系统是最大的创新，刀刃+手柄的排列组合让人沉迷。",
      "美术风格独特，黑暗童话+蒸汽朋克的视觉表现力出色。",
      "Boss 战设计有水准，难度曲线合理。",
      "故事改编大胆，《木偶奇遇记》的黑暗扭曲版引人入胜。",
      "部分场景堆怪严重，体验不够流畅。",
      "格挡窗口比 FromSoftware 游戏更苛刻，学习成本高。",
    ],
    screenshots: steamScreenshots(1627720,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/library_600x900.jpg"
    ),
    news: [
      { date: "2024-07-05", title: "DLC 公布", summary: "Round8 公布续作及 DLC 计划，预计新增章节和武器。" },
      { date: "2024-02-15", title: "销量突破 100 万", summary: "Neowiz 宣布匹诺曹的谎言全球销量突破 100 万份。" },
    ],
  },

  "helldivers-2": {
    ...getBaseGame("helldivers-2", "地狱潜兵 2", "2024-02-08",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/library_600x900.jpg",
      4.4, 82,
      [{ id: 6, name: "射击", slug: "shooter" }, { id: 1, name: "动作", slug: "action" }],
      ["PC", "PlayStation 5"]
    ),
    description_raw: "地狱潜兵 2 是 Arrowhead Game Studios 开发的合作第三人称射击游戏。玩家扮演超级地球的精英士兵——地狱潜兵，被投放到异星战场对抗虫族 Terminids 和机械族 Automatons，用压倒性的火力为民主而战。游戏以其混乱搞笑的联机体验、战术火力和《星际战将》式的讽刺美学迅速成为现象级作品。",
    gameplay: "四人合作第三人称 PvE 射击，呼叫轨道空袭、500KG 炸弹和各式空投机甲是核心玩法。友军误伤永远开启——被队友的火力误杀是游戏体验的一部分。动态难度系统根据玩家表现调整敌人密度和强度。星球战争由全服玩家共同推进，银河系地图持续变化。不同星球有不同环境——丛林、沙漠、冰冻废土。",
    recommendation: "2024 年现象级联机游戏。和三个朋友一起降落在虫群星球上，呼叫轨道轰炸、被队友误杀、在混乱中笑到肚子疼——这就是 Helldivers 2。讽刺超级爱国主义的黑色幽默贯穿始终，让种族灭绝虫子变成了最搞笑的派对活动。如果你有固定联机小队，这是今年的必玩游戏。",
    developers: [{ id: 21, name: "Arrowhead Game Studios" }],
    publishers: [{ id: 7, name: "PlayStation PC" }],
    requirements: {
      minCpu: "Intel Core i7-4790K", minGpu: "NVIDIA GeForce GTX 1050 Ti", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-9700K", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "联机体验搞笑且混乱，友军误伤让每场战斗都充满戏剧性。",
      "轨道火力和空投机甲带来了无与伦比的战术爽感。",
      "讽刺性世界观和宣传片风格的幽默感贯穿始终。",
      "服务器初期不稳定，多次扩容后才改善。",
      "游戏循环略微重复，后期内容需要更多变化。",
      "与朋友联机的乐趣远大于单人，建议组队体验。",
    ],
    screenshots: steamScreenshots(553850,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/library_600x900.jpg"
    ),
    news: [
      { date: "2024-08-06", title: "自由升级大更新", summary: "新增更高难度等级、新敌人类型和社区挑战系统。" },
      { date: "2024-04-01", title: "销量突破 1200 万", summary: "Helldivers 2 成为 PlayStation 史上最畅销的 PC 首发游戏。" },
    ],
  },

  "dragons-dogma-2": {
    ...getBaseGame("dragons-dogma-2", "龙之信条 2", "2024-03-22",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2054970/library_600x900.jpg",
      3.8, 86,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "龙之信条 2 是 Capcom 开发的动作角色扮演游戏，是 2012 年经典作品的续作。玩家扮演被巨龙夺走心脏的觉醒者，与随从 Pawn 一同在广阔的幻想世界中冒险。游戏以其独特的攀爬大型怪物机制、创新的随从系统和动态的世界事件而闻名。",
    gameplay: "第三人称开放世界 ARPG，标志性的攀爬大型敌人系统——可抓住狮鹫飞到空中、爬上独眼巨人头部攻击弱点。九种职业涵盖战士、法师、弓箭手等基础职业及魔剑士、幻术师等上级职业。随从 Pawn 系统允许玩家自创 AI 同伴，且可借用其他玩家的随从。动态世界包括昼夜变化影响敌人分布、随机遭遇大型怪物。",
    recommendation: "Capcom 最具野心的 RPG，攀爬巨兽的战斗方式独一无二——抓住狮鹫的脚飞上天空，在龙的背上砍下致命一击。随从系统和职业切换让每次冒险都有新鲜感。虽然 PC 版初期优化存在问题，但游戏的核心玩法无可替代。",
    developers: [{ id: 9, name: "Capcom" }],
    publishers: [{ id: 9, name: "Capcom" }],
    requirements: {
      minCpu: "Intel Core i5-10600", minGpu: "NVIDIA GeForce GTX 1070", minRamGB: 16, minVramGB: 8,
      recCpu: "Intel Core i7-10700", recGpu: "NVIDIA GeForce RTX 2080", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "攀爬大型怪物的战斗体验独一无二，极具震撼力。",
      "随从 Pawn 系统深度进化，AI 同伴的行为更加智能。",
      "动态世界事件和昼夜系统让探索充满意外惊喜。",
      "PC 版优化存在严重问题，大幅影响了首发体验。",
      "主线剧情较薄弱，叙事驱动力不足。",
      "职业系统丰富，每个职业都有独特的战斗风格。",
    ],
    screenshots: steamScreenshots(2054970,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2054970/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2054970/library_600x900.jpg"
    ),
    news: [
      { date: "2024-09-17", title: "大型更新改善性能", summary: "Capcom 发布更新大幅提升 PC 版帧率和稳定性，追加休闲模式。" },
      { date: "2024-06-01", title: "DLC 开发确认", summary: "Capcom 确认正在开发龙之信条 2 的大型扩展内容。" },
    ],
  },

  "persona-5-royal": {
    ...getBaseGame("persona-5-royal", "女神异闻录 5 皇家版", "2022-10-21",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/library_600x900.jpg",
      4.7, 95,
      [{ id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 5, name: "策略", slug: "strategy" }],
      ["PC", "PlayStation 5", "Nintendo Switch", "Xbox Series X"]
    ),
    description_raw: "女神异闻录 5 皇家版 是 Atlus 开发的日式角色扮演游戏，是 P5 的终极加强版。玩家扮演转学到东京秀尽学园的高中生 Joker，白天体验校园生活和社交模拟，夜晚潜入异世界殿堂，化身心之怪盗团偷走扭曲大人心中的欲望。游戏以其时尚的 UI 设计、深刻的角色塑造和爵士融合配乐被广泛赞誉为史上最佳 JRPG 之一。",
    gameplay: "日式 RPG 分为日常社交和迷宫战斗两部分。白天在东京度过校园生活——上课、打工、与信赖伙伴建立羁绊，每个羁绊对应塔罗牌 Arcana，解锁强力技能和剧情。夜晚潜入宫殿进行回合制战斗，利用属性弱点和 1 MORE 追击系统最大化输出。总攻击和 ShowTime 合体技演出华丽。时间管理系统要求玩家高效规划每一天。",
    recommendation: "史上评分最高的 JRPG 之一——时尚的 UI 在你眼前爆炸，酸爵士配乐让你不自觉摇摆，每一个信赖伙伴的成长故事都让人热泪盈眶。100+ 小时的冒险中，东京的每一个街角都散发着独特魅力。即使从没玩过 JRPG，P5R 也是入门的不二之选。Take your heart。",
    developers: [{ id: 22, name: "Atlus" }],
    publishers: [{ id: 22, name: "SEGA" }],
    requirements: {
      minCpu: "Intel Core i7-4790", minGpu: "NVIDIA GeForce GTX 760", minRamGB: 8, minVramGB: 2,
      recCpu: "Intel Core i7-4790", recGpu: "NVIDIA GeForce GTX 760", recRamGB: 8, recVramGB: 2,
    },
    reviews: [
      "史上最时尚的游戏 UI，每一帧都是平面设计的教科书。",
      "角色塑造深刻动人，每个队友的成长故事都催人泪下。",
      "酸爵士配乐是游戏史上最棒的 OST 之一。",
      "100+ 小时的流程虽长但沉浸感十足。",
      "迷宫后期重复度较高，战斗节奏拖沓。",
      "PC 版锁 60fps 略显遗憾，但画面表现依然出色。",
    ],
    screenshots: steamScreenshots(1687950,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/library_600x900.jpg"
    ),
    news: [
      { date: "2024-06-08", title: "Persona 6 传闻四起", summary: "Atlus 域名注册信息暗示 Persona 6 即将正式公布。" },
      { date: "2023-11-17", title: "Persona 3 Reload 发售", summary: "P3 重制版正式发售，Metacritic 87 分，首周破百万。" },
    ],
  },

  "ac-valhalla": {
    ...getBaseGame("ac-valhalla", "刺客信条: 英灵殿", "2020-11-10",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/library_600x900.jpg",
      4.0, 83,
      [{ id: 1, name: "动作", slug: "action" }, { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }, { id: 10, name: "开放世界", slug: "open-world" }],
      ["PC", "PlayStation 5", "Xbox Series X"]
    ),
    description_raw: "刺客信条: 英灵殿 是 Ubisoft 开发的刺客信条系列作品，以公元 9 世纪的北欧维京时代为背景。玩家扮演维京掠夺者艾沃尔，带领族人离开饱受战乱的挪威，前往英格兰建立新的定居点。游戏融合了壮阔的北欧神话、残酷的维京战斗和系列经典的潜行暗杀机制。",
    gameplay: "第三人称开放世界 RPG，战斗风格强调双持武器的重击感——可双持战斧、大盾甚至双盾。劫掠系统允许带领长船突袭英格兰修道院和城堡。定居点建设是核心系统，通过升级铁匠铺、军营等设施解锁新能力。维京盛宴和饮酒小游戏增添了文化沉浸感。奥丁之眼取代传统鹰眼，神话线可探索阿斯加德。",
    recommendation: "刺客信条系列最宏大的开放世界之一——从挪威的冰雪峡湾到英格兰的翠绿丘陵，维京时代的历史感扑面而来。双持武器的战斗手感沉重有力，劫掠修道院的爽快感十足。如果你是维京文化爱好者，这趟从挪威到英格兰的史诗旅程值得投入。",
    developers: [{ id: 23, name: "Ubisoft" }],
    publishers: [{ id: 23, name: "Ubisoft" }],
    requirements: {
      minCpu: "Intel Core i5-4460", minGpu: "NVIDIA GeForce GTX 960", minRamGB: 8, minVramGB: 4,
      recCpu: "Intel Core i7-4790", recGpu: "NVIDIA GeForce RTX 2060", recRamGB: 16, recVramGB: 8,
    },
    reviews: [
      "维京时代的沉浸感极强，挪威峡湾的风景令人叹为观止。",
      "双持武器战斗沉重有力，不同武器组合有独特的战斗体验。",
      "定居点系统增加了归属感，看着家园逐渐发展很有成就感。",
      "流程过于冗长，主线+支线超 100 小时容易疲劳。",
      "神话线探索阿斯加德是游戏最美妙的章节。",
      "Steam 版支持成就，终于告别了育碧启动器困扰。",
    ],
    screenshots: steamScreenshots(2208920,
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/library_hero.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/library_600x900.jpg"
    ),
    news: [
      { date: "2024-05-15", title: "刺客信条: 暗影公布", summary: "育碧公布日本背景刺客信条新作，背景设定在封建日本，双主角系统。" },
      { date: "2023-12-06", title: "英灵殿最终更新", summary: "育碧发布英灵殿最后一次内容更新，为艾沃尔的旅程画上句号。" },
    ],
  },
};

function steamScreenshots(appId: number, heroImage: string, coverImage: string): string[] {
  const base = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}`;
  // Diverse images per game: different aspect ratios, angles, crops
  return [
    heroImage,                                    // wide hero banner
    `${base}/header.jpg`,                         // horizontal header
    `${base}/capsule_616x353.jpg`,                // medium capsule
    coverImage,                                   // tall cover
    `${base}/hero_capsule.jpg`,                   // extra wide hero
    `${base}/page_bg_generated_v4b.jpg`,          // full-width background
    `${base}/capsule_467x181.jpg`,                // wide capsule
    `${base}/capsule_231x87.jpg`,                 // small capsule (looks different)
  ];
}

function getBaseGame(
  slug: string, name: string, released: string, background_image: string,
  rating: number, metacritic: number,
  genres: { id: number; name: string; slug: string }[],
  platformNames: string[]
): Game {
  return {
    id: Math.abs(slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0)),
    slug, name, released, background_image, rating, metacritic,
    hero_image: background_image.replace('library_600x900.jpg', 'library_hero.jpg'),
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
  return MOCK_GAME_DETAILS[slug];
}

export function getGameRequirements(slug: string): GameRequirements | undefined {
  return MOCK_GAME_DETAILS[slug]?.requirements;
}
