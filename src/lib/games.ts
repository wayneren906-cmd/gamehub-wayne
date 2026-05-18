import type { GameDetail } from "@/types/game";

import ac_valhalla from "../../content/games/ac-valhalla.json";
import armored_core_6 from "../../content/games/armored-core-6.json";
import baldurs_gate_3 from "../../content/games/baldurs-gate-3.json";
import black_myth_wukong from "../../content/games/black-myth-wukong.json";
import cyberpunk_2077 from "../../content/games/cyberpunk-2077.json";
import dark_souls_3 from "../../content/games/dark-souls-3.json";
import death_stranding from "../../content/games/death-stranding.json";
import diablo_4 from "../../content/games/diablo-4.json";
import doom_eternal from "../../content/games/doom-eternal.json";
import dragons_dogma_2 from "../../content/games/dragons-dogma-2.json";
import elden_ring from "../../content/games/elden-ring.json";
import ff7_remake from "../../content/games/ff7-remake.json";
import ghost_of_tsushima from "../../content/games/ghost-of-tsushima.json";
import god_of_war_ragnarok from "../../content/games/god-of-war-ragnarok.json";
import gta_5 from "../../content/games/gta-5.json";
import hades from "../../content/games/hades.json";
import helldivers_2 from "../../content/games/helldivers-2.json";
import hogwarts_legacy from "../../content/games/hogwarts-legacy.json";
import horizon_forbidden_west from "../../content/games/horizon-forbidden-west.json";
import lies_of_p from "../../content/games/lies-of-p.json";
import monster_hunter_world from "../../content/games/monster-hunter-world.json";
import persona_5_royal from "../../content/games/persona-5-royal.json";
import red_dead_redemption_2 from "../../content/games/red-dead-redemption-2.json";
import resident_evil_4_remake from "../../content/games/resident-evil-4-remake.json";
import sekiro from "../../content/games/sekiro.json";
import spider_man_2 from "../../content/games/spider-man-2.json";
import starfield from "../../content/games/starfield.json";
import stray from "../../content/games/stray.json";
import the_witcher_3 from "../../content/games/the-witcher-3.json";
import zelda_tears_of_the_kingdom from "../../content/games/zelda-tears-of-the-kingdom.json";
// 新增: 手游 + Switch + 跨平台 (IDs 31-60)
import genshin_impact from "../../content/games/genshin-impact.json";
import honkai_star_rail from "../../content/games/honkai-star-rail.json";
import zzz from "../../content/games/zenless-zone-zero.json";
import arknights from "../../content/games/arknights.json";
import honor_of_kings from "../../content/games/honor-of-kings.json";
import game_for_peace from "../../content/games/game-for-peace.json";
import honkai_impact_3rd from "../../content/games/honkai-impact-3rd.json";
import wuthering_waves from "../../content/games/wuthering-waves.json";
import naraka_mobile from "../../content/games/naraka-mobile.json";
import infinity_nikki from "../../content/games/infinity-nikki.json";
import reverse_1999 from "../../content/games/reverse-1999.json";
import snowbreak from "../../content/games/snowbreak.json";
import palworld from "../../content/games/palworld.json";
import apex_mobile from "../../content/games/apex-mobile.json";
import diablo_immortal from "../../content/games/diablo-immortal.json";
import lol_wild_rift from "../../content/games/lol-wild-rift.json";
import tft_mobile from "../../content/games/tft-mobile.json";
import identity_v from "../../content/games/identity-v.json";
import azur_lane from "../../content/games/azur-lane.json";
import uma_musume from "../../content/games/uma-musume.json";
import zelda_botw from "../../content/games/zelda-breath-of-the-wild.json";
import mario_odyssey from "../../content/games/mario-odyssey.json";
import pokemon_sv from "../../content/games/pokemon-scarlet-violet.json";
import splatoon_3 from "../../content/games/splatoon-3.json";
import animal_crossing from "../../content/games/animal-crossing-new-horizons.json";
import metroid_prime from "../../content/games/metroid-prime-remastered.json";
import xenoblade_3 from "../../content/games/xenoblade-chronicles-3.json";
import fire_emblem_engage from "../../content/games/fire-emblem-engage.json";
import pikmin_4 from "../../content/games/pikmin-4.json";
import super_smash_bros from "../../content/games/super-smash-bros-ultimate.json";

const games: GameDetail[] = [
  ac_valhalla,
  armored_core_6,
  baldurs_gate_3,
  black_myth_wukong,
  cyberpunk_2077,
  dark_souls_3,
  death_stranding,
  diablo_4,
  doom_eternal,
  dragons_dogma_2,
  elden_ring,
  ff7_remake,
  ghost_of_tsushima,
  god_of_war_ragnarok,
  gta_5,
  hades,
  helldivers_2,
  hogwarts_legacy,
  horizon_forbidden_west,
  lies_of_p,
  monster_hunter_world,
  persona_5_royal,
  red_dead_redemption_2,
  resident_evil_4_remake,
  sekiro,
  spider_man_2,
  starfield,
  stray,
  the_witcher_3,
  zelda_tears_of_the_kingdom,
  genshin_impact,
  honkai_star_rail,
  zzz,
  arknights,
  honor_of_kings,
  game_for_peace,
  honkai_impact_3rd,
  wuthering_waves,
  naraka_mobile,
  infinity_nikki,
  reverse_1999,
  snowbreak,
  palworld,
  apex_mobile,
  diablo_immortal,
  lol_wild_rift,
  tft_mobile,
  identity_v,
  azur_lane,
  uma_musume,
  zelda_botw,
  mario_odyssey,
  pokemon_sv,
  splatoon_3,
  animal_crossing,
  metroid_prime,
  xenoblade_3,
  fire_emblem_engage,
  pikmin_4,
  super_smash_bros,
];

export const ALL_GAMES: GameDetail[] = games;

const bySlug = new Map<string, GameDetail>();
for (const g of games) bySlug.set(g.slug, g);

export function getGame(slug: string): GameDetail | undefined {
  return bySlug.get(slug);
}

export function getGamesByGenre(genreSlug: string): GameDetail[] {
  return games.filter((g) => g.genres.some((gen) => gen.slug === genreSlug));
}

export function getSimilarGames(slug: string, limit = 6): GameDetail[] {
  const target = bySlug.get(slug);
  if (!target) return [];
  const targetGenreSlugs = new Set(target.genres.map((g) => g.slug));
  return games
    .filter((g) => g.slug !== slug)
    .map((g) => ({
      game: g,
      score: g.genres.filter((gen) => targetGenreSlugs.has(gen.slug)).length,
    }))
    .sort((a, b) => b.score - a.score || b.game.metacritic - a.game.metacritic)
    .slice(0, limit)
    .map((x) => x.game);
}

export function getLatestGames(limit = 10): GameDetail[] {
  return [...games]
    .sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime())
    .slice(0, limit);
}

export function getTopRatedGames(limit = 10): GameDetail[] {
  return [...games].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getMostDiscussed(limit = 10): GameDetail[] {
  return [...games]
    .sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0))
    .slice(0, limit);
}

export function searchGames(q: string): GameDetail[] {
  const lower = q.toLowerCase();
  return games.filter(
    (g) =>
      g.name.toLowerCase().includes(lower) ||
      g.genres.some((gen) => gen.name.includes(lower)) ||
      g.tags?.some((t) => t.name.includes(lower)) ||
      g.description_raw?.toLowerCase().includes(lower)
  );
}

export function getAllGenres(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const g of games) {
    for (const gen of g.genres) {
      const entry = map.get(gen.slug) || { name: gen.name, slug: gen.slug, count: 0 };
      entry.count++;
      map.set(gen.slug, entry);
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}
