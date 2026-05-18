"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Search, SlidersHorizontal, X, Heart } from "lucide-react";
import { GENRES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface Filters {
  genres: string;
  ordering: string;
  search: string;
}

interface FilterBarProps {
  onFiltersChange: (filters: Filters) => void;
  initialFilters?: Partial<Filters>;
  favoritesCount?: number;
  onFavoritesToggle?: () => void;
  showFavorites?: boolean;
  gameNames?: string[];
  onSuggestionClick?: (name: string) => void;
}

const ORDER_OPTIONS = [
  { label: "热度", value: "-rating" },
  { label: "评分", value: "-metacritic" },
  { label: "新发行", value: "-released" },
  { label: "名称", value: "name" },
];

export function FilterBar({
  onFiltersChange,
  initialFilters = {},
  favoritesCount = 0,
  onFavoritesToggle,
  showFavorites = false,
  gameNames,
  onSuggestionClick,
}: FilterBarProps) {
  const [search, setSearch] = useState(initialFilters.search || "");
  const [activeGenre, setActiveGenre] = useState(initialFilters.genres || "");
  const [activeOrder, setActiveOrder] = useState(initialFilters.ordering || "-rating");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const synced = useRef(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!synced.current) {
      setSearch(initialFilters.search || "");
      setActiveGenre(initialFilters.genres || "");
      setActiveOrder(initialFilters.ordering || "-rating");
      synced.current = true;
    }
  }, [initialFilters.search, initialFilters.genres, initialFilters.ordering]);

  const syncUrl = useCallback((filters: Filters) => {
    const params = new URLSearchParams();
    if (filters.search) params.set("q", filters.search);
    if (filters.genres) params.set("genre", filters.genres);
    if (filters.ordering && filters.ordering !== "-rating") params.set("sort", filters.ordering);
    const qs = params.toString();
    const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
  }, []);

  const emit = useCallback(
    (overrides: Partial<Filters>) => {
      const current = { genres: activeGenre, ordering: activeOrder, search };
      const merged = { ...current, ...overrides };
      syncUrl(merged);
      onFiltersChange(merged);
    },
    [activeGenre, activeOrder, search, onFiltersChange, syncUrl]
  );

  const searchDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (value: string) => {
    setSearch(value);
    setShowSuggestions(true);
    if (searchDebounce.current) clearTimeout(searchDebounce.current);
    searchDebounce.current = setTimeout(() => {
      emit({ search: value });
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (searchDebounce.current) clearTimeout(searchDebounce.current);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const suggestions =
    gameNames && search
      ? gameNames.filter((n) => n.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
      : [];

  const handleGenre = (value: string) => {
    const newGenre = activeGenre === value ? "" : value;
    setActiveGenre(newGenre);
    emit({ genres: newGenre });
  };

  const handleOrder = (value: string) => {
    setActiveOrder(value);
    emit({ ordering: value });
  };

  const clearAll = () => {
    setSearch("");
    setActiveGenre("");
    setActiveOrder("-rating");
    window.history.replaceState(null, "", window.location.pathname);
    onFiltersChange({ genres: "", ordering: "-rating", search: "" });
  };

  const hasFilters = search || activeGenre || activeOrder !== "-rating";

  return (
    <div className="card p-4 space-y-3">
      {/* Search + Order row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1" ref={searchRef}>
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="搜索游戏..."
            className="w-full bg-[#f5f5f5] border border-[#e8e8e8] rounded-lg pl-9 pr-4 py-2 text-sm text-[#1a1a1a] placeholder:text-[#999] focus:outline-none focus:border-[#15B04F]/50 transition-colors"
          />
          {search && (
            <button
              onClick={() => {
                handleSearch("");
                setShowSuggestions(false);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#333] cursor-pointer"
            >
              <X size={14} />
            </button>
          )}

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e8e8e8] rounded-lg shadow-lg overflow-hidden z-20">
              {suggestions.map((name) => (
                <button
                  key={name}
                  onClick={() => {
                    setSearch(name);
                    setShowSuggestions(false);
                    if (searchDebounce.current) clearTimeout(searchDebounce.current);
                    emit({ search: name });
                    onSuggestionClick?.(name);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-[#333] hover:bg-[#f5f5f5] hover:text-[#15B04F] transition-colors cursor-pointer"
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {onFavoritesToggle && (
            <button
              onClick={onFavoritesToggle}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40",
                showFavorites
                  ? "bg-red-50 text-red-500 border border-red-200"
                  : "bg-[#f5f5f5] text-[#666] border border-[#e8e8e8] hover:border-[#ccc]"
              )}
            >
              <Heart size={13} className={showFavorites ? "fill-red-500" : ""} />
              收藏 {favoritesCount > 0 && `(${favoritesCount})`}
            </button>
          )}
          {ORDER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleOrder(opt.value)}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40",
                activeOrder === opt.value
                  ? "bg-[#e8f5ec] text-[#15B04F] border border-[#15B04F]/30"
                  : "bg-[#f5f5f5] text-[#666] border border-[#e8e8e8] hover:border-[#ccc]"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genres row */}
      <div className="flex items-center gap-2 flex-wrap">
        <SlidersHorizontal size={13} className="text-[#999] flex-shrink-0" />
        {GENRES.map((g) => (
          <button
            key={g.value}
            onClick={() => handleGenre(g.value)}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15B04F]/40",
              activeGenre === g.value
                ? "bg-[#e8f5ec] text-[#15B04F] border border-[#15B04F]/30"
                : "bg-[#f5f5f5] text-[#999] border border-transparent hover:text-[#666] hover:border-[#e8e8e8]"
            )}
          >
            {g.label}
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={clearAll}
            className="px-2.5 py-1 rounded-full text-xs text-[#999] hover:text-red-500 transition-colors border border-transparent hover:border-red-200"
          >
            清除筛选
          </button>
        )}
      </div>
    </div>
  );
}
