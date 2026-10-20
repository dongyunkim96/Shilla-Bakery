import {
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import Navbar from './Navbar';

import {
  renderWithRouter,
} from '../test/renderWithRouter';

describe('Navbar', () => {
  it('renders main navigation links', () => {
    renderWithRouter(
      <Navbar />,
    );

    expect(
      screen.getByRole('link', {
        name: /home/i,
      }),
    ).toHaveAttribute(
      'href',
      '/',
    );

    expect(
      screen.getByRole('link', {
        name: /menu/i,
      }),
    ).toHaveAttribute(
      'href',
      '/menu',
    );

    expect(
      screen.getByRole('link', {
        name: /about/i,
      }),
    ).toHaveAttribute(
      'href',
      '/about',
    );

    expect(
      screen.getByRole('link', {
        name: /contact/i,
      }),
    ).toHaveAttribute(
      'href',
      '/contact',
    );
  });
});