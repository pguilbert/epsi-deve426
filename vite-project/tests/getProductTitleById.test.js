import { expect, test } from "vitest";
import { getProductTitleById } from "../functions/getProductTitleById.js";

test("test get product title by id", async () => {
  expect(await getProductTitleById(1)).toBe("Essence Mascara Lash Princess");
  await expect(getProductTitleById(999)).rejects.toThrow("Failed to fetch product");
});