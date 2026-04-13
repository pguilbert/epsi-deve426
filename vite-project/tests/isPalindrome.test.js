import { isPalindrome } from "../functions/isPalindrome";
import { expect, test } from "vitest";

test("returns true for a non-palindrome string", () => {
  expect(isPalindrome("hello")).toBe(false);
});

test("returns true for a simple palindrome string", () => {
  expect(isPalindrome("radar")).toBe(true);
});