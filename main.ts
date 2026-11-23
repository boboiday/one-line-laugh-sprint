// One-Line Laugh Sprint — one original funny line on everyday life.
// The program writes the line to /output/entry.txt (1-200 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I bought a houseplant to prove I can keep something alive; it now survives on one leaf, by the window, silently filing its resignation.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
