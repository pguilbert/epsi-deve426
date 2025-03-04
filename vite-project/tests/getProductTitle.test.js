import { getProductTitle } from "../functions/getProductTitle.js";
import { expect, test, vi } from "vitest";

test("Get product title successfully", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ title: "iPhone 9" }),
        })
    );
    const result = await getProductTitle("1");
    expect(result).toBe("iPhone 9");
    global.fetch.mockRestore();
});

test("Get product title with invalid product ID", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            ok: false,
        })
    );
    await expect(getProductTitle("invalid")).rejects.toThrow("Failed to fetch product");
    global.fetch.mockRestore();
});

test("Get product title with network error", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() => Promise.reject(new Error("Network Error")));
    await expect(getProductTitle("1")).rejects.toThrow("Failed to fetch product");
    global.fetch.mockRestore();
});