import {
  expect,
  test,
} from '@playwright/test';

test(
  'intro appears on first visit',
  async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      ),
    ).toBeVisible();
  },
);

test(
  'intro closes when user enters the site',
  async ({ page }) => {
    await page.goto('/');

    const enterButton =
      page.getByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      );

    await expect(
      enterButton,
    ).toBeVisible();

    await enterButton.click();

    await expect(
      enterButton,
    ).not.toBeVisible();
  },
);

test(
  'intro stays hidden after reload',
  async ({ page }) => {
    await page.goto('/');

    const enterButton =
      page.getByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      );

    await enterButton.click();

    await page.reload();

    await expect(
      page.getByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      ),
    ).not.toBeVisible();
  },
);