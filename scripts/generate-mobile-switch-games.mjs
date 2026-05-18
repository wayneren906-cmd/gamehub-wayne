import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "content", "games");

const GAMES = [
  {
    id: 31,
    slug: "zelda-breath-of-the-wild",
    name: "塞尔达传说：旷野之息",
    released: "2017-03-03",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
    hero_image: "",
    rating: 4.9,
    metacritic: 97,
    genres: [
      { id: 3, name: "冒险", slug: "adventure" },
      { id: 1, name: "动作", slug: "action" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone 10+" },
    description_raw: "在任天堂 Switch 首发护航大作中，玩家扮演从百年沉睡中苏醒的林克，探索被灾厄盖侬毁灭的海拉鲁王国。游戏彻底重构了塞尔达系列的线性传统，呈现出开放世界游戏的新范式——每座山都能攀爬，每片区域都有秘密等待发现。物理引擎驱动下的火、冰、电、风交互系统，让玩家的创造力成为探索的唯一限制。",
    developers: [{ id: 50, name: "Nintendo EPD" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "开放世界探索为核心——没有固定的攻略顺序，离开初始高地后整个世界都是你的。攀爬、滑翔、骑马横穿广袤海拉鲁。120 个神庙谜题散落各地，考验物理与逻辑。天气系统影响攀爬、视野和元素反应。武器耐久系统迫使玩家不断尝试新装备。烹饪系统将野外采集的食材转化为增益效果。",
    recommendation: "不只是 Switch 必入之作，更是电子游戏史上最具影响力的开放世界之一。任天堂用看似简单的物理引擎构建了无穷的玩法可能性。每一次游玩都会发现新的惊喜。97 分的 Metacritic 评分，名副其实的传世经典。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "开放世界设计的巅峰之作，自由的探索感无与伦比。",
      "物理引擎的交互深度令人惊叹，每次游玩都有新发现。",
      "美术风格绝美，吉卜力式的海拉鲁让人流连忘返。",
      "神庙解谜精巧有趣，120 个各不重样。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 32,
    slug: "mario-odyssey",
    name: "超级马里奥：奥德赛",
    released: "2017-10-27",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero",
    hero_image: "",
    rating: 4.8,
    metacritic: 97,
    genres: [
      { id: 4, name: "平台", slug: "platformer" },
      { id: 3, name: "冒险", slug: "adventure" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone 10+" },
    description_raw: "马力欧再次踏上了拯救桃花公主的旅程——但这次他有了新伙伴「凯皮」。玩家将乘坐奥德赛号飞船周游世界，从繁华的纽顿市到神秘的遗忘之国，每个王国都是一座精心设计的箱庭游乐场。凯皮的「附身」能力让马力欧可以操控敌人和物体，彻底改变了平台跳跃的核心玩法。",
    developers: [{ id: 51, name: "Nintendo EPD" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "3D 平台跳跃的集大成者。每个王国是一个开放箱庭，藏有数十个月亮收集品。凯皮的附身能力让马力欧可以变身为霸王龙、电线、坦克、青蛙等数十种形态。帽子投掷既是攻击手段也是移动工具——踩帽跳、弹墙跳等高阶技巧提供了极高操作上限。双人模式下第二位玩家可操控凯皮辅助。",
    recommendation: "马力欧 3D 系列的巅峰之作，将探索、收集与操作乐趣完美调和。每个王国都充满创意和惊喜——从纽顿市的音乐节到料理国度的美食之旅。无论是追求全收集的硬核玩家还是只想轻松体验的休闲玩家，奥德赛都能满足你。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "箱庭设计的教科书，每个王国都充满创意和惊喜。",
      "凯皮附身系统极大丰富了玩法，每次变身都新鲜感十足。",
      "操作手感丝滑流畅，马力欧的动作响应无可挑剔。",
      "月亮收集设计巧妙，从简单到硬核都有覆盖。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 33,
    slug: "pokemon-scarlet-violet",
    name: "宝可梦 朱/紫",
    released: "2022-11-18",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/p/pokemon-scarlet-switch/hero",
    hero_image: "",
    rating: 3.8,
    metacritic: 72,
    genres: [
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" },
      { id: 3, name: "冒险", slug: "adventure" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone" },
    description_raw: "宝可梦系列首个真正意义上的开放世界作品。玩家将以帕底亚地区的学生身份，自由选择三条故事线——道馆挑战、传说之路和星尘之路。新增的「太晶化」战斗机制让每只宝可梦都能改变自身属性，带来前所未有的对战策略深度。",
    developers: [{ id: 52, name: "Game Freak" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "完全开放世界——三条主线可按任意顺序推进。野外宝可梦全明雷显示，无需进入战斗即可观察。太晶化系统让宝可梦属性临时改变，对战策略性极大提升。Let's Go 功能让宝可梦自动战斗刷经验。联机模式下可与好友一起探索帕底亚。新增 100+ 只全新宝可梦。",
    recommendation: "尽管发售初期因性能问题饱受批评，但朱紫的核心设计是宝可梦系列最具革新意义的一代。开放世界的自由感、三条故事线的叙事尝试、太晶化的战术深度都值得肯定。如果能接受技术层面的不完美，这是近年来最好玩的宝可梦游戏。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "开放世界宝可梦的梦想终于实现，探索自由度极高。",
      "故事线感人至深，角色塑造是系列最佳。",
      "性能表现堪忧，掉帧和BUG影响体验。",
      "太晶化对战系统设计精妙，战术深度远超预期。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 34,
    slug: "splatoon-3",
    name: "喷射战士 3",
    released: "2022-09-09",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
    hero_image: "",
    rating: 4.3,
    metacritic: 83,
    genres: [
      { id: 5, name: "射击", slug: "shooter" },
      { id: 1, name: "动作", slug: "action" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone 10+" },
    description_raw: "任天堂最具创意的第三人称射击游戏系列第三作。在蛮颓镇——一个废土风格的新城市中，乌贼与章鱼们的对战更加激烈。新增「斯普拉遁」单人战役模式、新武器类型「猎鱼弓」和「刮水刀」，以及全新的卡牌对战小游戏。",
    developers: [{ id: 51, name: "Nintendo EPD" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "4v4 领地争夺为核心——用墨水涂满地面比击杀更重要。可在墨水中潜行游动，恢复弹药的同时高速位移。武器类型丰富：射枪、滚筒、画笔、桶、弓、双枪等各具特色。每赛季新增装备和地图，保持对战新鲜感。打工模式提供 PvE 合作体验。",
    recommendation: "任天堂最潮最酷的多人射击游戏，将色彩、音乐与竞技完美融合。没有传统射击游戏的暴力和血腥，取而代之的是街头文化和创意表达。无论你是休闲玩家还是竞技爱好者，都能在涂地大战中找到乐趣。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "墨水机制创新十足，涂地玩法比击杀更有深度。",
      "音乐和美术风格独树一帜，潮流感拉满。",
      "联机体验流畅，匹配速度快。",
      "单人战役内容丰富，关卡设计巧妙。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 35,
    slug: "animal-crossing-new-horizons",
    name: "集合啦！动物森友会",
    released: "2020-03-20",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero",
    hero_image: "",
    rating: 4.5,
    metacritic: 90,
    genres: [
      { id: 6, name: "模拟", slug: "simulation" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone" },
    description_raw: "移居无人岛，开始全新的慢生活。从一顶帐篷开始，逐步将荒岛建设成理想中的家园。钓鱼、捕虫、挖化石、种花、装修房屋——一切按你的节奏来。与性格各异的动物邻居建立友谊，在四季更替中感受时光的温柔流淌。",
    developers: [{ id: 51, name: "Nintendo EPD" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "真实时间同步——游戏内时间与现实一致，节日和季节同步。岛屿建设自由度高：地形改造、河流改道、悬崖搭建。家具 DIY 系统让你亲手打造岛上的一切。博物馆收集是长期目标——鱼类、昆虫、化石、艺术品四大类。联机访问好友岛屿，交换物品互相帮助。",
    recommendation: "在忙碌的生活中，动森提供了一方宁静的虚拟天地。没有压力、没有 deadline，只有四季轮转和动物邻居的温暖问候。2020 年疫情期间成为全球玩家的精神避难所，至今仍是 Switch 上最治愈的游戏。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "治愈系神作，在岛上度过的每一分钟都是享受。",
      "自定义内容丰富，岛屿设计是无限创意的画布。",
      "真实时间机制让游戏充满仪式感。",
      "联机玩法拉满社交乐趣。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 36,
    slug: "metroid-prime-remastered",
    name: "银河战士究极复刻",
    released: "2023-02-08",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/m/metroid-prime-remastered-switch/hero",
    hero_image: "",
    rating: 4.6,
    metacritic: 94,
    genres: [
      { id: 1, name: "动作", slug: "action" },
      { id: 3, name: "冒险", slug: "adventure" },
      { id: 5, name: "射击", slug: "shooter" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "被广泛认为是有史以来最伟大的游戏之一的华丽复刻。萨姆斯·阿兰首次以第一人称视角探索神秘的外星世界 Tallon IV。重制版保留了原版精妙的关卡设计和孤绝的氛围感，同时以全新的高清画面、现代化双摇杆操控和重制音轨让经典重生。",
    developers: [{ id: 53, name: "Retro Studios" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "第一人称探索冒险——不是传统射击游戏，而是「第一人称银河城」。扫描面罩是核心机制：扫描环境中一切物体获取信息和弱点。逐步获得新能力（变形球、导弹、热成像面罩等），解锁之前无法到达的区域。Boss 战强调观察与策略，而非纯粹火力。",
    recommendation: "游戏史上不朽的杰作，证明了第一人称视角同样可以做出完美的银河城体验。孤身一人在外星世界探索的沉浸感无与伦比。复刻版的画面升级让这部 2002 年的经典在 2023 年看起来毫不违和。94 分——这就是 Metroid Prime 的分量。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "第一人称银河城的完美演绎，探索感无与伦比。",
      "氛围营造大师级，孤绝的外星世界令人沉浸。",
      "复刻画面精美，现代操控让旧作焕发新生。",
      "关卡设计经得起时间的考验。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 37,
    slug: "xenoblade-chronicles-3",
    name: "异度神剑 3",
    released: "2022-07-29",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/x/xenoblade-chronicles-3-switch/hero",
    hero_image: "",
    rating: 4.5,
    metacritic: 89,
    genres: [
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" },
      { id: 1, name: "动作", slug: "action" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "在永恒的战争中，六名来自敌对阵营的年轻士兵意外走到了一起，踏上了寻找「真正敌人」的旅程。Monolith Soft 打造的宏大 RPG 三部曲终章，将系列标志性的广阔开放世界、深奥战斗系统和哲思叙事推向新的高度。",
    developers: [{ id: 54, name: "Monolith Soft" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "即时制战斗融合深度策略——每名角色可在多个职业间切换，战斗中可随时更换。队伍 6 人同时参战，通过「灵魂连结」系统实现连锁攻击。探索广阔无缝的 Aionios 世界，每个区域都有独特生态系统。支线任务和英雄故事极丰富，通关后内容超过 100 小时。",
    recommendation: "Switch 上最宏大的 JRPG 体验之一。战斗系统深不可测，职业搭配的乐趣足以让你沉迷数十个小时。故事从战争的残酷切入，逐渐展开对生命意义的思考——这是一部敢于提出深刻问题的作品。如果你热爱日式 RPG，异度神剑 3 不容错过。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "JRPG 的巅峰之作，战斗系统深奥且上瘾。",
      "故事立意深刻，对生命与战争的探讨令人动容。",
      "开放世界规模惊人，探索感极佳。",
      "职业自由切换让队伍配置充满可能性。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 38,
    slug: "fire-emblem-engage",
    name: "火焰纹章 Engage",
    released: "2023-01-20",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/f/fire-emblem-engage-switch/hero",
    hero_image: "",
    rating: 4.1,
    metacritic: 80,
    genres: [
      { id: 7, name: "策略", slug: "strategy" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "火焰纹章系列最新作，集系列历代英雄于一身的豪华庆典。通过「纹章士」戒指召唤马尔斯、赛莉卡、西格尔特等过往主角的力量，与全新角色神龙「琉尔」一同对抗邪龙。经典战棋玩法与华丽 3D 动画的完美结合。",
    developers: [{ id: 55, name: "Intelligent Systems" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "经典回合制战棋——网格地图上指挥各单位移动、攻击和使用技能。纹章士戒指是核心创新：装备后可使用该角色专属技能和「结合」大招。武器三角克制回归——剑>斧>枪>剑。角色养成系统深入，可自由定制职业和技能组合。永久死亡模式可选，增加战棋紧张感。",
    recommendation: "火纹系列 30 周年纪念性质的集大成之作。纹章士系统让历代角色同台演出，老粉的情怀满载。虽然剧情相比《风花雪月》略显简单，但战棋玩法本身更加纯粹和精炼。如果你是战棋爱好者，Engage 的战斗设计依然是业界顶级。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "战棋玩法依旧是业界天花板。",
      "纹章士召唤系统情怀满满又富有策略性。",
      "3D 战斗动画华丽，演出效果出色。",
      "剧情相对平淡，角色塑造不如前作。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 39,
    slug: "pikmin-4",
    name: "皮克敏 4",
    released: "2023-07-21",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/p/pikmin-4-switch/hero",
    hero_image: "",
    rating: 4.4,
    metacritic: 87,
    genres: [
      { id: 7, name: "策略", slug: "strategy" },
      { id: 3, name: "冒险", slug: "adventure" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone 10+" },
    description_raw: "指挥可爱的皮克敏生物探索神秘星球、收集宝物、对抗原生生物的即时策略游戏。第四代新增了太空犬「欧庆」和夜间探险模式，大幅降低了新手上手门槛。宫本茂的创意结晶，将微观世界探索与时间管理策略完美融合。",
    developers: [{ id: 51, name: "Nintendo EPD" }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "实时策略与探索——指挥皮克敏搬运、战斗、建造和开路。不同颜色皮克敏各有特性：红色耐火、蓝色游泳、黄色导电、紫色力大。欧庆犬可驮着主角和皮克敏快速移动，也能冲撞敌人。当多利挑战是限时策略关卡，考验效率最大化。日夜循环：白天探索收集，夜晚防守基地。",
    recommendation: "皮克敏 4 是系列中新人最容易上手的一代。可爱的美术风格下是扎实策略深度——如何高效分配皮克敏、优化路线、在日落前完成任务都需要精心规划。任天堂独创的「微观世界管理」玩法至今无人复制。87 分，值得每一位策略游戏爱好者尝试。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "微观世界探索充满童趣与策略。",
      "欧庆的加入让探索更加流畅有趣。",
      "当多利挑战的限时规划考验性十足。",
      "入门门槛大幅降低，新人友好。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 40,
    slug: "super-smash-bros-ultimate",
    name: "任天堂明星大乱斗 特别版",
    released: "2018-12-07",
    background_image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/hero",
    hero_image: "",
    rating: 4.7,
    metacritic: 93,
    genres: [
      { id: 8, name: "格斗", slug: "fighting" },
      { id: 1, name: "动作", slug: "action" }
    ],
    platforms: [
      { platform: { id: 7, name: "Nintendo Switch", slug: "nintendo-switch" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone 10+" },
    description_raw: "游戏史上最盛大的跨界作品——89 名来自任天堂及第三方经典角色的全明星格斗盛宴。马力欧、林克、皮卡丘、索尼克、斯内克、克劳德……所有斗士悉数回归。不论你是派对游戏玩家还是竞技格斗高手，大乱斗都能让你热血沸腾。",
    developers: [{ id: 56, name: "Bandai Namco" }, { id: 57, name: "Sora Ltd." }],
    publishers: [{ id: 50, name: "Nintendo" }],
    tags: [],
    gameplay: "平台格斗——不是传统格斗游戏的体力制，而是将对手击飞出屏幕为目标。伤害越高越容易被击飞，创造了独特的逆转与翻盘体验。89 名斗士各有完全不同的招式体系。单人「灯火之星」冒险模式提供数十小时内容。支持本地 8 人对战和在线匹配。",
    recommendation: "这不仅仅是一款格斗游戏——它是电子游戏史的活博物馆。89 名斗士、100+ 场地、900+ 首音乐，体量之庞大令人咋舌。无论你是约上三五好友开派对，还是独自挑战在线对战，大乱斗都能提供顶级的娱乐体验。Switch 必入之作。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "游戏史上最宏大的跨界合作，角色阵容无可匹敌。",
      "上手简单但深度惊人，易学难精的格斗设计。",
      "灯火之星冒险模式满满的情怀。",
      "本地多人派对效果极佳。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 41,
    slug: "genshin-impact",
    name: "原神",
    released: "2020-09-28",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1905820/library_600x900.jpg",
    hero_image: "",
    rating: 4.3,
    metacritic: 84,
    genres: [
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" },
      { id: 3, name: "冒险", slug: "adventure" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} },
      { platform: { id: 2, name: "PlayStation 5", slug: "playstation-5" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "米哈游打造的开放世界动作 RPG 现象级作品。在提瓦特大陆上，你将作为「旅行者」穿越七国，寻找失散的亲人。游戏以免费游玩+抽卡付费模式运营，凭借顶级的二次元美术、元素反应战斗系统和持续高质量内容更新，成为全球最成功的国产游戏。",
    developers: [{ id: 58, name: "HoYoverse" }],
    publishers: [{ id: 58, name: "HoYoverse" }],
    tags: [],
    gameplay: "四人小队实时切换战斗——七种元素（火水风雷冰草岩）间的反应是战斗核心。开放世界探索：攀爬、滑翔、游泳无体力限制。每六周一次大版本更新，持续新增地图、角色和剧情。深境螺旋是核心终局挑战。角色通过抽卡获得，0 氪也可体验全部剧情和开放世界。",
    recommendation: "不只是「国产塞尔达」——原神已经成长为一个现象级的跨平台游戏生态。顶级的二次元美术、持续进化的开放世界、深度的元素战斗系统，以及每六周稳定更新的内容量，让这款游戏持续吸引着全球数千万玩家。如果你能接受抽卡模式，提瓦特大陆值得你投入时间。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "二次元美术天花板，每帧都是壁纸。",
      "元素反应系统深度与爽感兼备。",
      "持续更新内容量惊人，地图每一版都在进步。",
      "抽卡机制对免费玩家不太友好。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 42,
    slug: "honkai-star-rail",
    name: "崩坏：星穹铁道",
    released: "2023-04-26",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2183820/library_600x900.jpg",
    hero_image: "",
    rating: 4.4,
    metacritic: 80,
    genres: [
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" },
      { id: 7, name: "策略", slug: "strategy" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "HoYoverse 出品的太空科幻题材回合制 RPG。玩家将乘坐「星穹列车」穿梭于群星之间，探索不同星球上的文明与危机。继承了崩坏系列的优秀叙事基因，配合高速回合制战斗和箱庭探索，开创了国产回合制手游的新标杆。",
    developers: [{ id: 58, name: "HoYoverse" }],
    publishers: [{ id: 58, name: "HoYoverse" }],
    tags: [],
    gameplay: "高速回合制战斗——角色按速度属性排序行动，必杀技可插入任意时机释放。击破弱点（属性克制）造成额外伤害和推条效果。箱庭式地图探索，每个星球有独特主题。模拟宇宙和忘却之庭是核心终局模式。遗器（装备）刷取是养成核心。持续更新主线剧情和新星球。",
    recommendation: "如果说原神是 HoYoverse 的动作 RPG 巅峰，星穹铁道就是他们对经典 JRPG 的致敬。出色的剧本、全语音演出、高速爽快的回合战斗——它证明了回合制在移动端同样可以做出令人上瘾的深度。科幻迷和 JRPG 爱好者都不应错过。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "剧本和角色塑造是一流水准。",
      "回合制战斗爽快且策略性强。",
      "科幻世界观设定新颖有趣。",
      "后期内容消耗较快，长草期明显。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 43,
    slug: "zenless-zone-zero",
    name: "绝区零",
    released: "2024-07-04",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2934780/library_600x900.jpg",
    hero_image: "",
    rating: 4.2,
    metacritic: 78,
    genres: [
      { id: 1, name: "动作", slug: "action" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "HoYoverse 带来的都市潮酷动作 RPG。故事发生在被神秘灾害「空洞」侵袭的末日都市新艾利都，玩家作为「绳匠」引导代理人深入空洞探索。游戏以街头涂鸦风格、快节奏连携战斗和 Roguelike 探索为核心，走出了与崩坏和原神截然不同的风格路线。",
    developers: [{ id: 58, name: "HoYoverse" }],
    publishers: [{ id: 58, name: "HoYoverse" }],
    tags: [],
    gameplay: "三人小队快节奏即时战斗——通过极限闪避和弹反触发「连携技」造成巨额伤害。探索采用 Roguelike 走格子模式，不同选择带来不同路线和增益。邦布（宠物）可为队伍提供增益和额外攻击。音擎和驱动盘是主要养成系统。空洞探索设计融合了随机性和策略选择。",
    recommendation: "绝区零是 HoYoverse 最具风格化的作品——街头涂鸦美术、潮酷角色设计、动感电子音乐构建出独一无二的氛围。快节奏的连携战斗爽快感十足，Roguelike 探索增加了随机乐趣。如果你想体验一款「不一样」的 HoYoverse 游戏，绝区零值得一试。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "美术和音乐风格极具辨识度，潮流感满分。",
      "连携战斗快感十足，打击反馈出色。",
      "Roguelike 走格子探索有新意。",
      "日常玩法重复度偏高。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 44,
    slug: "arknights",
    name: "明日方舟",
    released: "2019-05-01",
    background_image: "https://media-cn.arknights.top/uploads/2024/04/arknights-cover.jpg",
    hero_image: "",
    rating: 4.5,
    metacritic: 0,
    genres: [
      { id: 7, name: "策略", slug: "strategy" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "鹰角网络出品的塔防策略手游。在末日废土风格的泰拉大陆上，你作为「博士」指挥拥有各种特殊能力的「干员」们，通过精妙的阵型部署阻挡敌人的进攻。独特的机能风美术、深度的塔防策略和海量的剧情文本使其在二次元手游中独树一帜。",
    developers: [{ id: 59, name: "Hypergryph" }],
    publishers: [{ id: 59, name: "Hypergryph" }],
    tags: [],
    gameplay: "塔防策略为核心——在高台和地面部署干员阻挡敌人。每个干员有独特技能和模板，组合搭配极为重要。关卡设计精妙，从简单阻挡到复杂的多路防守和机制 BOSS。集成战略（Roguelike）和危机合约（高难挑战）提供丰富终局内容。主线剧情量巨大，世界观设定极为详尽。",
    recommendation: "明日方舟是二次元手游中策略深度的标杆。如果你喜欢塔防和策略游戏，方舟的关卡设计会让你沉迷——每一关都像是一道精妙的谜题。庞大的世界观和阴郁的机能美术风格也让它在一众亮色系二次元游戏中格外突出。不追求战力碾压，而是用脑子过关——这就是方舟的魅力。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "塔防策略深度极高，关卡设计精妙。",
      "机能风美术独树一帜，角色设计高级感十足。",
      "世界观和剧情文本量巨大，暗黑叙事有深度。",
      "对新手学习曲线较陡，需要看攻略。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 45,
    slug: "honor-of-kings",
    name: "王者荣耀",
    released: "2015-11-26",
    background_image: "https://img.iesdouyin.com/raw/king-of-glory-cover.jpg",
    hero_image: "",
    rating: 4.1,
    metacritic: 0,
    genres: [
      { id: 9, name: "MOBA", slug: "moba" },
      { id: 1, name: "动作", slug: "action" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "中国最受欢迎的手游 MOBA，日活用户过亿。5v5 三路对战，选择超过 100 名来自中国历史和神话的英雄，与队友配合摧毁敌方水晶。相比端游 MOBA，王者荣耀主打快节奏——每局约 15 分钟，技能流畅度、打击感和社交系统均针对移动端深度优化。",
    developers: [{ id: 60, name: "TiMi Studio Group" }],
    publishers: [{ id: 60, name: "Tencent" }],
    tags: [],
    gameplay: "5v5 三路推塔——选择英雄走对应分路（对抗路、发育路、中路、打野、辅助）。推塔、拿龙、团战，最终摧毁敌方水晶获得胜利。英雄定位分明：坦克、战士、刺客、法师、射手、辅助。排位系统从青铜到荣耀王者。装备在局内购买，每局从零开始。社交系统强大：组队开黑、战队、亲密关系。",
    recommendation: "王者荣耀是中国手游市场不可撼动的王者。快节奏、低门槛、强社交——它精准击中了移动端 MOBA 的痛点。虽然社区环境偶有争议，但从纯粹的竞技体验和操作手感来看，它依然是移动端 MOBA 的天花板。如果你想找一款和朋友一起开黑的手游，王者是最稳妥的选择。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "移动端 MOBA 的天花板，操作流畅度极高。",
      "社交系统强大，和朋友开黑乐趣无穷。",
      "英雄设计多样，总有适合你的角色。",
      "匹配环境参差不齐，偶有消极游戏行为。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 46,
    slug: "game-for-peace",
    name: "和平精英",
    released: "2019-05-08",
    background_image: "https://img.pubgmobile.com/cover/game-for-peace.jpg",
    hero_image: "",
    rating: 4.0,
    metacritic: 0,
    genres: [
      { id: 5, name: "射击", slug: "shooter" },
      { id: 10, name: "大逃杀", slug: "battle-royale" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "腾讯光子工作室打造的战术竞技手游，PUBG 正版授权。100 名玩家从飞机上跳伞降落到 8x8km 大地图中，搜集武器物资、驾驶载具、在缩圈压力下生存到最后。凭借出色的枪械手感、广阔的战术选择和持续的模式创新，成为中国最受欢迎的射击手游。",
    developers: [{ id: 61, name: "Lightspeed Studios" }],
    publishers: [{ id: 60, name: "Tencent" }],
    tags: [],
    gameplay: "百人战术竞技——跳伞选择落点，搜刮武器、防具和物资，在不断缩小的安全区内成为最后存活者。枪械种类丰富，配件系统影响武器手感。载具、投掷物、地形掩体提供丰富战术选择。除经典模式外还有团队竞技、地铁逃生等衍生模式。高画质下光影和场景细节出色。",
    recommendation: "如果你想在手机上体验最接近端游的战术竞技体验，和平精英是唯一的选择。枪械手感、地图设计和战术深度在移动端无出其右。丰富的模式和持续的赛季更新让它保持了长期吸引力。尽管对新手枪法有一定门槛，但团队配合可以弥补个人技术的不足。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "移动端战术竞技标杆，枪械手感出色。",
      "地图设计优秀，战术选择丰富。",
      "画质在移动端属顶级水平。",
      "氪金皮肤不影响平衡性，值得好评。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 47,
    slug: "honkai-impact-3rd",
    name: "崩坏 3",
    released: "2016-10-14",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1671200/library_600x900.jpg",
    hero_image: "",
    rating: 4.3,
    metacritic: 0,
    genres: [
      { id: 1, name: "动作", slug: "action" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "米哈游的成名之作，也是国产二次元动作手游的开创者。玩家扮演女武神「琪亚娜」等人，在崩坏侵蚀的世界中战斗。极致爽快的连招动作系统、精美的角色设计和宏大的崩坏系列世界观使其持续运营近十年仍然活力不减。",
    developers: [{ id: 58, name: "HoYoverse" }],
    publishers: [{ id: 58, name: "HoYoverse" }],
    tags: [],
    gameplay: "三人小队高速动作战斗——QTE 换人连击是战斗核心。每个女武神（角色）有独特的攻击模组和必杀技。极限闪避触发时空断裂（敌人减速）。深渊和记忆战场是终局竞速挑战。主线剧情横跨多部，演出质量从早期逐渐进化到剧场版级别。后崩坏书扩展了开放世界探索要素。",
    recommendation: "崩坏 3 是米哈游梦开始的地方，也是理解原神和星穹铁道成功密码的关键。极致的动作手感、持续进化的技术力和一个延续了近十年的庞大故事——它奠定了米哈游「技术宅拯救世界」的口碑。即使今天入坑，《最后一课》《薪炎永燃》等名场面依然能让你感受到「为世界上所有的美好而战」的感染力。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "动作手游的天花板，连招手感和打击感顶级。",
      "剧情从第9章开始起飞，催泪名场面频出。",
      "角色设计和动画质量十年如一日的高水准。",
      "后期养成线多，对新手略不友好。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 48,
    slug: "wuthering-waves",
    name: "鸣潮",
    released: "2024-05-23",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2590350/library_600x900.jpg",
    hero_image: "",
    rating: 4.0,
    metacritic: 0,
    genres: [
      { id: 1, name: "动作", slug: "action" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "库洛游戏出品的开放世界动作 RPG，常被拿来与原神对比。玩家作为「漂泊者」在末日废土风格的世界中探索，通过「回音」系统吸收怪物能力为己所用。游戏以高速战斗、跑酷系统和较高操作上限著称，是动作游戏爱好者的福音。",
    developers: [{ id: 62, name: "Kuro Games" }],
    publishers: [{ id: 62, name: "Kuro Games" }],
    tags: [],
    gameplay: "三人小队高速动作战斗——完美闪避触发「闪避反击」，弹反成功可发动强力的「逆势回击」。声骸系统类似宝可梦——击败怪物后可吸收其能力装备使用。跑酷系统允许蹬墙、滑索和高速冲刺。钩锁赋予出色的移动自由度。终局挑战「全息战略」难度极高，考验操作极限。",
    recommendation: "鸣潮是原神最有力的竞争者——它选择了一条更硬核的路线：更快的战斗节奏、更高的操作上限、更爽的跑酷体验。如果你觉得原神的战斗太简单，鸣潮提供了更接近动作游戏而非 RPG 的体验。声骸系统也是极具潜力的创新。虽然首发时争议不少，但库洛的持续优化态度值得肯定。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "高速战斗手感出色，动作流畅度极高。",
      "声骸系统创意十足，收集乐趣满满。",
      "跑酷和钩锁让探索更加自由。",
      "首发优化欠佳，部分区域掉帧明显。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 49,
    slug: "naraka-mobile",
    name: "永劫无间手游",
    released: "2024-07-25",
    background_image: "https://img.naraka-mobile.com/cover.jpg",
    hero_image: "",
    rating: 4.0,
    metacritic: 0,
    genres: [
      { id: 1, name: "动作", slug: "action" },
      { id: 10, name: "大逃杀", slug: "battle-royale" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "网易 24 Entertainment 打造的武侠大逃杀手游。将冷兵器格斗与大逃杀玩法融合——飞索移动、格挡反击、霸体连招，在 60 人生存竞技中体验真正的武侠对决。端游流水超预期后，手游版针对触屏操作进行了全面优化。",
    developers: [{ id: 63, name: "24 Entertainment" }],
    publishers: [{ id: 64, name: "NetEase" }],
    tags: [],
    gameplay: "60 人武侠生存竞技——使用飞索在垂直空间中高速移动和追击。战斗以冷兵器近战为核心：轻击、重击、格挡、霸体、振刀构成剪刀石头布式的博弈。每种武器（太刀、长剑、阔刀、双节棍等）有完全不同的连招体系。魂玉系统在局内赋予武器特殊效果。缩圈压力下最终存活者获胜。",
    recommendation: "永劫无间走出了大逃杀品类的一条新路——冷兵器武侠格斗。飞索系统赋予了地图极致的垂直自由度，而近战博弈（尤其是振刀反击）带来的心理战乐趣是枪战游戏无法比拟的。手游版在触屏操作上的适配做得不错。如果你想体验不一样的吃鸡，永劫无间值得一试。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "冷兵器武侠格斗独树一帜。",
      "飞索系统让移动和追击极度自由。",
      "振刀机制带来独特的心理博弈乐趣。",
      "手游触屏操作需要一定适应期。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 50,
    slug: "infinity-nikki",
    name: "无限暖暖",
    released: "2024-12-05",
    background_image: "https://img.infinity-nikki.com/cover.jpg",
    hero_image: "",
    rating: 4.1,
    metacritic: 0,
    genres: [
      { id: 3, name: "冒险", slug: "adventure" },
      { id: 6, name: "模拟", slug: "simulation" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone" },
    description_raw: "暖暖系列首个开放世界作品，将换装玩法带入了广阔3D世界。在奇迹大陆上，暖暖可以通过更换服装获得不同的探索能力——捕虫、钓鱼、清洁动物、跳跃漂浮。用搭配之力解决谜题，用服装美学点亮这片充满奇迹的大陆。",
    developers: [{ id: 65, name: "Infold Games" }],
    publishers: [{ id: 65, name: "Infold Games" }],
    tags: [],
    gameplay: "开放世界探索融合换装——不同套装赋予暖暖不同的探索能力（漂浮、净化、钓鱼、捕虫等）。奇迹大陆分布着各种「奇想星」和宝箱等待收集。搭配比拼和时尚挑战是特色玩法——不战斗而以美学对决。剧情温馨治愈，画风清新梦幻。定期推出限定套装，搭配自由度极高。",
    recommendation: "无限暖暖是「她经济」在游戏领域的完美答卷——它证明了游戏不必只有打打杀杀，换装、探索和治愈的旅程同样可以成为核心玩法。奇迹大陆美得令人窒息，每一套服装都是精致的设计作品。适合所有想要放松和治愈的玩家。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "画面精美梦幻，奇迹大陆处处是风景。",
      "换装玩法与探索能力绑定的设计很巧妙。",
      "治愈系氛围让人放松。",
      "对男性玩家吸引力有限。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 51,
    slug: "reverse-1999",
    name: "重返未来：1999",
    released: "2023-10-26",
    background_image: "https://img.reverse1999.com/cover.jpg",
    hero_image: "",
    rating: 4.2,
    metacritic: 0,
    genres: [
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" },
      { id: 7, name: "策略", slug: "strategy" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "Bluepoch 出品的英伦复古风策略卡牌 RPG。在时间被「暴雨」倒流的 20 世纪，唯一能免疫时间倒退的「司辰」维尔汀将带领神秘学家们穿越不同年代，寻找拯救世界的真相。全英文配音的舞台剧风格演出和独特的卡牌融合玩法令人耳目一新。",
    developers: [{ id: 66, name: "Bluepoch" }],
    publishers: [{ id: 66, name: "Bluepoch" }],
    tags: [],
    gameplay: "卡牌合成策略——每回合获得随机技能卡，两张同星卡可合成更高星级的强化版本，产生更强效果。角色自动攻击，玩家专注卡牌选择与合成策略。剧情全英文配音，舞台剧式演出质量极高。每次大版本前往一个全新年代（1920年代、1960年代等），美术风格随之变化。",
    recommendation: "重返未来 1999 是近年来最具「腔调」的二次元手游。英伦复古美学、全英伦配音、舞台剧式叙事——它在美术和演出上走了一条无人走过的路。卡牌合成机制让每回合都充满选择与策略。如果你喜欢文艺片和独特美学，1999 会让你一见钟情。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "英伦复古美学独一无二，艺术品级别。",
      "全英文配音和舞台剧演出质量极高。",
      "卡牌合成机制有策略深度。",
      "玩法相对简单，深度有限。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 52,
    slug: "snowbreak",
    name: "尘白禁区",
    released: "2023-07-20",
    background_image: "https://img.snowbreak.com/cover.jpg",
    hero_image: "",
    rating: 3.9,
    metacritic: 0,
    genres: [
      { id: 5, name: "射击", slug: "shooter" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "Amazing Seasun 出品的科幻第三人称射击 RPG。玩家作为「分析员」指挥拥有超自然能力的「天启者」少女们，在泰坦物质污染的隔离区中战斗。游戏以掩体射击、角色技能连携和PVE副本为核心，在国产手游中属于少见的高规格射击品类。",
    developers: [{ id: 67, name: "Amazing Seasun" }],
    publishers: [{ id: 67, name: "Amazing Seasun" }],
    tags: [],
    gameplay: "第三人称掩体射击——躲在掩体后射击，翻滚转移位置。三名天启者同时出站，可实时切换操控。每个角色有独特枪械类型和技能（护盾、治疗、范围伤害等）。副本为线性关卡推进，BOSS 战需要利用机制和弱点击破。武器和圣遗物（芯片）是核心养成线。",
    recommendation: "尘白禁区填补了国产手游中科幻射击的空白。虽然是免费游戏，但射击手感和技能设计并不敷衍。如果你喜欢 PvE 射击体验和收集角色的乐趣，尘白禁区是一个不错的选择。不过内容更新速度和质量存在一定波动。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "国产手游中少有的硬核射击体验。",
      "角色设计精致，天启者各有特色。",
      "掩体射击手感中规中矩。",
      "内容量偏少，更新速度待提升。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 53,
    slug: "palworld",
    name: "幻兽帕鲁",
    released: "2024-01-19",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/library_600x900.jpg",
    hero_image: "",
    rating: 4.4,
    metacritic: 0,
    genres: [
      { id: 1, name: "动作", slug: "action" },
      { id: 3, name: "冒险", slug: "adventure" },
      { id: 6, name: "模拟", slug: "simulation" }
    ],
    platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} },
      { platform: { id: 3, name: "Xbox Series X", slug: "xbox-series-x" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "Pocketpair 打造的「宝可梦+方舟生存进化」缝合怪——但这锅缝合汤意外地美味。在开放世界中捕捉超过 100 种「帕鲁」，让它们在基地里工作、在生产线上劳作、在战斗中与你并肩作战。首发即爆火，成为 Steam 历史上同时在线人数最高的付费游戏之一。",
    developers: [{ id: 68, name: "Pocketpair" }],
    publishers: [{ id: 68, name: "Pocketpair" }],
    tags: [],
    gameplay: "生存建造+怪物捕捉——收集资源建造基地，捕捉帕鲁为你工作（采矿、种植、手工、搬运）。帕鲁可骑乘、飞行、游泳，极大扩展探索能力。枪械和帕鲁技能结合战斗。地下城和野外 Boss 提供挑战。多人服务器可组队生存和互相袭击。每只帕鲁有随机属性和特性（工作狂、社恐等）。",
    recommendation: "幻兽帕鲁证明了「缝合怪」不一定是贬义词——当生存建造、怪物捕捉和开放世界被巧妙地组合在一起时，产生了难以置信的化学反应。让你的帕鲁在流水线上加班然后吃掉它（真的可以）——这种黑色幽默也是游戏魅力的一部分。无论你是宝可梦粉还是生存游戏爱好者，帕鲁都能给你惊喜。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "生存建造与宠物收集的化学反响极佳。",
      "帕鲁在工作流水线上的黑色幽默令人捧腹。",
      "开放世界探索内容丰富。",
      "优化尚有提升空间，部分区域掉帧。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 54,
    slug: "apex-mobile",
    name: "Apex 英雄手游",
    released: "2022-05-17",
    background_image: "https://img.apexm.com/cover.jpg",
    hero_image: "",
    rating: 4.0,
    metacritic: 0,
    genres: [
      { id: 5, name: "射击", slug: "shooter" },
      { id: 10, name: "大逃杀", slug: "battle-royale" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "Respawn 的顶级大逃杀游戏在移动端的专属版本。保留端游标志性的「传奇」角色技能系统和快节奏枪战体验，针对移动端重新设计了操作界面和操控方式。独创的第九名模式为手游版专属。可惜 EA 在 2023 年已停止服务。",
    developers: [{ id: 69, name: "Respawn Entertainment" }],
    publishers: [{ id: 70, name: "Electronic Arts" }],
    tags: [],
    gameplay: "三人小队英雄大逃杀——选择具有独特技能的传奇角色（探路者、恶灵、直布罗陀等）与队友配合。移动端优化后的 TPS 视角和射击操作。滑铲、爬墙等跑酷技巧保留。标记轮盘沟通系统方便没有语音的队友交流。武器配件系统与端游一致，拾取和背包管理简化。",
    recommendation: "Apex 手游曾是移动端最接近端游素质的大逃杀体验——流畅的动作系统和传奇技能的战术深度在同类手游中独一档。遗憾的是 EA 在 2023 年 5 月关闭了服务。这里收录它，是为了纪念这款短暂但出色的手游。如果你怀念它，可以试试端游版或等待未来的《战地》手游。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "移动端最还原端游体验的大逃杀。",
      "传奇技能系统带来丰富战术深度。",
      "操作优化出色，触屏射击体验佳。",
      "已于2023年停止服务，留下遗憾。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 55,
    slug: "diablo-immortal",
    name: "暗黑破坏神：不朽",
    released: "2022-06-02",
    background_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2180880/library_600x900.jpg",
    hero_image: "",
    rating: 3.5,
    metacritic: 59,
    genres: [
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" },
      { id: 1, name: "动作", slug: "action" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Mature" },
    description_raw: "暴雪与网易联合打造的暗黑系列手游。故事发生在暗黑 2 与暗黑 3 之间，玩家探索被恶魔侵蚀的庇护之地。继承了系列经典的俯视角 ARPG 玩法和刷装乐趣，同时引入了 MMO 式的多人互动——世界事件、阵营战、大型副本。",
    developers: [{ id: 71, name: "Blizzard Entertainment" }],
    publishers: [{ id: 72, name: "Activision Blizzard" }],
    tags: [],
    gameplay: "经典俯视角 ARPG 刷装——选择六大职业（野蛮人、猎魔人、法师、圣教军、死灵法师、武僧），在庇护之地刷怪升装备。技能搭配自由，可同时装备 4 个主动技能。MMO 要素：野外 PvP、大型副本、阵营战、世界 Boss。传奇宝石是核心养成系统和主要氪金点。手柄操控和触屏均支持。",
    recommendation: "暗黑不朽在游戏体验上是一头矛盾的野兽——它的战斗手感、美术质感和地图设计确实达到了暗黑系列的水准，但激进的付费机制严重影响了公平性。如果你能克制自己不攀比战斗力，仅以体验剧情和刷怪为目标，它仍能提供数十小时的爽快 ARPG 体验。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "战斗手感和美术达到了暗黑水准。",
      "MMO 化带来了新的社交乐趣。",
      "氪金体系过于激进，传奇宝石是深坑。",
      "剧情和世界构建有暗黑正统的味道。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 56,
    slug: "lol-wild-rift",
    name: "英雄联盟手游",
    released: "2020-10-27",
    background_image: "https://img.wildrift.com/cover.jpg",
    hero_image: "",
    rating: 4.2,
    metacritic: 0,
    genres: [
      { id: 9, name: "MOBA", slug: "moba" },
      { id: 7, name: "策略", slug: "strategy" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "Riot Games 将英雄联盟带到移动端的诚意之作。并非端游的简单移植，而是从零为移动端重建——双摇杆操控、15-20 分钟一局、保留端游核心深度同时简化了部分操作。40+ 名英雄的经典技能悉数还原，让召唤师在任何地方都能体验峡谷对决。",
    developers: [{ id: 73, name: "Riot Games" }],
    publishers: [{ id: 73, name: "Riot Games" }],
    tags: [],
    gameplay: "5v5 三路 MOBA——从端游简化但保留核心策略深度。双摇杆操控（移动+瞄准）为移动端优化。一局约 15-20 分钟，比端游更快。补刀、视野、龙团等核心机制保留。英雄还原度高：盲僧回旋踢、亚索风墙、劫影杀阵等高操作英雄均可实现。排位系统与端游独立但逻辑一致。",
    recommendation: "英雄联盟手游是 PC MOBA 移动化的最优解——它没有为了手机而牺牲深度，也没有为了还原而忽视操控舒适度。如果你是 LOL 端游老玩家，熟悉的英雄和节奏会让你很快上手；如果你是新玩家，精简后的机制也足够友好。在移动端 MOBA 中，它的竞技纯度为最高。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "移动端还原度最高的英雄联盟体验。",
      "双摇杆操控对移动端优化出色。",
      "英雄操作深度保留完好。",
      "匹配队列时间偶有偏长。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 57,
    slug: "tft-mobile",
    name: "金铲铲之战",
    released: "2021-08-26",
    background_image: "https://img.tftm.com/cover.jpg",
    hero_image: "",
    rating: 4.3,
    metacritic: 0,
    genres: [
      { id: 7, name: "策略", slug: "strategy" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone" },
    description_raw: "英雄联盟云顶之弈的正版授权手游。8 人各自为战的自动战斗策略游戏——从共享卡池中招募英雄，构筑阵容羁绊，每回合自动对战。不需要操作技术，纯粹考验策略规划和临场决策。相比端游版本拥有更多赛季主题和专属内容。",
    developers: [{ id: 73, name: "Riot Games" }],
    publishers: [{ id: 60, name: "Tencent" }],
    tags: [],
    gameplay: "自动战斗策略——每回合从随机刷新的英雄中选择购买，搭配种族和职业羁绊。经济管理是核心：连胜/连败奖励、利息积累、升级时机都是决策关键。装备系统赋予英雄额外强度。8 人共享卡池，需要观察对手阵容避免撞车。每赛季全新主题和羁绊刷新游戏体验。",
    recommendation: "金铲铲是移动端最上瘾的策略游戏之一——不需要手速和操作，纯粹的策略博弈让每一局都像解一道新谜题。赛季更新频繁，每个赛季的羁绊和主题都充满新意。无论你是自走棋爱好者还是策略游戏玩家，金铲铲都值得在你的手机里占据一席之地。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "自走棋品类在移动端的最佳体验。",
      "赛季更新频繁，羁绊设计有创意。",
      "策略深度高，经济管理很有讲究。",
      "随机性有时令人沮丧，运气成分偏高。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 58,
    slug: "identity-v",
    name: "第五人格",
    released: "2018-04-02",
    background_image: "https://img.idv.com/cover.jpg",
    hero_image: "",
    rating: 4.2,
    metacritic: 0,
    genres: [
      { id: 11, name: "非对称竞技", slug: "asymmetric" },
      { id: 1, name: "动作", slug: "action" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} },
      { platform: { id: 1, name: "PC", slug: "pc" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "网易出品的哥特风非对称竞技手游。1 名监管者 vs 4 名求生者的 1v4 猫鼠游戏——求生者在密闭庄园中破译密码机、躲避追杀最终逃脱；监管者则要追击、击倒并淘汰所有求生者。蒂姆·伯顿式的黑暗童话美术风格和持续的电竞赛事使其长盛不衰。",
    developers: [{ id: 64, name: "NetEase" }],
    publishers: [{ id: 64, name: "NetEase" }],
    tags: [],
    gameplay: "1v4 非对称对抗——求生者（4人）需合作破译 5 台密码机后打开大门逃脱。监管者（1人）需击倒并挂飞椅淘汰求生者。求生者可选择不同角色，各有独特技能和道具（翻窗加速、治疗光环、分身等）。监管者可选择不同猎人，能力各异（隐身、传送、冲刺等）。地图有复杂的地形和板窗交互。",
    recommendation: "第五人格将非对称竞技与哥特暗黑美学结合，打造了一个在华语手游圈具有极高辨识度的 IP。1v4 的猫鼠博弈每一局都紧张刺激——作为求生者需要团队配合和走位，作为监管者需要心理预判和策略。如果你喜欢《黎明杀机》式体验但又想要更轻度的手机版，第五人格是不二之选。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "非对称竞技设计精妙，1v4 博弈乐趣十足。",
      "黑暗童话美术风格独特。",
      "角色平衡持续调整，竞技环境健康。",
      "新手求生者容易被老手监管者碾压。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 59,
    slug: "azur-lane",
    name: "碧蓝航线",
    released: "2017-05-25",
    background_image: "https://img.azurlane.com/cover.jpg",
    hero_image: "",
    rating: 4.1,
    metacritic: 0,
    genres: [
      { id: 5, name: "射击", slug: "shooter" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Teen" },
    description_raw: "将军舰拟人化的横版弹幕射击手游。将历史上的真实战舰（如企业号、俾斯麦号、贝尔法斯特号等）设计为各具性格的「舰娘」，玩家指挥舰队在弹幕海洋中穿梭作战。以出色的角色设计、良心的付费模式和活跃的社区文化闻名。",
    developers: [{ id: 74, name: "Manjuu" }],
    publishers: [{ id: 75, name: "Yostar" }],
    tags: [],
    gameplay: "横版弹幕射击——控制前排先锋舰和后排主力舰队在弹幕中闪避并输出。前排负责鱼雷和防空，后排负责舰炮和空袭。装备系统可自由搭配主炮、鱼雷、飞机、防空炮。每艘舰娘可通过出击和演习提升等级和好感度。大型活动剧情为原创世界观展开。付费以皮肤为主，不影响战力。",
    recommendation: "碧蓝航线是二次元手游中稀有的「良心运营」典范——付费几乎全在皮肤，战力获取零门槛。弹幕射击玩法在同类游戏中独树一帜，角色设计和Live2D皮肤质量极高。如果你喜欢收集精美角色又不想被氪金逼迫，碧蓝航线是绝佳选择。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "角色设计精美，Live2D质量极高。",
      "付费以皮肤为主，不逼氪值得称赞。",
      "弹幕射击玩法轻松爽快。",
      "玩法重复度较高，主要靠爱发电。"
    ],
    screenshots: [],
    news: []
  },
  {
    id: 60,
    slug: "uma-musume",
    name: "赛马娘 Pretty Derby",
    released: "2021-02-24",
    background_image: "https://img.umamusume.com/cover.jpg",
    hero_image: "",
    rating: 4.3,
    metacritic: 0,
    genres: [
      { id: 6, name: "模拟", slug: "simulation" },
      { id: 2, name: "角色扮演", slug: "role-playing-games-rpg" }
    ],
    platforms: [
      { platform: { id: 8, name: "iOS", slug: "ios" }, requirements: {} },
      { platform: { id: 9, name: "Android", slug: "android" }, requirements: {} }
    ],
    esrb_rating: { name: "Everyone" },
    description_raw: "Cygames 出品的现象级养成模拟手游。将日本真实赛马拟人化为活泼可爱的「赛马娘」，玩家作为训练员培养她们在赛场上奔跑夺冠。肉鸽式的养成系统和高质量的 3D 赛跑演出使其在日服长期霸榜，国服由 B 站代理。",
    developers: [{ id: 76, name: "Cygames" }],
    publishers: [{ id: 76, name: "Cygames" }],
    tags: [],
    gameplay: "Roguelike 养成模拟——每位赛马娘通过「培育」过程（类似肉鸽）随机触发训练、比赛、事件，最终培养出一匹可以出赛的强力马娘。培育中属性增长、技能获取和疲劳管理都是核心决策。3D 赛跑演出质量极高，解说系统还原真实竞马氛围。PvP 竞技场和团队战提供终局挑战。",
    recommendation: "赛马娘是日本手游圈的现象级作品——它将肉鸽养成和偶像文化结合，创造了一种前所未有的游戏体验。Cygames 的 3D 赛跑演出水准堪比主机游戏，角色的羁绊故事也温暖动人。不过 Roguelike 养成模式需要一定肝度，国服玩家建议参考日服攻略提前规划。",
    requirements: { minCpu: "", minGpu: "", minRamGB: 0, minVramGB: 0, recCpu: "", recGpu: "", recRamGB: 0, recVramGB: 0 },
    reviews: [
      "肉鸽养成机制创新，每次培育都不同。",
      "3D 赛跑演出质量顶级，解说氛围拉满。",
      "角色羁绊故事温暖有趣。",
      "需要大量重复培育，肝度偏高。"
    ],
    screenshots: [],
    news: []
  }
];

for (const game of GAMES) {
  const filepath = join(outDir, `${game.slug}.json`);
  writeFileSync(filepath, JSON.stringify(game, null, 2) + "\n", "utf-8");
  console.log(`  ✓ ${game.slug}.json`);
}
console.log(`\nDone: ${GAMES.length} game JSON files generated.`);
