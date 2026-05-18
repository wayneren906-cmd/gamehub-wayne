import { Star, Monitor, Calendar, Building2, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { GameDetail } from "@/types/game";

interface GameMetaProps {
  game: GameDetail;
}

export function GameMeta({ game }: GameMetaProps) {
  return (
    <div className="card p-6 space-y-5">
      {/* Ratings */}
      <div className="flex gap-4">
        {game.rating > 0 && (
          <div className="flex-1 text-center p-3 rounded-lg bg-[#fff8f0] border border-[#ff9500]/15">
            <div className="flex items-center justify-center gap-1 text-[#ff9500] mb-1">
              <Star size={16} className="fill-[#ff9500]" />
              <span className="text-xl font-bold">{game.rating.toFixed(1)}</span>
            </div>
            <p className="text-[11px] text-[#999]">玩家评分</p>
          </div>
        )}
        {game.metacritic > 0 && (
          <div className="flex-1 text-center p-3 rounded-lg bg-[#e8f5ec] border border-[#15B04F]/10">
            <div className="text-xl font-bold text-[#15B04F] mb-1">{game.metacritic}</div>
            <p className="text-[11px] text-[#999]">Metacritic</p>
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
          <div className="flex items-center gap-1.5 text-[#999] mb-2">
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
      <Icon size={13} className="text-[#999] mt-0.5 flex-shrink-0" />
      <div>
        <span className="text-[#999] text-xs">{label}</span>
        <p className="text-[#333]">{value || "—"}</p>
      </div>
    </div>
  );
}
