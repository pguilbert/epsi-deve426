import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("returns number when within bounds", () => {
  expect(clamp(3, 0, 5)).toBe(3);
});

test("clamps to lower bound", () => {
  expect(clamp(-10, -5, 5)).toBe(-5);
});

test("clamps to upper bound", () => {
  expect(clamp(10, -5, 5)).toBe(5);
});

test("converts string to number", () => {
  expect(clamp("4", "0", "5")).toBe(4);
});

