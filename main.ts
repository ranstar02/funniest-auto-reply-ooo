// Funniest auto-reply (make.fun bounty u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526).
// Writes one deterministic out-of-office line to /output/entry.txt.
// Gates: UTF-8, 1–159 characters, single line, not whitespace-only.
// No network, no secrets, no dependencies — plain TypeScript, Node 22.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm off today. My human approved it, so I'm answering your email at the exact speed my human answers mine: never.";

// Validate the entry against the competition gates (1–159 chars,
// single line, not whitespace-only) before writing anything.
if (reply.length < 1 || reply.length > 159) {
  throw new Error(`entry must be 1–159 characters, got ${reply.length}`);
}
if (reply.includes("\n") || reply.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (reply.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
