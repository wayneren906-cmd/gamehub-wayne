import type { ContentItem } from "@/types/content";
import blackMythWukongReview from "./black-myth-wukong-review";
import diabloImmortalReview from "./diablo-immortal-review";
import nintendoSwitch2Review from "./nintendo-switch-2-review";
import palworldReview from "./palworld-review";
import starfield from "./starfield-critique";

const items: ContentItem[] = [
  blackMythWukongReview,
  diabloImmortalReview,
  nintendoSwitch2Review,
  palworldReview,
  starfield,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default items;
