import {
  screen,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {
  describe,
  expect,
  it,
} from 'vitest';

import MenuPage from './MenuPage';

import {
  renderWithRouter,
} from '../test/renderWithRouter';

describe('MenuPage', () => {
  it('renders menu page', () => {
    renderWithRouter(
      <MenuPage />,
    );

    expect(
      screen.getByText(
        /shilla bakery menu/i,
      ),
    ).toBeInTheDocument();
  });

  it('filters drinks', async () => {
    const user =
      userEvent.setup();

    renderWithRouter(
      <MenuPage />,
    );

    await user.click(
      screen.getByRole(
        'button',
        {
          name: 'Drinks',
        },
      ),
    );

    expect(
      screen.getByRole(
        'heading',
        {
          name:
            'Coffee & Drinks',
        },
      ),
    ).toBeInTheDocument();
  });

  it('clears filters', async () => {
    const user =
      userEvent.setup();

    renderWithRouter(
      <MenuPage />,
    );

    await user.click(
      screen.getByRole(
        'button',
        {
          name: 'Bread',
        },
      ),
    );

    await user.click(
      screen.getByRole(
        'button',
        {
          name:
            /clear filters/i,
        },
      ),
    );

    expect(
      screen.getByRole(
        'heading',
        {
          name:
            'Coffee & Drinks',
        },
      ),
    ).toBeInTheDocument();
  });
});