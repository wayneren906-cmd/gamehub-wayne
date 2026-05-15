"use client";

import { useState, useEffect, useCallback } from "react";
import type { Game } from "@/types/game";
import { getGameDetail, type GameDetail } from "@/lib/mock-game-detail";

const WORKER_URL =
  process.env.NEXT_PUBLIC_WORKER_URL || "https://gamehub-worker.example.workers.dev";

export function useGameDetail(slug: string) {
  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGame = useCallback(async () => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${WORKER_URL}/api/games/${slug}`);
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const data: Game = await response.json();

      // Merge API data with local mock detail (reviews, requirements)
      const mockDetail = getGameDetail(slug);
      if (mockDetail) {
        setGame({ ...data, ...mockDetail, background_image: data.background_image || mockDetail.background_image });
      } else {
        setGame(data as GameDetail);
      }
    } catch {
      // Fallback to mock detail
      const mock = getGameDetail(slug);
      if (mock) {
        setGame(mock);
      } else {
        setError("游戏未找到");
      }
    }

    setLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchGame();
  }, [fetchGame]);

  return { game, loading, error, refetch: fetchGame };
}
