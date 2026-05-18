import type { ContentItem } from "@/types/content";
import newsItems from "../../content/news";
import guideItems from "../../content/guides";
import reviewItems from "../../content/reviews";

const contentBySlug = new Map<string, ContentItem>();

for (const item of [...newsItems, ...guideItems, ...reviewItems]) {
  contentBySlug.set(item.slug, item);
}

export function getContent(slug: string): ContentItem | undefined {
  return contentBySlug.get(slug);
}

export function getNews(): ContentItem[] {
  return newsItems;
}

export function getGuides(): ContentItem[] {
  return guideItems;
}

export function getReviews(): ContentItem[] {
  return reviewItems;
}

export function getAllContent(): ContentItem[] {
  return [...newsItems, ...guideItems, ...reviewItems];
}

export function getContentByTag(tag: string): ContentItem[] {
  return getAllContent().filter((item) =>
    item.tags.some((t) => t.includes(tag))
  );
}
