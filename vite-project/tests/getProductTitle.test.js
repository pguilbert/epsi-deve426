import { getProduct } from "../functions/getProductTitle.js";
import { expect, test } from "vitest";

test("fetches the correct product title", async () => {
    const title = await getProduct(1);
    expect(title).toBe("Essence Mascara Lash Princess");
});
