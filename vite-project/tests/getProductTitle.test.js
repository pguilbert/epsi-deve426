import { describe, expect, test, vi } from "vitest";
import { getProductTitle } from "../functions/getProductTitle.js";

global.fetch = vi.fn();

describe("getProductTitle", () => {

  test("Retourne le titre correct pour un ID valide", async () => {
    fetch.mockResolvedValue({
      json: vi.fn().mockResolvedValue({ title: "iPhone 13" }),
    });

    const title = await getProductTitle(1);

    expect(title).toBe("iPhone 13");
  });

  test("Lance une erreur pour un ID invalide", async () => {
    fetch.mockRejectedValue(new Error("404 Not Found"));

    await expect(getProductTitle(999)).rejects.toThrow("Échec de la récupération du produit");
  });

  test("Lance une erreur si l'API ne renvoie pas de titre", async () => {
    fetch.mockResolvedValue({
      json: vi.fn().mockResolvedValue({}),
    });

    await expect(getProductTitle(2)).rejects.toThrow("Échec de la récupération du produit");
  });

});
