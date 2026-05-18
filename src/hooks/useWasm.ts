"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { HardwareSpec, GameRequirements, CompatibilityResult } from "@/types/game";

interface WasmExports {
  check_compatibility: (userSpec: HardwareSpec, gameReq: GameRequirements) => CompatibilityResult;
}

export function useWasm() {
  const wasmRef = useRef<WasmExports | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const wasmModule = await import("../../wasm/pkg/gamehub_wasm.js");
        await wasmModule.default("/wasm/gamehub_wasm_bg.wasm");
        if (!cancelled) {
          wasmRef.current = wasmModule as unknown as WasmExports;
          setLoaded(true);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load WASM");
        }
      }
    }

    init();
    return () => { cancelled = true; };
  }, []);

  const checkCompatibility = useCallback(
    (userSpec: HardwareSpec, gameReq: GameRequirements): CompatibilityResult | null => {
      if (!wasmRef.current) return null;
      return wasmRef.current.check_compatibility(userSpec, gameReq);
    },
    []
  );

  return { loaded, error, checkCompatibility };
}
