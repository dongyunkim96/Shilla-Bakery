import {
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import AboutPage from './AboutPage';

import {
  renderWithRouter,
} from '../test/renderWithRouter';

describe('AboutPage', () => {
  it('renders story', () => {
    renderWithRouter(
      <AboutPage />,
    );

    expect(
      screen.getByText(
        /our story/i,
      ),
    ).toBeInTheDocument();
  });

  it('has Google Maps links', () => {
    renderWithRouter(
      <AboutPage />,
    );

    const links =
      screen.getAllByRole('link', {
        name:
          /open in google maps/i,
      });

    expect(
      links.length,
    ).toBeGreaterThan(0);

    expect(
      links[0],
    ).toHaveAttribute(
      'href',
      expect.stringContaining(
        'google.com/maps',
      ),
    );
  });
});