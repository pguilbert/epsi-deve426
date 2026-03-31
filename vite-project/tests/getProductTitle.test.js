import { expect, test } from "vitest";
import { getProductTitleById } from "../functions/getProductTitle.js";

test("test get product title by id", async () => {
  expect(await getProductTitleById(1)).toBe("Essence Mascara Lash Princess");
  expect(await getProductTitleById(7777)).toBe(undefined);
});