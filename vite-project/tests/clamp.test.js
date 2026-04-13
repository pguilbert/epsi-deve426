import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("clamp a number between two values", () => {
  expect(clamp(5, 1, 10)).toBe(5);
  expect(clamp(0, 1, 10)).toBe(1);
  expect(clamp(15, 1, 10)).toBe(10);
  expect(clamp(-5, -10, 0)).toBe(-5);
});
