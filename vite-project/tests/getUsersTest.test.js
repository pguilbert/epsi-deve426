import { getUserById } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";
import { sql } from "../internal/sql.js"

vi.mock("../internal/sql.js", () => ({
    sql: vi.fn((strings, ...args) => `SELECT * FROM USER WHERE Id = ${args[0]}`)
  }));

test("should return the SQL query with the id", () => {
    expect(getUserById(5)).toBe(`SELECT * FROM USER WHERE Id = 5`);
});