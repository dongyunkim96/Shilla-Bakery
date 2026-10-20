import {
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import ContactPage from './ContactPage';

import {
  renderWithRouter,
} from '../test/renderWithRouter';

describe('ContactPage', () => {
  it('renders contact page heading', () => {
    renderWithRouter(
      <ContactPage />,
    );

    expect(
      screen.getByRole(
        'heading',
        {
          name:
            /find a shilla bakery near you/i,
        },
      ),
    ).toBeInTheDocument();
  });

  it('renders location information', () => {
    renderWithRouter(
      <ContactPage />,
    );

    expect(
      screen.getByRole(
        'heading',
        {
          name: 'Annandale',
        },
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        'heading',
        {
          name: 'Centreville',
        },
      ),
    ).toBeInTheDocument();
  });

  it('has phone links', () => {
    renderWithRouter(
      <ContactPage />,
    );

    const phoneLinks =
      screen
        .getAllByRole('link')
        .filter((link) =>
          link
            .getAttribute('href')
            ?.startsWith('tel:'),
        );

    expect(
      phoneLinks.length,
    ).toBeGreaterThan(0);
  });

  it('has Google Maps links', () => {
    renderWithRouter(
      <ContactPage />,
    );

    const mapLinks =
      screen
        .getAllByRole('link')
        .filter((link) =>
          link
            .getAttribute('href')
            ?.includes(
              'google.com/maps',
            ),
        );

    expect(
      mapLinks.length,
    ).toBeGreaterThan(0);
  });

  it('has catering support email', () => {
    renderWithRouter(
      <ContactPage />,
    );

    const emailLink =
      screen
        .getAllByRole('link')
        .find((link) =>
          link
            .getAttribute('href')
            ?.startsWith(
              'mailto:',
            ),
        );

    expect(
      emailLink,
    ).toBeDefined();
  });
});