import type { ContentItem } from "@/types/content";
import dlc from "./2026-05-15-黑神话DLC公布";
import e32026Preview from "./2026-05-20-e3-2026-preview";
import chinaGamesExport2026 from "./2026-06-01-china-games-export-2026";
import switch2HalfYear from "./2026-06-15-switch-2-half-year-review";
import wukongDlcPreview from "./2026-07-01-wukong-dlc-preview";
import tga2026Predictions from "./2026-07-15-tga-2026-predictions";
import chinaOpenWorldMobile from "./2026-08-01-china-open-world-mobile";

const items: ContentItem[] = [
  chinaOpenWorldMobile,
  tga2026Predictions,
  wukongDlcPreview,
  switch2HalfYear,
  chinaGamesExport2026,
  e32026Preview,
  dlc,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default items;
