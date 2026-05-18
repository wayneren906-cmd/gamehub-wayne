# 内容与游戏库扩充实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 游戏库从 30 扩充到 60 款（新增手游 + Switch + 跨平台），内容从 3 篇扩充到 41 篇（深度攻略 + 轻量简评 + 资讯）

**Architecture:** 每款游戏一个 JSON 文件（`content/games/<slug>.json`），每篇内容一个 TS 文件（`content/<type>/<slug>.ts`），通过 barrel index 导入，`src/lib/games.ts` 和 `src/lib/content.ts` 作为数据访问层

**Tech Stack:** TypeScript, JSON, Node.js (for generation script)

---

### Task 1: 编写游戏 JSON 批量生成脚本

**Files:**
- Create: `scripts/generate-mobile-switch-games.mjs`

- [ ] **Step 1: 编写生成脚本**

脚本包含 30 款游戏的完整数据（GameDetail JSON），遍历生成到 `content/games/`。

**30 款游戏 Slug → ID 映射表：**

| ID | Slug | 名称 | 平台 |
|----|------|------|------|
| 31 | zelda-breath-of-the-wild | 塞尔达传说：旷野之息 | Switch |
| 32 | mario-odyssey | 超级马里奥：奥德赛 | Switch |
| 33 | pokemon-scarlet-violet | 宝可梦 朱/紫 | Switch |
| 34 | splatoon-3 | 喷射战士 3 | Switch |
| 35 | animal-crossing-new-horizons | 集合啦！动物森友会 | Switch |
| 36 | metroid-prime-remastered | 银河战士究极复刻 | Switch |
| 37 | xenoblade-chronicles-3 | 异度神剑 3 | Switch |
| 38 | fire-emblem-engage | 火焰纹章 Engage | Switch |
| 39 | pikmin-4 | 皮克敏 4 | Switch |
| 40 | super-smash-bros-ultimate | 任天堂明星大乱斗 特别版 | Switch |
| 41 | genshin-impact | 原神 | iOS/Android/PC/PS |
| 42 | honkai-star-rail | 崩坏：星穹铁道 | iOS/Android/PC |
| 43 | zenless-zone-zero | 绝区零 | iOS/Android/PC |
| 44 | arknights | 明日方舟 | iOS/Android |
| 45 | honor-of-kings | 王者荣耀 | iOS/Android |
| 46 | game-for-peace | 和平精英 | iOS/Android |
| 47 | honkai-impact-3rd | 崩坏 3 | iOS/Android/PC |
| 48 | wuthering-waves | 鸣潮 | iOS/Android/PC |
| 49 | naraka-mobile | 永劫无间手游 | iOS/Android |
| 50 | infinity-nikki | 无限暖暖 | iOS/Android/PC |
| 51 | reverse-1999 | 重返未来：1999 | iOS/Android |
| 52 | snowbreak | 尘白禁区 | iOS/Android/PC |
| 53 | palworld | 幻兽帕鲁 | PC/Xbox |
| 54 | apex-mobile | Apex 英雄手游 | iOS/Android |
| 55 | diablo-immortal | 暗黑破坏神：不朽 | iOS/Android/PC |
| 56 | lol-wild-rift | 英雄联盟手游 | iOS/Android |
| 57 | tft-mobile | 金铲铲之战 | iOS/Android |
| 58 | identity-v | 第五人格 | iOS/Android/PC |
| 59 | azur-lane | 碧蓝航线 | iOS/Android |
| 60 | uma-musume | 赛马娘 Pretty Derby | iOS/Android |

脚本模板 (完整 30 个游戏 JSON 在 `GAMES` 数组中，以 旷野之息 为例)：

```javascript
// scripts/generate-mobile-switch-games.mjs
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
  // ID 32-60 按上表顺序依次定义，每项遵循相同 GameDetail 结构
];

for (const game of GAMES) {
  const filepath = join(outDir, `${game.slug}.json`);
  writeFileSync(filepath, JSON.stringify(game, null, 2) + "\n", "utf-8");
  console.log(`  ✓ ${game.slug}.json`);
}
console.log(`\nDone: ${GAMES.length} game JSON files generated.`);
```

- [ ] **Step 2: 运行脚本**

```bash
node scripts/generate-mobile-switch-games.mjs
```

Expected: 30 个新的 JSON 文件写入 `content/games/`。

- [ ] **Step 3: 验证文件生成**

```bash
ls content/games/ | wc -l  # 期望: 60
```

- [ ] **Step 4: 提交**

```bash
git add content/games/ scripts/generate-mobile-switch-games.mjs
git commit -m "feat: add 30 mobile/Switch/cross-platform games (IDs 31-60)"
```

---

### Task 2: 更新 games.ts 导入新游戏

**Files:**
- Modify: `src/lib/games.ts`

- [ ] **Step 1: 添加 30 个新 import 并加入 ALL_GAMES 数组**

在 `src/lib/games.ts` 末尾的 import 和 `zelda_tears_of_the_kingdom` 之后追加 30 个新导入：

```typescript
// 新增: 手游 + Switch + 跨平台 (IDs 31-60)
import genshin_impact from "../../content/games/genshin-impact.json";
import honkai_star_rail from "../../content/games/honkai-star-rail.json";
import zzz from "../../content/games/zenless-zone-zero.json";
import arknights from "../../content/games/arknights.json";
import honor_of_kings from "../../content/games/honor-of-kings.json";
import game_for_peace from "../../content/games/game-for-peace.json";
import honkai_impact_3rd from "../../content/games/honkai-impact-3rd.json";
import wuthering_waves from "../../content/games/wuthering-waves.json";
import naraka_mobile from "../../content/games/naraka-mobile.json";
import infinity_nikki from "../../content/games/infinity-nikki.json";
import reverse_1999 from "../../content/games/reverse-1999.json";
import snowbreak from "../../content/games/snowbreak.json";
import palworld from "../../content/games/palworld.json";
import apex_mobile from "../../content/games/apex-mobile.json";
import diablo_immortal from "../../content/games/diablo-immortal.json";
import lol_wild_rift from "../../content/games/lol-wild-rift.json";
import tft_mobile from "../../content/games/tft-mobile.json";
import identity_v from "../../content/games/identity-v.json";
import azur_lane from "../../content/games/azur-lane.json";
import uma_musume from "../../content/games/uma-musume.json";
import zelda_botw from "../../content/games/zelda-breath-of-the-wild.json";
import mario_odyssey from "../../content/games/mario-odyssey.json";
import pokemon_sv from "../../content/games/pokemon-scarlet-violet.json";
import splatoon_3 from "../../content/games/splatoon-3.json";
import animal_crossing from "../../content/games/animal-crossing-new-horizons.json";
import metroid_prime from "../../content/games/metroid-prime-remastered.json";
import xenoblade_3 from "../../content/games/xenoblade-chronicles-3.json";
import fire_emblem_engage from "../../content/games/fire-emblem-engage.json";
import pikmin_4 from "../../content/games/pikmin-4.json";
import super_smash_bros from "../../content/games/super-smash-bros-ultimate.json";
```

在 `games` 数组末尾追加所有新变量。

- [ ] **Step 2: 构建验证**

```bash
npm run build 2>&1 | tail -20
```

Expected: 72+ SSG 页面，编译通过。

- [ ] **Step 3: 提交**

```bash
git add src/lib/games.ts
git commit -m "feat: register 30 new games in games.ts data layer"
```

---

### Task 3: 编写深度内容（10 篇）

**36 篇内容 Slug 映射表：**

| # | 类型 | Slug | 标题 | 字数 |
|---|------|------|------|------|
| 1 | 攻略 | genshin-beginner-guide | 原神 4.0 新手开荒指南 | 深 |
| 2 | 攻略 | honkai-star-rail-team-guide | 星穹铁道 2.0 深渊阵容推荐 | 深 |
| 3 | 攻略 | zelda-totk-shrine-guide | 王国之泪全神庙攻略 | 深 |
| 4 | 攻略 | zelda-botw-tips | 旷野之息终极技巧合集 | 深 |
| 5 | 攻略 | zzz-team-building | 绝区零开荒配队指南 | 深 |
| 6 | 攻略 | palworld-survival-guide | 幻兽帕鲁生存建造手册 | 深 |
| 7 | 攻略 | arknights-newbie-guide | 明日方舟新手干员推荐 | 深 |
| 8 | 攻略 | elden-ring-dlc-guide | 艾尔登法环 DLC 攻略 | 深 |
| 9 | 测评 | black-myth-wukong-review | 黑神话：悟空深度测评 | 深 |
| 10 | 测评 | nintendo-switch-2-review | Switch 2 首发体验报告 | 深 |
| 11 | 攻略 | mario-odyssey-moon-guide | 马里奥奥德赛月亮收集指南 | 轻 |
| 12 | 攻略 | pokemon-sv-shiny-guide | 宝可梦朱紫闪光狩猎攻略 | 轻 |
| 13 | 攻略 | splatoon-3-beginner-tips | 喷射战士3新手上分指南 | 轻 |
| 14 | 攻略 | animal-crossing-design-tips | 动森岛屿设计灵感合集 | 轻 |
| 15 | 攻略 | metroid-prime-boss-guide | 银河战士 Boss 攻略 | 轻 |
| 16 | 攻略 | xenoblade-3-class-guide | 异度神剑3职业搭配推荐 | 轻 |
| 17 | 攻略 | fire-emblem-engage-ring-guide | 火焰纹章 Engage 纹章士推荐 | 轻 |
| 18 | 攻略 | pikmin-4-dandori-tips | 皮克敏4当多利挑战技巧 | 轻 |
| 19 | 攻略 | smash-bros-combo-guide | 大乱斗连招入门 | 轻 |
| 20 | 攻略 | honor-of-kings-rank-guide | 王者荣耀S35赛季上分指南 | 轻 |
| 21 | 攻略 | game-for-peace-gun-guide | 和平精英枪械选择攻略 | 轻 |
| 22 | 攻略 | honkai-impact-team-guide | 崩坏3终极区阵容推荐 | 轻 |
| 23 | 攻略 | wuthering-waves-echo-guide | 鸣潮声骸系统详解 | 轻 |
| 24 | 攻略 | naraka-mobile-combat-tips | 永劫无间手游战斗入门 | 轻 |
| 25 | 攻略 | infinity-nikki-styling-guide | 无限暖暖搭配师指南 | 轻 |
| 26 | 攻略 | reverse-1999-newbie | 重返未来1999开荒推荐 | 轻 |
| 27 | 攻略 | snowbreak-weapon-guide | 尘白禁区武器选择指南 | 轻 |
| 28 | 攻略 | lol-wild-rift-lane-guide | 英雄联盟手游分路指南 | 轻 |
| 29 | 测评 | diablo-immortal-review | 暗黑不朽：手游化是否成功？ | 轻 |
| 30 | 测评 | palworld-review | 幻兽帕鲁：缝合怪还是神作？ | 轻 |
| 31 | 资讯 | e3-2026-preview | E3 2026 最受期待十大游戏 | - |
| 32 | 资讯 | china-games-export-2026 | 2026上半年国产游戏出海成绩单 | - |
| 33 | 资讯 | switch-2-half-year-review | Switch 2 发售半年值得升级吗 | - |
| 34 | 资讯 | wukong-dlc-preview | 黑神话东海龙宫DLC前瞻 | - |
| 35 | 资讯 | tga-2026-predictions | 2026 TGA年度游戏预测 | - |
| 36 | 资讯 | china-open-world-mobile | 国产开放世界手游大盘点 | - |

- [ ] **Step 1: 编写 10 篇深度内容（8 攻略 + 2 测评）**

- [ ] **Step 2: 更新 barrel index 文件**

在 `content/guides/index.ts` 中追加新攻略的 import：

```typescript
import genshin_beginner from "./genshin-beginner-guide";
import honkai_team from "./honkai-star-rail-team-guide";
// ... 剩余导入

const items: ContentItem[] = [
  // ... 已有导入
  genshin_beginner,
  honkai_team,
  // ... 剩余追加
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default items;
```

在 `content/reviews/index.ts` 中追加新测评的 import。

- [ ] **Step 3: 构建验证**

```bash
npm run build 2>&1 | tail -5
```

Expected: 新增 SSG 页面，编译通过。

- [ ] **Step 4: 提交**

```bash
git add content/guides/ content/reviews/
git commit -m "feat: add 8 deep guides + 2 deep reviews"
```

---

### Task 4: 编写轻量内容（20 篇）+ 资讯（6 篇）

- [ ] **Step 1: 编写 20 篇轻量内容 + 6 篇资讯**

格式同 Task 3，每篇 body 200-300 字（轻量）或 400-500 字（资讯）。Slug/标题见上方映射表 #11-36。

- [ ] **Step 3: 更新对应的 barrel index 文件**

更新 `content/guides/index.ts` 和 `content/news/index.ts`，导入全部新文件。

- [ ] **Step 4: 构建验证**

```bash
npm run build 2>&1 | tail -5
```

Expected: 新增 26 个 SSG 页面（20 轻量攻略 + 6 资讯），编译通过。

- [ ] **Step 5: 提交**

```bash
git add content/guides/ content/news/ content/reviews/
git commit -m "feat: add 20 light guides + 6 news articles"
```

---

### Task 5: 最终验证

- [ ] **Step 1: 完整构建**

```bash
npm run build 2>&1
```

Expected: 所有页面生成成功，无类型错误。

验收标准：
- [x] `ls content/games/ | wc -l` → 60
- [x] `ls content/guides/*.ts | wc -l` → ~27（index + 旧 1 + 新 25）
- [x] `ls content/news/*.ts | wc -l` → ~8（index + 旧 1 + 新 6）
- [x] `ls content/reviews/*.ts | wc -l` → ~8（index + 旧 1 + 新 5）
- [x] SSG 页面总数 ≥ 42 + 30 (新游戏) + 31 (新内容) ≈ 103

- [ ] **Step 2: 提交**

```bash
git add -A
git commit -m "chore: final verification after content/game expansion"
```
