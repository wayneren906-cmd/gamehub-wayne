"use client";

import { useState, useCallback } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GENRES } from "@/lib/constants";

export interface Filters {
  genres: string;
  ordering: string;
  search: string;
}

interface FilterBarProps {
  onFiltersChange: (filters: Filters) => void;
}

const ORDER_OPTIONS = [
  { label: "热度", value: "-rating" },
  { label: "评分", value: "-metacritic" },
  { label: "新发行", value: "-released" },
  { label: "名称", value: "name" },
];

export function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [search, setSearch] = useState("");
  const [activeGenre, setActiveGenre] = useState("");
  const [activeOrder, setActiveOrder] = useState("-rating");

  const emit = useCallback(
    (overrides: Partial<Filters>) => {
      const current = { genres: activeGenre, ordering: activeOrder, search };
      const merged = { ...current, ...overrides };
      onFiltersChange(merged);
    },
    [activeGenre, activeOrder, search, onFiltersChange]
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    const overrides: Partial<Filters> = { search: value };
    emit(overrides);
  };

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
    onFiltersChange({ genres: "", ordering: "-rating", search: "" });
  };

  const hasFilters = search || activeGenre || activeOrder !== "-rating";

  return (
    <div className="glass-card p-4 space-y-3">
      {/* Search + Order row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="搜索游戏..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
          />
          {search && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {ORDER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleOrder(opt.value)}
              className={cn(
                "px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap",
                activeOrder === opt.value
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:border-white/20"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genres row */}
      <div className="flex items-center gap-2 flex-wrap">
        <SlidersHorizontal size={13} className="text-zinc-500 flex-shrink-0" />
        {GENRES.map((g) => (
          <button
            key={g.value}
            onClick={() => handleGenre(g.value)}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs transition-colors",
              activeGenre === g.value
                ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                : "bg-white/5 text-zinc-500 border border-transparent hover:text-zinc-300 hover:border-white/10"
            )}
          >
            {g.label}
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={clearAll}
            className="px-2.5 py-1 rounded-full text-xs text-zinc-500 hover:text-red-400 transition-colors border border-transparent hover:border-red-500/20"
          >
            清除筛选
          </button>
        )}
      </div>
    </div>
  );
}

function cn(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}
