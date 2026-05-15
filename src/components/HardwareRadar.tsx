"use client";

import { useEffect, useRef } from "react";
import type { CompatibilityResult } from "@/types/game";

interface HardwareRadarProps {
  result: CompatibilityResult | null;
  loading?: boolean;
}

const LABELS: Record<keyof CompatibilityResult["radarData"], string> = {
  vram: "显存",
  textureFill: "纹理填充",
  floatCompute: "浮点计算",
  memory: "内存",
  diskSpeed: "磁盘速度",
  cpuCores: "CPU 核心",
};

function drawRadar(
  ctx: CanvasRenderingContext2D,
  data: CompatibilityResult["radarData"],
  width: number,
  height: number
) {
  const keys = Object.keys(data) as (keyof typeof data)[];
  const count = keys.length;
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy) - 40;

  ctx.clearRect(0, 0, width, height);

  // Draw grid
  for (let level = 1; level <= 5; level++) {
    const r = (radius / 5) * level;
    ctx.beginPath();
    for (let i = 0; i <= count; i++) {
      const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axes
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.stroke();
  }

  // Draw data polygon
  ctx.beginPath();
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const value = data[keys[i]] / 100;
    const r = radius * value;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(99,102,241,0.25)";
  ctx.fill();
  ctx.strokeStyle = "rgba(99,102,241,0.8)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw data points
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const value = data[keys[i]] / 100;
    const r = radius * value;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#818cf8";
    ctx.fill();
  }

  // Draw labels
  ctx.fillStyle = "#a1a1aa";
  ctx.font = "12px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const labelR = radius + 22;
    const x = cx + labelR * Math.cos(angle);
    const y = cy + labelR * Math.sin(angle);
    ctx.fillText(LABELS[keys[i]], x, y);
  }
}

export function HardwareRadar({ result, loading }: HardwareRadarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    if (loading) {
      ctx.fillStyle = "#a1a1aa";
      ctx.font = "14px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("计算中...", rect.width / 2, rect.height / 2);
      return;
    }

    if (!result) {
      ctx.fillStyle = "#52525b";
      ctx.font = "14px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("输入硬件信息以查看兼容性", rect.width / 2, rect.height / 2);
      return;
    }

    drawRadar(ctx, result.radarData, rect.width, rect.height);
  }, [result, loading]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full aspect-square max-w-[320px]"
    />
  );
}
