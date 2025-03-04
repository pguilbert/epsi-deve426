import { getUserById } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";


vi.mock("../internal/sql.js", () => ({
    sql: vi.fn((strings, ...args) => `SELECT * FROM USER WHERE Id = ${args[0]}`)
  }));

test("add two number", () => {
    expect(getUserById(1)).toBe("SELECT * FROM USER WHERE Id = 1");
});