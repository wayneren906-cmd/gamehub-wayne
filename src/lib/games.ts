import type { GameDetail } from "@/types/game";
import allGames from "../../content/games/all-games";

const games: GameDetail[] = allGames as GameDetail[];

export const ALL_GAMES: GameDetail[] = games;

const bySlug = new Map<string, GameDetail>();
for (const g of games) bySlug.set(g.slug, g);

export function getGame(slug: string): GameDetail | undefined {
  return bySlug.get(slug);
}

export function getGamesByGenre(genreSlug: string): GameDetail[] {
  return games.filter((g) => g.genres.some((gen) => gen.slug === genreSlug));
}

export function getSimilarGames(slug: string, limit = 6): GameDetail[] {
  const target = bySlug.get(slug);
  if (!target) return [];
  const targetGenreSlugs = new Set(target.genres.map((g) => g.slug));
  return games
    .filter((g) => g.slug !== slug)
    .map((g) => ({
      game: g,
      score: g.genres.filter((gen) => targetGenreSlugs.has(gen.slug)).length,
    }))
    .sort((a, b) => b.score - a.score || b.game.metacritic - a.game.metacritic)
    .slice(0, limit)
    .map((x) => x.game);
}

export function getLatestGames(limit = 10): GameDetail[] {
  return [...games]
    .sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime())
    .slice(0, limit);
}

export function getTopRatedGames(limit = 10): GameDetail[] {
  return [...games].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getMostDiscussed(limit = 10): GameDetail[] {
  return [...games]
    .sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0))
    .slice(0, limit);
}

export function searchGames(q: string): GameDetail[] {
  const lower = q.toLowerCase();
  return games.filter(
    (g) =>
      g.name.toLowerCase().includes(lower) ||
      g.genres.some((gen) => gen.name.includes(lower)) ||
      g.tags?.some((t) => t.name.includes(lower)) ||
      g.description_raw?.toLowerCase().includes(lower)
  );
}

export function getAllGenres(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const g of games) {
    for (const gen of g.genres) {
      const entry = map.get(gen.slug) || { name: gen.name, slug: gen.slug, count: 0 };
      entry.count++;
      map.set(gen.slug, entry);
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}
