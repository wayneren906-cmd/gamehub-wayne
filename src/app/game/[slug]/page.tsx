import type { Metadata } from "next";
import { ALL_GAMES, getGame } from "@/lib/games";
import GameDetailClient from "./GameDetailClient";

export function generateStaticParams() {
  return ALL_GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  return {
    title: game ? `${game.name} - GameHub` : "游戏详情 - GameHub",
    description: game?.description_raw?.slice(0, 150) || "查看游戏详细信息、硬件需求和AI评价分析",
  };
}

export default function Page() {
  return <GameDetailClient />;
}
