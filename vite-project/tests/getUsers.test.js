import { describe, it, expect, vi } from "vitest";
import { getUserById } from "../functions/getUsers.js";
import { sql } from "../internal/sql";


vi.mock("../internal/sql", () => ({
  sql: vi.fn(),
}));

describe("getUserById", () => {

  it("appelle sql avec le bon id", () => {

  
    getUserById(5);

  
    expect(sql).toHaveBeenCalledWith(
      ["SELECT * FROM USER WHERE Id = ", ""],
      5
    );

  });

});
