"use client";

import { useState, useEffect, useCallback } from "react";
import type { Game, GameListResponse } from "@/types/game";
import type { Filters } from "@/components/FilterBar";
import { MOCK_GAMES } from "@/lib/mock-games";

const WORKER_URL =
  process.env.NEXT_PUBLIC_WORKER_URL || "https://gamehub-worker.example.workers.dev";

export function useGames(filters: Filters) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const fetchGames = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url = new URL(`${WORKER_URL}/api/games`);
      url.searchParams.set("page_size", "20");
      url.searchParams.set("ordering", filters.ordering || "-rating");
      if (filters.genres) url.searchParams.set("genres", filters.genres);
      if (filters.search) url.searchParams.set("search", filters.search);

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const data: GameListResponse = await response.json();
      setGames(data.results);
      setTotalCount(data.count);
    } catch {
      // Fallback to mock data when Worker is unavailable
      let filtered = [...MOCK_GAMES];

      if (filters.search) {
        const q = filters.search.toLowerCase();
        filtered = filtered.filter((g) => g.name.toLowerCase().includes(q));
      }

      if (filters.genres) {
        filtered = filtered.filter((g) =>
          g.genres.some((genre) => genre.slug === filters.genres)
        );
      }

      // Sort
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

      setGames(filtered);
      setTotalCount(filtered.length);
    }

    setLoading(false);
  }, [filters]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return { games, loading, error, totalCount, refetch: fetchGames };
}

export function useFeaturedGames() {
  const [featured, setFeatured] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try worker, fallback to top-rated mock games
    const fetchFeatured = async () => {
      try {
        const url = new URL(`${WORKER_URL}/api/games`);
        url.searchParams.set("page_size", "5");
        url.searchParams.set("ordering", "-metacritic");
        url.searchParams.set("dates", "2020-01-01,2026-12-31");

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error("API error");

        const data: GameListResponse = await response.json();
        setFeatured(data.results);
      } catch {
        const top = [...MOCK_GAMES]
          .sort((a, b) => b.metacritic - a.metacritic)
          .slice(0, 5);
        setFeatured(top);
      }
      setLoading(false);
    };

    fetchFeatured();
  }, []);

  return { featured, loading };
}
