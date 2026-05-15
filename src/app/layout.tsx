import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AmbientGlow } from "@/components/AmbientGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameHub | 3A 游戏聚合探索",
  description: "探索顶级 3A 大作，查看评分、硬件需求与 AI 玩家评价",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen relative">
        <AmbientGlow />
        <Navbar />
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
