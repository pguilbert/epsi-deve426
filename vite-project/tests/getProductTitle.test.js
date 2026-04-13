import { expect, test, vi } from "vitest";
import { getProductTitleById } from "../functions/getProductTitle.js";

// simulate with normal purpose with internet connection
test("test get product title by id (mock success and not found with internet)", async () => {
  vi.stubGlobal("fetch", vi.fn((url) => {
    if (url.includes("/1")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ title: "Essence Mascara Lash Princess" }),
      });
    }
    
    if (url.includes("/7777")) {
      return Promise.resolve({
        ok: false, // Simule une 404
        status: 404,
        json: () => Promise.resolve({ message: "Product not found" }),
      });
    }
  }));

  const titleOk = await getProductTitleById(1);
  expect(titleOk).toBe("Essence Mascara Lash Princess");
  
  const titleNotFound = await getProductTitleById(7777);
  expect(titleNotFound).toBe(undefined);

  vi.unstubAllGlobals();
});

// simulate without internet connection
test("test get product title by id (should failed if fetch failed when we have no internet connection)", async () => {
  vi.stubGlobal("fetch", vi.fn(() => 
    Promise.reject(new TypeError("Failed to fetch"))
  ));

  await expect(getProductTitleById(1)).rejects.toThrow("Failed to fetch product");
  await expect(getProductTitleById(7777)).rejects.toThrow("Failed to fetch product");
  
  vi.unstubAllGlobals();
});
