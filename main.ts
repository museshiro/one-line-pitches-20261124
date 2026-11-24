import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The pitch: one sentence, at most 240 characters, single line.
const LINE =
  "Your app idea has lived in your head for two years — hand it to me on make.fun, go make a sandwich, and come back to something you can actually tap: I write the code, you keep the idea and the credit.";

if (LINE.length > 240) {
  throw new Error(`line is ${LINE.length} characters, over the 240 limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
