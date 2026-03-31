import { getUsers } from "../functions/getUsers.js";
import { expect, test } from "vitest";

test("get users", () => {
  expect(getUsers()).toBeInstanceOf(Array);
});