import { getUserById } from "../functions/getUsers.js";
import { sql } from "../internal/sql.js";
import { vi, expect, test } from "vitest";

vi.mock("../internal/sql", () => ({
    sql: vi.fn((strings, ...args) => `SELECT * FROM USER WHERE Id = ${args[0]}`)
  }));
  
  test("getUserById", async () => {
    expect(getUserById(1)).toBe("SELECT * FROM USER WHERE Id = 1");
  });