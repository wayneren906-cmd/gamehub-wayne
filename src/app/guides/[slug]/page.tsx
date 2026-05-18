import type { Metadata } from "next";
import { getGuides, getContent } from "@/lib/content";
import ContentDetail from "./ContentDetail";

export function generateStaticParams() {
  return getGuides().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent(slug);
  return {
    title: item ? `${item.title} - GameHub 攻略` : "攻略 - GameHub",
    description: item?.summary || "游戏攻略详情",
  };
}

export default function Page() {
  return <ContentDetail />;
}
