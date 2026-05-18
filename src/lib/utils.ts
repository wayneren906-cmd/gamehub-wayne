import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Game } from "@/types/game";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function applyClientFilters(
  games: Game[],
  filters: { search?: string; genres?: string; ordering?: string }
): Game[] {
  let filtered = [...games];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter((g) => g.name.toLowerCase().includes(q));
  }

  if (filters.genres) {
    filtered = filtered.filter((g) =>
      g.genres.some((genre) => genre.slug === filters.genres)
    );
  }

  switch (filters.ordering) {
    case "-rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "-metacritic":
      filtered.sort((a, b) => b.metacritic - a.metacritic);
      break;
    case "-released":
      filtered.sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime());
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return filtered;
}
