

import { getProductTitle } from "../functions/getProductTitle.js";
import { describe, it, expect, vi } from "vitest";

describe("getProductTitle", () => {

  it("ça retourne le titre du produit", async () => {

    
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ title: "iPhone 9" }),
      })
    );

    const result = await getProductTitle(1);

    
    expect(result).toBe("iPhone 9");
  });


  it("ça lance une erreur si ça échoue", async () => {

    
    global.fetch = vi.fn(() => Promise.reject("erreur"));

    
    await expect(getProductTitle(1)).rejects.toThrow(
      "Failed to fetch product"
    );
  });

});

