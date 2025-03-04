import { getUsers } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";

test("Get users successfully", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve([{ id: 1, name: "John Doe" }]),
        })
    );
    const result = await getUsers();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    global.fetch.mockRestore();
});