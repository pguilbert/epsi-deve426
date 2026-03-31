import { expect, test } from "vitest";
import { clamp } from "../functions/clamp.js";

test("test clamp", () => {
  // seems be -5 when we clamp a number -10 to lower as -5 and upper as 5
  expect(clamp(-10, -5, 5)).toBe(-5);
  // seems be -5 when we clamp a number 10 to lower as -5 and upper as 5
  expect(clamp(10, -5, 5)).toBe(5);
  // should be 0 when we clamp a number to lower as 0 and upper as 0
  expect(clamp(-10, 0, 0)).toBe(0)
});