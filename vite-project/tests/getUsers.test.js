import { getUserById } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";
import { sql } from "../internal/sql";


const { fakeSql } = vi.hoisted(() => ({
  fakeSql: vi.fn((strings, ...args) => ({ Id: args[0], UserName: "John Doe", Age: 25 })),
}));


vi.mock("../internal/sql", () => ({
  sql: fakeSql,
}));

test('toto', async () => {
  vi.mocked(sql).mockImplementation((strings, ...args) => ({ Id: args[0], UserName: "John Doe", Age: 25 }));
    expect(await getUserById(1)).toEqual(expect.objectContaining({Id : 1, }));
})