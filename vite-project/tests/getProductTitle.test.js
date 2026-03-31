import { expect, test } from "vitest";
import { getProductTitle } from "../functions/getProductTitle.js";

test("test get product title by id", async () => {
  expect(await getProductTitle(1)).toBe("Essence Mascara Lash Princess");
  expect(await getProductTitle(7777)).toBe(undefined);
});