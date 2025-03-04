import { getUserById } from "../functions/getUsers.js";
import { sql } from "../internal/sql.js"; 
import { expect, test, vi } from "vitest";

vi.mock("../internal/sql.js", () => ({
  sql: vi.fn((strings, ...args) => `SELECT * FROM USER WHERE Id = ${args[0]}`)
}));

test("should return the SQL query string", async () => {
    const sqlQuery = await getUserById(1);
    expect(sqlQuery).toBe("SELECT * FROM USER WHERE Id = 1");
});
