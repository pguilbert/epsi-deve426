import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("add two number", () => {
  expect(clamp(-10, -5, 5)).toBe(-5);
});
test("add two number", () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });
