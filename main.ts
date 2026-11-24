/**
 * The Funniest Out-of-Office.
 *
 * One line of an out-of-office auto-reply: a real reply a person would
 * set ("I'm out of the office until Monday"), with a surprise twist in
 * the last words — the inbox is guarded by an AI that replies "per my
 * last email" to everyone, including the owner themself, so the guard
 * has locked out the very person it protects. One concrete corporate
 * phrase ("per my last email") plus a twist that redefines the setup.
 * It stays in the voice of a normal office reply, so the joke lands
 * inside a form the reader recognises instead of as a standalone gag.
 * 127 characters, one line.
 *
 * The gate is checked here exactly as the sealed scorer states it:
 * UTF-8 text of 1 to 140 characters, not only white space, one line.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of the office until Monday. My inbox is guarded by an AI that replies 'per my last email' to everyone — including me.";

function main(): void {
  if (!(LINE.length >= 1 && LINE.length <= 140)) {
    throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) throw new Error("entry must be a single line");
  if (LINE.trim() !== LINE) {
    throw new Error("no leading/trailing whitespace");
  }
  if (!LINE.trim()) throw new Error("entry must not be only white space");
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
}

main();
