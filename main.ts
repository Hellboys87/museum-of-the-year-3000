import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Group chat, c. 2025. Twelve friends performed a 4,000-message ritual to choose a restaurant, then ate alone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
