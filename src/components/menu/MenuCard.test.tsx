import {
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import MenuCard from './MenuCard';

import {
  renderWithRouter,
} from '../../test/renderWithRouter';

import type {
  MenuItem,
} from '../../types/menu';

const item: MenuItem = {
  id: 1,
  slug: 'cream-bread',
  name: 'Cream Bread',
  category: 'bread',
  description:
    'Soft bread filled with smooth cream.',
  details:
    'Fresh bakery bread filled with cream.',
  price: 4.5,
  image:
    '/menu/bread/bread-01.jpeg',
  recommended: true,
  bestSeller: true,
};

describe('MenuCard', () => {
  it('renders menu item information', () => {
    renderWithRouter(
      <MenuCard item={item} />,
    );

    expect(
      screen.getByText('Cream Bread'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$4.50'),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /soft bread filled/i,
      ),
    ).toBeInTheDocument();
  });

  it('renders badges', () => {
    renderWithRouter(
      <MenuCard item={item} />,
    );

    expect(
      screen.getByText('Recommended'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Best Seller'),
    ).toBeInTheDocument();
  });

  it('links to correct detail page', () => {
    renderWithRouter(
      <MenuCard item={item} />,
    );

    expect(
      screen.getByRole('link', {
        name: /view details/i,
      }),
    ).toHaveAttribute(
      'href',
      '/menu/cream-bread',
    );
  });

  it('renders correct product image', () => {
    renderWithRouter(
      <MenuCard item={item} />,
    );

    expect(
      screen.getByRole('img', {
        name: 'Cream Bread',
      }),
    ).toHaveAttribute(
      'src',
      '/menu/bread/bread-01.jpeg',
    );
  });
});