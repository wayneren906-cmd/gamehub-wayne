import type { ContentItem } from "@/types/content";
import blackMythWukongReview from "./black-myth-wukong-review";
import diabloImmortalReview from "./diablo-immortal-review";
import honkaiStarRailReview from "./honkai-star-rail-review";
import palworldReview from "./palworld-review";
import starfield from "./starfield-critique";

const items: ContentItem[] = [
  blackMythWukongReview,
  honkaiStarRailReview,
  diabloImmortalReview,
  palworldReview,
  starfield,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default items;
