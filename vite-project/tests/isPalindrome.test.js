import { isPalindrome } from "../functions/isPalindrome.js";
import { expect, test } from "vitest";

test("isPalindrome True", () => {
  expect(isPalindrome("kayak")).toBe(true);
});

test("isPalindrome False", () => {
  expect(isPalindrome("hello")).toBe(false);
});

test("isPalindrome Accent", () => {
  expect(isPalindrome("kayâk")).toBe(false);
});

// test("isPalindrome Error", () => {
//   expect(isPalindrome()).toThrowError();
// });