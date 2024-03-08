import { add } from "../functions/add.js";
import { expect, test, vi } from "vitest";
import { sql } from "../internal/sql.js";
import { getUserById } from "../functions/getUsers.js";

vi.mock('../internal/sql.js', () => ({
    sql: vi.fn(function(strings, ...values) {
        const query = strings.reduce(
            (acc, str, i) => acc + str + (values[i] || ""),
            ""
        ); 
        return {text: query};
    }),
}));

test("verify getUsers", () => {

    const user = getUserById(1);
    expect(sql).toReturn({text: "SELECT * FROM USER WHERE Id = 1" });
})