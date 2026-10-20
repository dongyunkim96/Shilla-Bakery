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
  'Instagram link is correct',
  async ({ page }) => {
    await page.goto('/');

    const instagramLink =
      page.getByRole(
        'link',
        {
          name:
            /follow @shillabakeryvienna/i,
        },
      );

    await expect(
      instagramLink,
    ).toHaveAttribute(
      'href',
      'https://www.instagram.com/shillabakeryvienna/',
    );

    await expect(
      instagramLink,
    ).toHaveAttribute(
      'target',
      '_blank',
    );
  },
);

test(
  'Google Maps links exist on contact page',
  async ({ page }) => {
    await page.goto('/contact');

    const directionsLinks =
      page.getByRole(
        'link',
        {
          name:
            /get directions/i,
        },
      );

    await expect(
      directionsLinks.first(),
    ).toHaveAttribute(
      'href',
      /google\.com\/maps/,
    );
  },
);

test(
  'phone links use tel protocol',
  async ({ page }) => {
    await page.goto('/contact');

    const phoneLinks =
      page.locator(
        'a[href^="tel:"]',
      );

    expect(
      await phoneLinks.count(),
    ).toBeGreaterThan(0);
  },
);

test(
  'support email uses mailto protocol',
  async ({ page }) => {
    await page.goto('/contact');

    const emailLink =
      page.locator(
        'a[href^="mailto:"]',
      );

    await expect(
      emailLink.first(),
    ).toHaveAttribute(
      'href',
      /mailto:/,
    );
  },
);