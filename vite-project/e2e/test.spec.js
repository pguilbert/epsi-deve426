import { test, expect } from '@playwright/test';

test('Vérifie la page et le compteur', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.locator('h1')).toHaveText('Hello Vite!');

  const counterButton = page.locator('#counter');
  await expect(counterButton).toBeVisible();
  counterButton.click();
  counterButton.click();
  await expect(counterButton).toHaveText(/count is 2/i);
});