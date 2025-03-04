// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // Dossier où sont stockés les tests Playwright
  fullyParallel: true, // Exécute les tests en parallèle
  forbidOnly: !!process.env.CI, // Empêche les `test.only` en CI
  retries: process.env.CI ? 2 : 0, // Nombre de tentatives en CI
  workers: process.env.CI ? 1 : undefined, // Désactive le parallélisme en CI
  reporter: 'html', // Génère un rapport HTML des tests
  use: {
    trace: 'on-first-retry', // Collecte les traces en cas d'échec
  },

  /* 🔹 Démarrer le serveur avant les tests */
  webServer: {
    command: 'npm run start',  // Démarre le serveur avec `vite`
    url: 'http://localhost:5173/',  // URL du serveur local
    reuseExistingServer: !process.env.CI,  // Réutilise un serveur existant en local
    stdout: 'ignore',
    stderr: 'pipe',
  },

  /* 🔹 Configuration pour tester sur plusieurs navigateurs */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
