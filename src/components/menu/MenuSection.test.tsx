import {
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import MenuSection from './MenuSection';

import {
  renderWithRouter,
} from '../../test/renderWithRouter';

import type {
  MenuItem,
} from '../../types/menu';

const items: MenuItem[] = [
  {
    id: 1,
    slug: 'bread-one',
    name: 'Bread One',
    category: 'bread',
    description: 'Bread',
    details: 'Bread details',
    price: 3,
    image:
      '/menu/bread/bread-01.jpeg',
    recommended: false,
    bestSeller: false,
  },
  {
    id: 2,
    slug: 'bread-two',
    name: 'Bread Two',
    category: 'bread',
    description: 'Bread',
    details: 'Bread details',
    price: 4,
    image:
      '/menu/bread/bread-02.jpeg',
    recommended: true,
    bestSeller: false,
  },
];

describe('MenuSection', () => {
  it('renders items', () => {
    renderWithRouter(
      <MenuSection
        title="Fresh Breads"
        items={items}
      />,
    );

    expect(
      screen.getByText(
        'Fresh Breads',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Bread One'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Bread Two'),
    ).toBeInTheDocument();
  });

  it('renders nothing when empty', () => {
    const { container } =
      renderWithRouter(
        <MenuSection
          title="Fresh Breads"
          items={[]}
        />,
      );

    expect(
      container,
    ).toBeEmptyDOMElement();
  });
});