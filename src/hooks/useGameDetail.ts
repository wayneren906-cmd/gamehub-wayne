"use client";

import { useState, useEffect, useCallback } from "react";
import type { GameDetail } from "@/types/game";
import { getGame } from "@/lib/games";

export function useGameDetail(slug: string) {
  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGame = useCallback(async () => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    // Simulate async load for smooth UI transitions
    await new Promise((r) => setTimeout(r, 100));
    const found = getGame(slug);
    if (found) {
      setGame(found);
    } else {
      setError("游戏未找到");
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    fetchGame();
  }, [fetchGame]);

  return { game, loading, error, refetch: fetchGame };
}
