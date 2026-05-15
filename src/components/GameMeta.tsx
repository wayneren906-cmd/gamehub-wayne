import { Star, Monitor, Calendar, Building2, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { GameDetail } from "@/lib/mock-game-detail";

interface GameMetaProps {
  game: GameDetail;
}

export function GameMeta({ game }: GameMetaProps) {
  return (
    <div className="glass-card p-6 space-y-5">
      {/* Ratings */}
      <div className="flex gap-4">
        {game.rating > 0 && (
          <div className="flex-1 text-center p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
              <Star size={16} className="fill-yellow-400" />
              <span className="text-xl font-bold">{game.rating.toFixed(1)}</span>
            </div>
            <p className="text-[11px] text-zinc-500">玩家评分</p>
          </div>
        )}
        {game.metacritic > 0 && (
          <div className="flex-1 text-center p-3 rounded-lg bg-green-500/5 border border-green-500/10">
            <div className="text-xl font-bold text-green-400 mb-1">{game.metacritic}</div>
            <p className="text-[11px] text-zinc-500">Metacritic</p>
          </div>
        )}
      </div>

      {/* Info rows */}
      <div className="space-y-3">
        <MetaRow icon={Calendar} label="发行日期" value={game.released} />
        <MetaRow icon={Building2} label="开发商" value={game.developers?.map((d) => d.name).join(" · ")} />
        <MetaRow icon={Building2} label="发行商" value={game.publishers?.map((p) => p.name).join(" · ")} />
        <MetaRow icon={Monitor} label="平台" value={game.platforms?.map((p) => p.platform.name).join(" · ")} />
      </div>

      {/* Genres */}
      {game.genres && game.genres.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 text-zinc-500 mb-2">
            <Tag size={13} />
            <span className="text-xs">类型</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {game.genres.map((g) => (
              <Badge key={g.id} variant="secondary" className="text-xs">
                {g.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MetaRow({ icon: Icon, label, value }: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <Icon size={13} className="text-zinc-600 mt-0.5 flex-shrink-0" />
      <div>
        <span className="text-zinc-600 text-xs">{label}</span>
        <p className="text-zinc-300">{value || "—"}</p>
      </div>
    </div>
  );
}
