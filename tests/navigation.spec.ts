import {
  expect,
  test,
  type Page,
} from '@playwright/test';

async function openMobileMenuIfNeeded(
  page: Page,
) {
  const menuButton =
    page.getByRole('button', {
      name: /toggle menu/i,
    });

  if (await menuButton.isVisible()) {
    await menuButton.click();
  }
}

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

    await page.goto('/');
  },
);

test(
  'navigates to menu page',
  async ({ page }) => {
    await openMobileMenuIfNeeded(
      page,
    );

    await page
      .getByRole('link', {
        name: 'Menu',
        exact: true,
      })
      .first()
      .click();

    await expect(
      page,
    ).toHaveURL(/\/menu$/);
  },
);

test(
  'navigates to about page',
  async ({ page }) => {
    await openMobileMenuIfNeeded(
      page,
    );

    await page
      .getByRole('link', {
        name: 'About',
        exact: true,
      })
      .first()
      .click();

    await expect(
      page,
    ).toHaveURL(/\/about$/);
  },
);

test(
  'navigates to contact page',
  async ({ page }) => {
    await openMobileMenuIfNeeded(
      page,
    );

    await page
      .getByRole('link', {
        name: 'Contact',
        exact: true,
      })
      .first()
      .click();

    await expect(
      page,
    ).toHaveURL(/\/contact$/);
  },
);

test(
  'navigates back to home page',
  async ({ page }) => {
    await openMobileMenuIfNeeded(
      page,
    );

    await page
      .getByRole('link', {
        name: 'Menu',
        exact: true,
      })
      .first()
      .click();

    await expect(
      page,
    ).toHaveURL(/\/menu$/);

    await openMobileMenuIfNeeded(
      page,
    );

    await page
      .getByRole('link', {
        name: 'Home',
        exact: true,
      })
      .first()
      .click();

    await expect(
      page,
    ).toHaveURL('/');
  },
);