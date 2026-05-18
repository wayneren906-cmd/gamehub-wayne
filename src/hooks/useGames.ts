"use client";

import { useState, useMemo } from "react";
import type { Game, GameDetail } from "@/types/game";
import { ALL_GAMES, searchGames, getGamesByGenre } from "@/lib/games";
import type { Filters } from "@/components/FilterBar";

export function useGames(filters: Filters) {
  const filtered = useMemo(() => {
    let result: Game[] = ALL_GAMES;

    if (filters.search) {
      result = searchGames(filters.search);
    }

    if (filters.genres) {
      result = getGamesByGenre(filters.genres);
      if (filters.search) {
        // intersect search results with genre filter
        const ids = new Set(searchGames(filters.search).map((g) => g.slug));
        result = result.filter((g) => ids.has(g.slug));
      }
    }

    // Sort
    switch (filters.ordering) {
      case "-rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "-metacritic":
        result = [...result].sort((a, b) => b.metacritic - a.metacritic);
        break;
      case "-released":
        result = [...result].sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime());
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filters.search, filters.genres, filters.ordering]);

  return {
    games: filtered as Game[],
    loading: false,
    error: null,
    totalCount: filtered.length,
    refetch: () => {},
  };
}

export function useFeaturedGames() {
  const featured = useMemo(() => {
    return [...ALL_GAMES]
      .sort((a, b) => b.metacritic - a.metacritic)
      .slice(0, 5);
  }, []);

  return { featured, loading: false };
}
