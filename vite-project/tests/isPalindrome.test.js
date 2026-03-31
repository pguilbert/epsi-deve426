import { isPalindrome } from "../functions/isPalindrome";
import { expect, test } from "vitest";

test("returns true for a simple palindrome", () => {
  expect(isPalindrome("radar")).toBe(true);
});

test("returns false for a non-palindrome", () => {
  expect(isPalindrome("hello")).toBe(false);
});