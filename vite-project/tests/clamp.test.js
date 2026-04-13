import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("clamp", () => {
  expect(clamp(10, -5, 5)).toBe(5);
  expect(clamp(-10, -5, 5)).toBe(-5);
  expect(clamp(10, 9, 5)).toBe(9);
  expect(clamp(5, 0, 3)).toBe(3);
});