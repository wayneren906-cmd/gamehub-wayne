import type { ContentItem } from "@/types/content";
import tga2025Recap from "./2026-04-15-tga-2025-recap";
import wukong20mSales from "./2026-04-28-wukong-20m-sales";
import switchLegacy from "./2026-05-03-switch-legacy";
import steamChinaGames2025 from "./2026-05-05-steam-china-games-2025";
import genshinImpactSixYears from "./2026-05-08-genshin-impact-six-years";
import indieGamesRising from "./2026-05-10-indie-games-rising";
import chinaOpenWorldMobile from "./2026-08-01-china-open-world-mobile";

const items: ContentItem[] = [
  chinaOpenWorldMobile,
  indieGamesRising,
  genshinImpactSixYears,
  steamChinaGames2025,
  switchLegacy,
  wukong20mSales,
  tga2025Recap,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default items;
