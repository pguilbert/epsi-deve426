import { isPalindrome } from "../functions/isPalindrome";
import { expect, test } from "vitest";

test.each(["semâmes", "sonos", "kayak"])(
  "isPalindrome(%s) should be true",
  (input) => {
    expect(isPalindrome(input)).toBe(true);
  }
);

test.each(["hello", "world", "test", "javascript"])(
  "isPalindrome('%s') should be false",
  (input) => {
    expect(isPalindrome(input)).toBe(false);
  }
);

test.each(["Kayak", "RaCecaR", "Deified"])(
  "isPalindrome('%s') should be true (case insensitive)",
  (input) => {
    expect(isPalindrome(input)).toBe(true);
  }
);

test.each([
  "A man, a plan, a canal: Panama",
  "No 'x' in Nixon",
  "Eva, can I see bees in a cave?",
])("isPalindrome('%s') should be true (ignoring spaces/punctuation)", (input) => {
  expect(isPalindrome(input)).toBe(true);
});
