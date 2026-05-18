"use client";

interface GenreBannerProps {
  label: string;
  count: number;
  onClear: () => void;
}

export function GenreBanner({ label, count, onClear }: GenreBannerProps) {
  return (
    <div className="card p-5 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-[#15B04F] inline-block" />
          {label}
        </h2>
        <p className="text-[#999] text-sm mt-1">按类型浏览 {count} 款游戏</p>
      </div>
      <button
        onClick={onClear}
        className="text-xs text-[#999] hover:text-[#333] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#f0f0f0]"
      >
        清除分类
      </button>
    </div>
  );
}
