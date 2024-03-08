import { getUserById } from "../functions/getUsers";
import { describe, expect, test, vi } from "vitest";
import { sql } from "../internal/sql";

describe("getUser", () => {
  test.todo("get good user ID");
});

// vi.mock("../internal/sql", () => ({
//   sql: vi.fn(() => {}),
// }));

vi.mock("../internal/sql", () => ({
  sql: vi.fn(function (strings, ...values) {
    const query = strings.reduce(
      (acc, str, i) => acc + str + (values[i] || ""),
      ""
    );
    return { text: query };
  }),
}));

// test("get User ID", () => {
//   const user = getUserById(1);
//   expect(sql).toHaveBeenCalledWith(["SELECT * FROM USER WHERE Id = ", ""], 1);
// });

test("get User ID", () => {
  const user = getUserById(1);
  expect(sql).toReturn({ test: "SELECT * FROM USER WHERE Id = 1" });
});
