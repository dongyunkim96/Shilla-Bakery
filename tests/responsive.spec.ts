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
  'homepage has no horizontal overflow',
  async ({ page }) => {
    await page.goto('/');

    const hasOverflow =
      await page.evaluate(() => {
        return (
          document.documentElement
            .scrollWidth >
          document.documentElement
            .clientWidth
        );
      });

    expect(hasOverflow).toBe(false);
  },
);

test(
  'menu page has no horizontal overflow',
  async ({ page }) => {
    await page.goto('/menu');

    const hasOverflow =
      await page.evaluate(() => {
        return (
          document.documentElement
            .scrollWidth >
          document.documentElement
            .clientWidth
        );
      });

    expect(hasOverflow).toBe(false);
  },
);

test(
  'about page has no horizontal overflow',
  async ({ page }) => {
    await page.goto('/about');

    const hasOverflow =
      await page.evaluate(() => {
        return (
          document.documentElement
            .scrollWidth >
          document.documentElement
            .clientWidth
        );
      });

    expect(hasOverflow).toBe(false);
  },
);

test(
  'contact page has no horizontal overflow',
  async ({ page }) => {
    await page.goto('/contact');

    const hasOverflow =
      await page.evaluate(() => {
        return (
          document.documentElement
            .scrollWidth >
          document.documentElement
            .clientWidth
        );
      });

    expect(hasOverflow).toBe(false);
  },
);

test(
  'homepage main sections are visible',
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