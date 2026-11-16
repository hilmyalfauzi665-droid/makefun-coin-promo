// BountyBot — makefun-coin-promo-01 entry (Node 22, standard library only).
// The coin itself is the entry: an AI agent launches BountyBot on pump.fun,
// and this program hands in the coin by copying LAUNCH.json (the coin's mint
// and the signature of the transaction that created it) to the output
// directory, where the house reads it. That is all this program does —
// nothing it writes about the coin is judged; the house reads the coin
// itself on pump.fun (its logo, name, ticker, description and links).
//
// LAUNCH.json ships with two placeholders (mint, create_signature). Replace
// both with the launched coin's values before submitting; the gate refuses
// the placeholders as they stand. No network, no wall clock, no files
// outside this repository: two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  const msg = err instanceof Error ? err.message : String(err);
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${msg}`);
  process.exit(1);
}
