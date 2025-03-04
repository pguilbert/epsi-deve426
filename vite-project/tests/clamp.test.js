import { clamp } from "../functions/clamp.js";
import { expect, test } from "vitest";

test("add two number", () => {
  expect(clamp(5, 1, 4)).toBe(4);
});

test("add two number", () => {
    expect(clamp(4, 1, 4)).toBe(4);
  });

  test("add two number", () => {
    expect(clamp(5, -1, -4)).toBe(-1);
  });
