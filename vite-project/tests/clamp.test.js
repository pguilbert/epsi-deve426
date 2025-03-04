import { describe, expect, test } from "vitest";
import { clamp } from "../functions/clamp.js";

describe("Fonction clamp", () => {
    test("Le nombre doit rester dans les limites", () => {
        expect(clamp(5, 0, 10)).toBe(5);
    });

    test("Si le nombre dépasse la limite supérieure, il doit être réduit à cette limite", () => {
        expect(clamp(15, 0, 10)).toBe(10);
    });

    test("Si le nombre est inférieur à la limite inférieure, il doit être ajusté à cette limite", () => {
        expect(clamp(-5, 0, 10)).toBe(0);
    });

    test("Doit fonctionner avec des limites négatives", () => {
        expect(clamp(-10, -20, -5)).toBe(-10);
        expect(clamp(-25, -20, -5)).toBe(-20);
        expect(clamp(0, -20, -5)).toBe(-5);
    });

    test("Les valeurs sous forme de chaîne doivent être converties en nombres", () => {
        expect(clamp("7", "2", "10")).toBe(7);
    });

    test("Les valeurs invalides (NaN) doivent être remplacées par 0", () => {
        expect(clamp("abc", 0, 10)).toBe(NaN);
        expect(clamp(5, "xyz", 10)).toBe(5);
        expect(clamp(5, 0, "xyz")).toBe(0);
    });
});
