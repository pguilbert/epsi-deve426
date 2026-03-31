import { expect, test, vi } from "vitest";
import { getProductTitleById } from "../functions/getProductTitle.js";

test("test get product title by id", async () => {
  expect(await getProductTitleById(1)).toBe("Essence Mascara Lash Princess");
  expect(await getProductTitleById(7777)).toBe(undefined);
});

test("test get product title by id (should failed if fetch failed when we have no internet connection)", async () => {
  vi.stubGlobal("fetch", vi.fn(() => 
    Promise.reject(new TypeError("Failed to fetch"))
  ));

  await expect(getProductTitleById(1)).rejects.toThrow("Failed to fetch product");
  
  vi.unstubAllGlobals();
});