import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FavoritesProvider } from "@/hooks/useFavorites";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameHub | 发现好游戏",
  description: "探索顶级大作，查看评分、硬件需求与深度测评",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#f5f5f5]">
        <FavoritesProvider>
          <Navbar />
          <main className="pt-12">
            {children}
          </main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
