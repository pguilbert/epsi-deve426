import { getUserById } from "../functions/getUsers.js";
import { vi, expect, test } from "vitest";

vi.mock("../internal/sql", () => ({
    sql: vi.fn()
  }));
  
  test("getUserById", async () => {
    sql.mockResolvedValue([{ id: 1, nom: "Nom" }]);
    const result = await getUserById(1);
    expect(sql).toHaveBeenCalledWith`SELECT * FROM USER WHERE Id = ${1}`;
    expect(result).toBe([{ id: 1, nom: "Nom" }]);
  });