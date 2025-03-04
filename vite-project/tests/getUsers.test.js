import { getUserById } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";

vi.mock("../internal/sql", () => ({sql: vi.fn(() => ({ id: 1 })), 
}));

test("récupération de l'utilisateur", () => {
  expect(getUserById(1)).toEqual({ id: 1 });
});
