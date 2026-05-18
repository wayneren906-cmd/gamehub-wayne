export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  body: string[];
}

export interface ContentIndex {
  type: "news" | "guide" | "review";
  items: ContentItem[];
}
