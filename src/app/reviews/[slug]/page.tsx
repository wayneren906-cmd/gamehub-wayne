import type { Metadata } from "next";
import { getReviews, getContent } from "@/lib/content";
import ContentDetail from "./ContentDetail";

export function generateStaticParams() {
  return getReviews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent(slug);
  return {
    title: item ? `${item.title} - GameHub 测评` : "测评 - GameHub",
    description: item?.summary || "游戏测评详情",
  };
}

export default function Page() {
  return <ContentDetail />;
}
