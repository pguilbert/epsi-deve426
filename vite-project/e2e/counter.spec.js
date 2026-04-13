import { test, expect } from '@playwright/test';

test.describe('Counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should increment the counter when clicked', async ({ page }) => {
    const counterButton = page.locator('#counter');
    
    await expect(counterButton).toHaveText('count is 0');

    await counterButton.click();
    await expect(counterButton).toHaveText('count is 1');

    await counterButton.click();
    await expect(counterButton).toHaveText('count is 2');
  });

  test('should clamp the counter at 10', async ({ page }) => {
    const counterButton = page.locator('#counter');

    await expect(counterButton).toHaveText('count is 0');

    for (let i = 0; i < 12; i++) {
      await counterButton.click();
    }

    await expect(counterButton).toHaveText('count is 10');
  });
});
