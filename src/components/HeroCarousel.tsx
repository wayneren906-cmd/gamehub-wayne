"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Game } from "@/types/game";

interface HeroCarouselProps {
  games: Game[];
}

const PLACEHOLDER_BG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='500' fill='%2318181b'%3E%3Crect width='1200' height='500'/%3E%3C/svg%3E";

export function HeroCarousel({ games }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const featured = games.slice(0, 5);
  const game = featured[current];

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % featured.length);
  }, [featured.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + featured.length) % featured.length);
  }, [featured.length]);

  // Auto-advance
  useEffect(() => {
    if (featured.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, featured.length]);

  if (featured.length === 0) return null;

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full aspect-[21/9] max-h-[500px] rounded-xl overflow-hidden glass-card">
      {/* Background image */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={game?.background_image || PLACEHOLDER_BG}
            alt={game?.name || ""}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              {game?.name}
            </h2>
            <div className="flex items-center gap-4 text-sm">
              {game?.rating > 0 && (
                <span className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} className="fill-yellow-400" />
                  {game.rating.toFixed(1)}
                </span>
              )}
              {game?.metacritic > 0 && (
                <span className="text-green-400 font-bold">{game.metacritic}</span>
              )}
              {game?.genres && (
                <span className="text-zinc-400">
                  {game.genres.slice(0, 3).map((g) => g.name).join(" · ")}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {featured.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="上一个"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="下一个"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      {featured.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`第 ${i + 1} 张`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
