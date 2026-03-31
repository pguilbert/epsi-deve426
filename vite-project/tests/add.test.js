import { add } from "../functions/add.js";
import { expect, test } from "vitest";

test("add two number", () => {
  expect(add(5, 1)).toBe(6);
  expect(add(-1, 1)).toBe(0);
  expect(add(-5, -1)).toBe(-6);
  expect(add(0, -1)).toBe(-2);
});