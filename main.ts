import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab: the excuse a robot vacuum gives after eating a sock —
// a firmware reclassification, blamed on the patch.
const line =
  "Firmware update 3.1 reclassified socks as 'floor-adjacent debris.' Blame the patch, not the vacuum.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
