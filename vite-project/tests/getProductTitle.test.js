import { getProductTitle } from "../functions/getProductTitle";
import { expect, test } from "vitest";

test("title name by id", async () => {
    expect(await getProductTitle(1)).toBe("Essence Mascara Lash Princess")
})