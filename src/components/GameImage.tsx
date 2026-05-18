"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Gamepad2 } from "lucide-react";
import { proxyImageUrl, proxyImageSrcSet } from "@/lib/image-proxy";

interface GameImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  dominantColor?: string;
  objectPosition?: string;
}

export function GameImage({
  src,
  alt,
  fill,
  className = "",
  sizes,
  priority,
  dominantColor,
  objectPosition,
}: GameImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const proxiedSrc = useMemo(() => proxyImageUrl(src), [src]);
  const srcSet = useMemo(() => proxyImageSrcSet(src), [src]);

  const handleLoad = useCallback(() => setLoaded(true), []);

  const imgStyle: React.CSSProperties = useMemo(() => {
    const base: React.CSSProperties = fill
      ? { position: "absolute", inset: 0 }
      : {};
    if (objectPosition) base.objectPosition = objectPosition;
    return base;
  }, [fill, objectPosition]);

  const containerStyle: React.CSSProperties = useMemo(
    () => (fill ? { position: "absolute", inset: 0 } : { aspectRatio: "3/4", width: "100%" }),
    [fill]
  );

  if (error || !proxiedSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-[#f0f0f0] ${className}`}
        style={containerStyle}
      >
        <div className="text-center p-4">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#e8e8e8] flex items-center justify-center">
            <Gamepad2 size={18} className="text-[#999]" />
          </div>
          <p className="text-[#999] text-xs leading-tight line-clamp-2">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={containerStyle}>
      {!loaded && (
        <div
          className="absolute inset-0 shimmer-bg"
          style={dominantColor ? { background: dominantColor } : undefined}
        />
      )}

      {srcSet ? (
        <img
          src={proxiedSrc}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes || "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"}
          className={`w-full h-full transition-all duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ ...imgStyle, position: fill ? "absolute" : "relative", inset: 0 }}
          onLoad={handleLoad}
          onError={() => setError(true)}
        />
      ) : (
        <Image
          src={proxiedSrc}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={objectPosition ? { objectPosition } : undefined}
          sizes={sizes || "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"}
          priority={priority}
          onError={() => setError(true)}
          onLoad={handleLoad}
          unoptimized
        />
      )}
    </div>
  );
}
