import { getUserById } from "../functions/getUsers.js";
import { expect, test } from "vitest";

test("recuperation de l'utilisateur", () => {
    expect(getUserById(1)).toBe(1);
});