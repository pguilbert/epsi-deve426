import { expect, test, vi } from "vitest";
import { getUserById } from "../functions/getUsers";
import { getDbConnection, sql } from "../internal/sql";

test("Test query", () => {
  const userId = 5;

  const mockSql = vi.mock("../internal/sql.js", () => ({
    sql: vi.fn(() => {
      return { Id: 5, UserName: "JohnDoe", Age: 25 };
    }),
  }));


  expect(getUserById(userId).Id).toBe(userId);

  expect(sql).toBeCalledWith([`SELECT * FROM USER WHERE Id = `, " coucou"], userId);
});
