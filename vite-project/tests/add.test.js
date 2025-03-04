import { add } from "../functions/add.js";
import { expect, test } from "vitest";

test("should return the sum of a and b", () => {
  expect(add(5, 1)).toBe(6);
  expect(add(-3, 1)).toBe(-2);
});
