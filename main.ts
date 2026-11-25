import { mkdirSync, writeFileSync } from "node:fs";

const entry = "At 6 AM on a Saturday my alarm clock rang like an unpaid intern begging for a promotion from a boss who does not exist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
