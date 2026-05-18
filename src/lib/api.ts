import { Game, GameListResponse } from "@/types/game";
import { WORKER_URL } from "@/lib/constants";

async function apiFetch<T>(
  path: string,
  params?: Record<string, string>
): Promise<T> {
  const url = new URL(`${WORKER_URL}/api${path}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v) url.searchParams.set(k, v);
    });
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.error || `API error: ${response.status}`
    );
  }

  return response.json();
}

export async function getGames(params?: {
  page?: number;
  page_size?: number;
  genres?: string;
  search?: string;
  ordering?: string;
  dates?: string;
}): Promise<GameListResponse> {
  const searchParams: Record<string, string> = {};
  if (params?.page) searchParams.page = String(params.page);
  if (params?.page_size) searchParams.page_size = String(params.page_size);
  if (params?.genres) searchParams.genres = params.genres;
  if (params?.search) searchParams.search = params.search;
  if (params?.ordering) searchParams.ordering = params.ordering;
  if (params?.dates) searchParams.dates = params.dates;

  return apiFetch<GameListResponse>("/games", searchParams);
}

export async function getGame(slug: string): Promise<Game> {
  return apiFetch<Game>(`/games/${slug}`);
}

export async function searchGames(query: string): Promise<GameListResponse> {
  return apiFetch<GameListResponse>("/games", { search: query, page_size: "10" });
}
