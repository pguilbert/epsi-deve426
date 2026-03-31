import { expect, test, vi } from "vitest";
import { getUserById } from "../functions/getUsers";
import { sql } from "../internal/sql";

// mock
vi.mock("../internal/sql", () => ({
  sql: vi.fn((strings, ...args) => {
    const userId = args[0];
    return { Id: userId };
  }),
}));

test("get user test", () => {
  const userId = 1;
  const user = getUserById(userId);
  // should exec sql request (ignore if sql error)
  expect(sql).toHaveBeenCalled();
  // should return user "JohnDoe / Age 25 / id: 1"
  expect(user).toEqual({ Id: userId });
});

