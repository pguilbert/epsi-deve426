import { getProduct } from "../functions/getProductTitle.js";
import { expect, test, vi } from "vitest";

test("Get product title successfully", async () => {
    const result = await getProduct("1"); 
    expect(result).toBe("iPhone 9");
});

test("Get product title with invalid product ID", async () => {
    await expect(getProduct("invalid")).rejects.toThrow("Failed to fetch product");
});

test("Get product title with network error", async () => {
    vi.spyOn(global, "fetch").mockImplementation(() => Promise.reject(new Error("Network Error")));
    await expect(getProduct("1")).rejects.toThrow("Failed to fetch product");
    global.fetch.mockRestore();
});