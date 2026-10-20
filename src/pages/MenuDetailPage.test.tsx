import {
  render,
  screen,
} from '@testing-library/react';

import {
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom';

import {
  describe,
  expect,
  it,
} from 'vitest';

import MenuDetailPage from './MenuDetailPage';

import menuData from '../data/menuData.json';

const firstItem =
  menuData[0];

function renderDetailPage(
  slug: string,
) {
  return render(
    <MemoryRouter
      initialEntries={[
        `/menu/${slug}`,
      ]}
    >
      <Routes>
        <Route
          path="/menu/:slug"
          element={
            <MenuDetailPage />
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe('MenuDetailPage', () => {
  it('renders selected menu item', () => {
    renderDetailPage(
      firstItem.slug,
    );

    expect(
      screen.getByText(
        firstItem.name,
      ),
    ).toBeInTheDocument();
  });

  it('renders item price', () => {
    renderDetailPage(
      firstItem.slug,
    );

    expect(
      screen.getByText(
        `$${firstItem.price.toFixed(
          2,
        )}`,
      ),
    ).toBeInTheDocument();
  });

  it('has link back to menu', () => {
    renderDetailPage(
      firstItem.slug,
    );

    const menuLink =
      screen
        .getAllByRole('link')
        .find(
          (link) =>
            link.getAttribute(
              'href',
            ) === '/menu',
        );

    expect(
      menuLink,
    ).toBeDefined();
  });
});