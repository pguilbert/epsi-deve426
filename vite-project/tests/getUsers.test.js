import { getUserById } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";

vi.mock("../internal/sql", () => ({
  sql: () => [],
}));

test("get user by ID", () => {
  expect(getUserById(1)).toBeInstanceOf(Array);
});
