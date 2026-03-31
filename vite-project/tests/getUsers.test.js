import { getUserById } from "../functions/getUsers";
import { expect, test, vi } from "vitest";
import { sql } from "../internal/sql";

const fakeSql =  function sql(strings, ...args) {
  const userId = args[0];
  return { Id: userId, UserName: "JohnDoe", Age: 25 };
};
vi.mock('../internal/sql.js')

test("sql request", async () => {
    sql.mockImplementation(fakeSql)
    expect(await getUserById(1)).toStrictEqual(expect.objectContaining({Id: 1}))
})