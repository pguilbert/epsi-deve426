import { getUserById } from "../functions/getUsers";
import { expect, test, vi } from "vitest";
import { sql } from "../internal/sql"

const mockSql = vi.mock("../internal/sql.js", () =>{
    return {
    sql: vi.fn(),
    }
});

test("should", async () => {
  getUserById(1);
  expect(sql).toHaveBeenCalledWith([ 'SELECT * FROM USER WHERE Id = ', "" ], 1)
});
