import { WORKER_URL } from "@/lib/constants";

const MEDIA_PREFIX = "https://media.rawg.io/media/";

export function proxyImageUrl(url: string | undefined | null): string {
  if (!url) return "";
  if (url.startsWith(MEDIA_PREFIX)) {
    return `${WORKER_URL}/api/images/${url.replace(MEDIA_PREFIX, "")}`;
  }
  return url;
}

/** Generate responsive srcSet URLs at multiple widths */
export function proxyImageSrcSet(
  url: string | undefined | null,
  widths = [300, 600, 900]
): string | undefined {
  if (!url || !url.startsWith(MEDIA_PREFIX)) return undefined;
  const path = url.replace(MEDIA_PREFIX, "");
  const base = `${WORKER_URL}/api/images/${path}`;
  return widths.map((w) => `${base}?w=${w} ${w}w`).join(", ");
}

/** Generate a gradient placeholder color from a game name (deterministic hash) */
export function getPlaceholderColor(name: string): string {
  const colors = [
    "#1a0a3e", "#0a2e1a", "#2e0a1a", "#1a2e3e",
    "#2e2e0a", "#1a1a2e", "#2e1a2e", "#0a2e2e",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

/** Build a CSS gradient from a color for shimmer placeholder */
export function shimmerGradient(color: string): string {
  return `linear-gradient(110deg, ${color} 0%, ${color}aa 50%, ${color} 100%)`;
}

/** Format-aware image object for use with <picture> elements */
export function getFormatVariants(url: string | undefined | null): {
  fallback: string;
  sizes?: string;
} {
  return {
    fallback: proxyImageUrl(url),
    sizes: proxyImageSrcSet(url),
  };
}
