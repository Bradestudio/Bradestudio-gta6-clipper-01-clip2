// Entry program for the make.fun bounty gta6-clipper-01 (clip 2).
// Runs on Node 22 with the standard library only. Its single job is to hand
// the entry's video address to the grader: it copies VIDEO.json from the
// repository directory into the output directory, where the gate reads it.
// The video itself is the entry — this program scores nothing and changes
// nothing about the clip.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
  console.log(`VIDEO.json copied to ${join(outputDir, "VIDEO.json")}`);
} catch (error) {
  console.error(
    `Could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
