import { getUserById } from "../functions/getUsers.js";
import { vi, test, expect } from "vitest";
import { sql } from "../internal/sql.js";

const testsql = (strings, ...values) => {
    return values;
}
vi.mock("../internal/sql.js");

test("getUserById", () => {
    vi.mocked(sql).mockImplementation(testsql);

    getUserById(1);
    expect(getUserById(1)).toStrictEqual([1]);
});