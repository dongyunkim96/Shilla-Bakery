import {
  expect,
  test,
} from '@playwright/test';

test.beforeEach(
  async ({ page }) => {
    await page.addInitScript(
      () => {
        sessionStorage.setItem(
          'shilla-intro-seen',
          'true',
        );
      },
    );
  },
);

test(
  'homepage loads correctly',
  async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByText(
        /signature selections/i,
      ),
    ).toBeVisible();

    await expect(
      page.getByText(
        /follow what’s fresh/i,
      ),
    ).toBeVisible();
  },
);