import { clamp } from "../functions/clamp";
import { expect, test } from "vitest";

test.each([
  { keys: [5, 2, 10], expected: 5, message: "coucou" },
  { keys: [-5, -10, -2], expected: -5, message: "coucou" },
  { keys: [5, 2, 0], expected: 2, message: "coucou" },
  { keys: [5, 2, 10], expected: 5, message: "coucou" },
  { keys: [5, 2, 10], expected: 5, message: "coucou" },
  { keys: [5, 2, 10], expected: 5, message: "coucou" },
  { keys: [5, 2, 10], expected: 5, message: "coucou" },
  { keys: [5, 2, 10], expected: 5, message: "coucou" },
])("clamp test : $message", ({ keys, expected }) => {
  expect(clamp(keys[0], keys[1], keys[2])).toBe(expected);
});
