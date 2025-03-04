import { getUserById } from "../functions/getUsers";
import { expect, test, vi } from "vitest";

vi.mock("../internal/sql", () => ({
  sql: vi.fn((strings, userId) => `Mocked SQL Query: ${strings[0]}${userId}`),
}));

test("get user by ID", () => {
  const result = getUserById(42);
  expect(result).toBe("Mocked SQL Query: SELECT * FROM USER WHERE Id = 42");
});
