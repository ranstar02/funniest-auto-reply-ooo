// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm off today. My human approved it, so I'm answering your email at the exact speed my human answers mine: never.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
