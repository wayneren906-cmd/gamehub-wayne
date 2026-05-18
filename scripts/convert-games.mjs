/**
 * Converts mock-game-detail.ts + mock-games.ts → content/games/*.json
 * Usage: npx tsx scripts/convert-games.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const contentDir = join(root, "content", "games");

// Import the actual modules using file:// URLs for Windows compat
const detailMod = await import(pathToFileURL(join(root, "src", "lib", "mock-game-detail.ts")).href);
const gamesMod = await import(pathToFileURL(join(root, "src", "lib", "mock-games.ts")).href);

const MOCK_GAME_DETAILS = detailMod.MOCK_GAME_DETAILS;
const MOCK_GAMES = gamesMod.MOCK_GAMES;

// Build a map from mock-games for extra fields
const gameMap = new Map();
for (const g of MOCK_GAMES) {
  gameMap.set(g.slug, g);
}

mkdirSync(contentDir, { recursive: true });

let count = 0;
for (const [slug, detail] of Object.entries(MOCK_GAME_DETAILS)) {
  const base = gameMap.get(slug) || {};
  // Build clean JSON: merge base game fields with detail, exclude empty stuff
  const id = base.id || Math.abs(slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0));
  const game = {
    id,
    slug,
    name: detail.name || base.name,
    released: detail.released || base.released,
    background_image: detail.background_image || base.background_image,
    hero_image: detail.hero_image || base.hero_image,
    rating: detail.rating ?? base.rating,
    metacritic: detail.metacritic ?? base.metacritic,
    genres: detail.genres || base.genres || [],
    platforms: detail.platforms || base.platforms || [],
    esrb_rating: detail.esrb_rating || base.esrb_rating || null,
    description_raw: detail.description_raw || "",
    developers: detail.developers || [],
    publishers: detail.publishers || [],
    tags: detail.tags || base.tags || [],
    gameplay: detail.gameplay || "",
    recommendation: detail.recommendation || "",
    requirements: detail.requirements || null,
    reviews: detail.reviews || [],
    screenshots: detail.screenshots || [],
    news: detail.news || [],
  };
  const filePath = join(contentDir, `${slug}.json`);
  writeFileSync(filePath, JSON.stringify(game, null, 2), "utf-8");
  count++;
  console.log(`  ✓ ${slug}.json`);
}

console.log(`\nDone! Created ${count} game JSON files in content/games/`);
