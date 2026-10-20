import {
  defineConfig,
  devices,
} from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries:
    process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    baseURL:
      'http://127.0.0.1:5173',

    trace:
      'on-first-retry',

    screenshot:
      'only-on-failure',

    video:
      'retain-on-failure',
  },

  projects: [
    {
      name: 'Desktop Chrome',

      use: {
        ...devices[
          'Desktop Chrome'
        ],
      },
    },

    {
      name: 'Mobile Chrome',

      use: {
        ...devices[
          'Pixel 7'
        ],
      },
    },
  ],

  webServer: {
    command:
      'npm run dev -- --host 127.0.0.1',

    url:
      'http://127.0.0.1:5173',

    reuseExistingServer:
      !process.env.CI,
  },
});