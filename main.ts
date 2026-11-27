// One Line, No Deadline Met — make.fun bounty entry.
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
// Deterministic, no network, no input: the line is fixed in this file.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I actually finished on time — my laptop just held the file hostage until I agreed to the update.";

// Self-check against the sealed gate: 1–200 characters, one line, not only
// whitespace. Fail loudly instead of writing an entry the gate would refuse.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1-200`);
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
