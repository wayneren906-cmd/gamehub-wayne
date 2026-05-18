import type { ContentItem } from "@/types/content";
import animalCrossingDesignTips from "./animal-crossing-design-tips";
import arknightsNewbieGuide from "./arknights-newbie-guide";
import eldenRing from "./elden-ring-beginner-guide";
import eldenRingDlcGuide from "./elden-ring-dlc-guide";
import fireEmblemEngageRing from "./fire-emblem-engage-ring-guide";
import gameForPeaceGun from "./game-for-peace-gun-guide";
import genshinBeginner from "./genshin-beginner-guide";
import honkaiImpactTeam from "./honkai-impact-team-guide";
import honkaiStarRailTeam from "./honkai-star-rail-team-guide";
import honorOfKingsRank from "./honor-of-kings-rank-guide";
import infinityNikkiStyling from "./infinity-nikki-styling-guide";
import lolWildRiftLane from "./lol-wild-rift-lane-guide";
import marioOdysseyMoon from "./mario-odyssey-moon-guide";
import metroidPrimeBoss from "./metroid-prime-boss-guide";
import narakaMobileCombat from "./naraka-mobile-combat-tips";
import palworldSurvival from "./palworld-survival-guide";
import pikmin4Dandori from "./pikmin-4-dandori-tips";
import pokemonSvShiny from "./pokemon-sv-shiny-guide";
import reverse1999Newbie from "./reverse-1999-newbie";
import smashBrosCombo from "./smash-bros-combo-guide";
import snowbreakWeapon from "./snowbreak-weapon-guide";
import splatoon3Beginner from "./splatoon-3-beginner-tips";
import wutheringWavesEcho from "./wuthering-waves-echo-guide";
import xenoblade3Class from "./xenoblade-3-class-guide";
import zeldaBotwTips from "./zelda-botw-tips";
import zeldaTotkShrine from "./zelda-totk-shrine-guide";
import zzzTeamBuilding from "./zzz-team-building";

const items: ContentItem[] = [
  animalCrossingDesignTips,
  arknightsNewbieGuide,
  eldenRing,
  eldenRingDlcGuide,
  fireEmblemEngageRing,
  gameForPeaceGun,
  genshinBeginner,
  honkaiImpactTeam,
  honkaiStarRailTeam,
  honorOfKingsRank,
  infinityNikkiStyling,
  lolWildRiftLane,
  marioOdysseyMoon,
  metroidPrimeBoss,
  narakaMobileCombat,
  palworldSurvival,
  pikmin4Dandori,
  pokemonSvShiny,
  reverse1999Newbie,
  smashBrosCombo,
  snowbreakWeapon,
  splatoon3Beginner,
  wutheringWavesEcho,
  xenoblade3Class,
  zeldaBotwTips,
  zeldaTotkShrine,
  zzzTeamBuilding,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default items;
