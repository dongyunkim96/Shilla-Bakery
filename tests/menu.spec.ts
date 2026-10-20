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

    await page.goto('/menu');
  },
);

test(
  'menu page loads correctly',
  async ({ page }) => {
    await expect(
      page.getByText(
        /shilla bakery menu/i,
      ),
    ).toBeVisible();

    await expect(
      page.getByRole(
        'button',
        {
          name: 'Bread',
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByRole(
        'button',
        {
          name: 'Dessert',
        },
      ),
    ).toBeVisible();

    await expect(
      page.getByRole(
        'button',
        {
          name: 'Drinks',
        },
      ),
    ).toBeVisible();
  },
);

test(
  'drink filter works',
  async ({ page }) => {
    await page
      .getByRole(
        'button',
        {
          name: 'Drinks',
        },
      )
      .click();

    await expect(
      page.getByRole(
        'heading',
        {
          name: 'Coffee & Drinks',
        },
      ),
    ).toBeVisible();
  },
);

test(
  'bread filter works',
  async ({ page }) => {
    await page
      .getByRole(
        'button',
        {
          name: 'Bread',
        },
      )
      .click();

    await expect(
      page.getByRole(
        'heading',
        {
          name: 'Fresh Breads',
        },
      ),
    ).toBeVisible();
  },
);

test(
  'search works',
  async ({ page }) => {
    const searchInput =
      page.getByPlaceholder(
        /search breads, desserts, or drinks/i,
      );

    await searchInput.fill('cake');

    await expect(
      searchInput,
    ).toHaveValue('cake');
  },
);

test(
  'price sorting works',
  async ({ page }) => {
    const sortSelect =
      page.getByRole(
        'combobox',
      );

    await sortSelect.selectOption(
      'price-low',
    );

    await expect(
      sortSelect,
    ).toHaveValue(
      'price-low',
    );
  },
);

test(
  'menu detail page opens',
  async ({ page }) => {
    const firstDetailLink =
      page
        .getByRole(
          'link',
          {
            name:
              /view details/i,
          },
        )
        .first();

    await expect(
      firstDetailLink,
    ).toBeVisible();

    await firstDetailLink.click();

    await expect(
      page,
    ).toHaveURL(
      /\/menu\/.+/,
    );
  },
);