"use client";

interface AmbientGlowProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export function AmbientGlow({
  primaryColor = "#6366f1",
  secondaryColor = "#8b5cf6",
}: AmbientGlowProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="glow-orb w-[600px] h-[600px] -top-1/4 -right-1/4 animate-glow-pulse"
        style={{
          background: `radial-gradient(circle, ${primaryColor}30 0%, transparent 70%)`,
        }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] -bottom-1/4 -left-1/5 animate-glow-pulse"
        style={{
          background: `radial-gradient(circle, ${secondaryColor}25 0%, transparent 70%)`,
          animationDelay: "-2s",
          animationDuration: "5s",
        }}
      />
    </div>
  );
}
