import { getProductTitle } from "../functions/getProductTitle.js";
import { expect, it, vi } from "vitest";

const testFetch = () => Promise.resolve(({ json : () => ({ title: "Essence Mascara Lash Princess" }) }));

it('should return the title of the product', async () => {
    vi.stubGlobal('fetch', testFetch);
    const title = await getProductTitle(1);
    expect(title).toBe("Essence Mascara Lash Princess");
});