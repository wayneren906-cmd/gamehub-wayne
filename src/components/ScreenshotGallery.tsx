"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GameImage } from "@/components/GameImage";

interface ScreenshotGalleryProps {
  screenshots: string[];
  gameName: string;
}

export function ScreenshotGallery({ screenshots, gameName }: ScreenshotGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!screenshots.length) return null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () => setLightboxIndex((i) => (i + 1) % screenshots.length);
  const goPrev = () => setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);

  return (
    <>
      {/* Thumbnail strip */}
      <div className="card p-5">
        <h2 className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2 mb-4">
          <ImageIcon size={18} />
          游戏截图
        </h2>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
          {screenshots.map((src, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative flex-shrink-0 w-72 h-40 rounded-lg overflow-hidden snap-start border border-[#e8e8e8] hover:border-[#15B04F]/50 transition-colors group"
            >
              <GameImage
                src={src}
                alt={`${gameName} 截图 ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <span className="absolute top-4 left-4 text-white/60 text-sm z-10">
              {lightboxIndex + 1} / {screenshots.length}
            </span>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-[90vw] h-[70vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <GameImage
                src={screenshots[lightboxIndex]}
                alt={`${gameName} 截图 ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
