"use client";

import { useState } from "react";
import Image from "next/image";

interface GameImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Game cover image with error fallback.
 * If RAWG image fails (403/hotlink), shows a styled gradient placeholder.
 */
export function GameImage({ src, alt, fill, className, sizes, priority }: GameImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-zinc-800/50 ${className || ""}`}
        style={fill ? { position: "absolute", inset: 0 } : { aspectRatio: "3/4" }}
      >
        <div className="text-center p-4">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-zinc-700/50 flex items-center justify-center">
            <span className="text-zinc-500 text-lg">🎮</span>
          </div>
          <p className="text-zinc-600 text-xs leading-tight line-clamp-2">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      unoptimized // RAWG images are already optimized
    />
  );
}
