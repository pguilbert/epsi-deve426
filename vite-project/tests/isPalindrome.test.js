import { isPalindrome } from "../functions/isPalindrome";
import { expect, test } from "vitest";

test.each(["semâmes", "sonos", "kayak"])(
    "isPalindrome(%s) should be true",
    (input) => {
        expect(isPalindrome(input)).toBe(true);
    }
);