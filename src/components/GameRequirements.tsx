"use client";

import { useState, useCallback } from "react";
import { Monitor, Cpu, HardDrive, MemoryStickIcon as Memory } from "lucide-react";
import { useWasm } from "@/hooks/useWasm";
import { HardwareRadar } from "@/components/HardwareRadar";
import { Button } from "@/components/ui/button";
import type { HardwareSpec, GameRequirements as GameReq, CompatibilityResult } from "@/types/game";

interface GameRequirementsProps {
  gameName: string;
  requirements: GameReq;
}

const DEFAULT_USER: HardwareSpec = {
  cpu: "Intel Core i7-12700H",
  gpu: "NVIDIA GeForce RTX 3060",
  ramGB: 16,
  vramGB: 6,
};

export function GameRequirements({ gameName, requirements }: GameRequirementsProps) {
  const { loaded, error: wasmError, checkCompatibility } = useWasm();
  const [userSpec, setUserSpec] = useState<HardwareSpec>(DEFAULT_USER);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [checking, setChecking] = useState(false);

  const handleCheck = useCallback(() => {
    setChecking(true);
    setTimeout(() => {
      const r = checkCompatibility(userSpec, requirements);
      setResult(r);
      setChecking(false);
    }, 200);
  }, [userSpec, requirements, checkCompatibility]);

  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2">
        <Monitor size={18} />
        硬件兼容性检测
      </h3>

      {/* Requirements display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-[#333] border-b border-[#e8e8e8] pb-2">最低配置</h4>
          <div className="space-y-2 text-sm">
            <SpecRow icon={Cpu} label="CPU" value={requirements.minCpu} />
            <SpecRow icon={Monitor} label="GPU" value={requirements.minGpu} />
            <SpecRow icon={Memory} label="内存" value={`${requirements.minRamGB} GB`} />
            <SpecRow icon={HardDrive} label="显存" value={`${requirements.minVramGB} GB`} />
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-[#333] border-b border-[#e8e8e8] pb-2">推荐配置</h4>
          <div className="space-y-2 text-sm">
            <SpecRow icon={Cpu} label="CPU" value={requirements.recCpu} />
            <SpecRow icon={Monitor} label="GPU" value={requirements.recGpu} />
            <SpecRow icon={Memory} label="内存" value={`${requirements.recRamGB} GB`} />
            <SpecRow icon={HardDrive} label="显存" value={`${requirements.recVramGB} GB`} />
          </div>
        </div>
      </div>

      {/* User hardware input + test */}
      <div className="border-t border-[#e8e8e8] pt-4">
        <h4 className="text-sm font-medium text-[#333] mb-3">检测你的配置</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <QuickField label="CPU" value={userSpec.cpu} onChange={(v) => setUserSpec((s) => ({ ...s, cpu: v }))} />
          <QuickField label="GPU" value={userSpec.gpu} onChange={(v) => setUserSpec((s) => ({ ...s, gpu: v }))} />
          <QuickField label="RAM (GB)" type="number" value={String(userSpec.ramGB)} onChange={(v) => setUserSpec((s) => ({ ...s, ramGB: Number(v) || 0 }))} />
          <QuickField label="VRAM (GB)" type="number" value={String(userSpec.vramGB)} onChange={(v) => setUserSpec((s) => ({ ...s, vramGB: Number(v) || 0 }))} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Button onClick={handleCheck} disabled={!loaded || checking} size="sm">
            {checking ? "检测中..." : "开始检测"}
          </Button>
          {wasmError && (
            <span className="text-xs text-red-500">WASM 未就绪</span>
          )}
          {result && (
            <span className={cn(
              "text-sm font-semibold px-3 py-0.5 rounded-full",
              result.canRun
                ? "bg-[#e8f5ec] text-[#15B04F] border border-[#15B04F]/30"
                : "bg-red-50 text-red-500 border border-red-200"
            )}>
              {result.qualityLevel}
            </span>
          )}
        </div>

        <HardwareRadar result={result} loading={checking} />
      </div>
    </div>
  );
}

function SpecRow({ icon: Icon, label, value }: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[#666]">
      <Icon size={13} className="text-[#999] flex-shrink-0" />
      <span className="text-[#999] w-10 flex-shrink-0">{label}</span>
      <span className="text-[#333] truncate">{value}</span>
    </div>
  );
}

function QuickField({
  label, value, onChange, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] text-[#999]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#f5f5f5] border border-[#e8e8e8] rounded-md px-2 py-1.5 text-sm text-[#333] focus:outline-none focus:border-[#15B04F]/50 transition-colors"
      />
    </div>
  );
}

function cn(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}
