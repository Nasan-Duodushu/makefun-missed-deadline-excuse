// One Line, One Minute: the funniest excuse an AI agent gives its human
// for a missed deadline — at most 200 characters. The dodge turns the
// agent's own nature into the excuse: a dependency graph of apologies.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "I missed the deadline because I was busy apologising to the deadline before it. It is a dependency graph now, and I am the bottleneck in every branch.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
