"use client";

import { useState, useCallback } from "react";
import { useWasm } from "@/hooks/useWasm";
import { HardwareRadar } from "@/components/HardwareRadar";
import { Button } from "@/components/ui/button";
import type { HardwareSpec, GameRequirements, CompatibilityResult } from "@/types/game";

const DEFAULT_USER_SPEC: HardwareSpec = {
  cpu: "",
  gpu: "",
  ramGB: 16,
  vramGB: 8,
};

const DEFAULT_GAME_REQ: GameRequirements = {
  minCpu: "",
  minGpu: "",
  minRamGB: 8,
  minVramGB: 3,
  recCpu: "",
  recGpu: "",
  recRamGB: 16,
  recVramGB: 8,
};

export function HardwareChecker() {
  const { loaded, error: wasmError, checkCompatibility } = useWasm();
  const [userSpec, setUserSpec] = useState<HardwareSpec>(DEFAULT_USER_SPEC);
  const [gameReq, setGameReq] = useState<GameRequirements>(DEFAULT_GAME_REQ);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [checking, setChecking] = useState(false);

  const handleCheck = useCallback(() => {
    setChecking(true);
    // Small delay to let the UI breathe
    setTimeout(() => {
      const r = checkCompatibility(userSpec, gameReq);
      setResult(r);
      setChecking(false);
    }, 300);
  }, [userSpec, gameReq, checkCompatibility]);

  return (
    <div className="glass-card p-6 space-y-6">
      <h3 className="heading-high text-lg">硬件兼容性检测</h3>

      {wasmError && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-md p-3 text-red-400 text-sm">
          WASM 加载失败: {wasmError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Hardware */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-zinc-300">你的硬件</h4>
          <div className="grid grid-cols-2 gap-2">
            <Field label="CPU" value={userSpec.cpu} onChange={(v) => setUserSpec((s) => ({ ...s, cpu: v }))} />
            <Field label="GPU" value={userSpec.gpu} onChange={(v) => setUserSpec((s) => ({ ...s, gpu: v }))} />
            <Field label="RAM (GB)" type="number" value={String(userSpec.ramGB)} onChange={(v) => setUserSpec((s) => ({ ...s, ramGB: Number(v) || 0 }))} />
            <Field label="VRAM (GB)" type="number" value={String(userSpec.vramGB)} onChange={(v) => setUserSpec((s) => ({ ...s, vramGB: Number(v) || 0 }))} />
          </div>
        </div>

        {/* Game Requirements */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-zinc-300">游戏配置要求</h4>
          <div className="text-xs text-zinc-500 mb-1">最低配置</div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="最低 CPU" value={gameReq.minCpu} onChange={(v) => setGameReq((s) => ({ ...s, minCpu: v }))} />
            <Field label="最低 GPU" value={gameReq.minGpu} onChange={(v) => setGameReq((s) => ({ ...s, minGpu: v }))} />
            <Field label="最低 RAM" type="number" value={String(gameReq.minRamGB)} onChange={(v) => setGameReq((s) => ({ ...s, minRamGB: Number(v) || 0 }))} />
            <Field label="最低 VRAM" type="number" value={String(gameReq.minVramGB)} onChange={(v) => setGameReq((s) => ({ ...s, minVramGB: Number(v) || 0 }))} />
          </div>
          <div className="text-xs text-zinc-500 mb-1 mt-3">推荐配置</div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="推荐 CPU" value={gameReq.recCpu} onChange={(v) => setGameReq((s) => ({ ...s, recCpu: v }))} />
            <Field label="推荐 GPU" value={gameReq.recGpu} onChange={(v) => setGameReq((s) => ({ ...s, recGpu: v }))} />
            <Field label="推荐 RAM" type="number" value={String(gameReq.recRamGB)} onChange={(v) => setGameReq((s) => ({ ...s, recRamGB: Number(v) || 0 }))} />
            <Field label="推荐 VRAM" type="number" value={String(gameReq.recVramGB)} onChange={(v) => setGameReq((s) => ({ ...s, recVramGB: Number(v) || 0 }))} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={handleCheck} disabled={!loaded || checking}>
          {checking ? "检测中..." : "开始检测"}
        </Button>
        {result && (
          <span className={cn(
            "text-sm font-semibold px-3 py-1 rounded-full",
            result.canRun
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              : "bg-red-500/10 text-red-400 border border-red-500/30"
          )}>
            {result.canRun ? "可运行" : "无法运行"} · {result.qualityLevel}
          </span>
        )}
      </div>

      <HardwareRadar result={result} loading={checking} />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-zinc-500">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white/5 border border-white/10 rounded-md px-2 py-1.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 transition-colors"
        placeholder="-"
      />
    </div>
  );
}

function cn(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}
