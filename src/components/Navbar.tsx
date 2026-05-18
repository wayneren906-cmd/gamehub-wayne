"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Menu, X } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TABS = [
  { href: "/", label: "首页", exact: true },
  { href: "/leaderboard", label: "排行" },
  { href: "/news", label: "资讯" },
  { href: "/reviews", label: "测评" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { favorites } = useFavorites();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(tab: (typeof TABS)[number]) {
    if (tab.exact) return pathname === "/" || pathname === "";
    return pathname.startsWith(tab.href);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e8e8] transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 flex-shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40 rounded-lg"
          >
            <span className="w-7 h-7 rounded-lg bg-[#15B04F] flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">G</span>
            </span>
            <span className="font-extrabold text-base text-[#1a1a1a] tracking-tight">
              GameHub
            </span>
          </Link>

          {/* Center: Tabs — desktop */}
          <div className="hidden md:flex items-center gap-0">
            {TABS.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative px-4 py-3 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#15B04F]/40 rounded-lg ${
                  isActive(tab)
                    ? "text-[#15B04F]"
                    : "text-[#666] hover:text-[#333]"
                }`}
              >
                {tab.label}
                {isActive(tab) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#15B04F] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right: Search + Favorites */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/games"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0f0f0] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
            >
              <Search size={17} className="text-[#666]" />
            </Link>
            <Link
              href="/?filter=favorites"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-sm text-[#666] hover:text-[#e74c3c] hover:bg-[#fef0ef] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
            >
              <Heart size={14} />
              收藏
              {favorites.size > 0 && (
                <span className="bg-[#e74c3c] text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">
                  {favorites.size}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0f0f0] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
              aria-label="菜单"
            >
              <Menu size={18} className="text-[#666]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/30 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={reducedMotion ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reducedMotion ? { x: 0 } : { x: "100%" }}
              transition={reducedMotion ? { duration: 0 } : { type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-[#e8e8e8]">
                <span className="font-bold text-[#1a1a1a]">菜单</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0f0f0] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40"
                >
                  <X size={18} className="text-[#666]" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-1">
                {[...TABS, { href: "/games", label: "搜索游戏", exact: false }, { href: "/guides", label: "攻略", exact: false }].map((tab) => (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40 ${
                      isActive(tab) || (!tab.exact && pathname.startsWith(tab.href))
                        ? "bg-[#e8f5ec] text-[#15B04F]"
                        : "text-[#333] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
