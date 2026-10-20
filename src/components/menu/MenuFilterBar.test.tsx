import {
  render,
  screen,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import MenuFilterBar from './MenuFilterBar';

describe('MenuFilterBar', () => {
  it('selects Bread category', async () => {
    const user =
      userEvent.setup();

    const onCategoryChange =
      vi.fn();

    render(
      <MenuFilterBar
        activeCategory="all"
        searchKeyword=""
        sortOption="default"
        onCategoryChange={
          onCategoryChange
        }
        onSearchChange={vi.fn()}
        onSortChange={vi.fn()}
      />,
    );

    await user.click(
      screen.getByRole('button', {
        name: 'Bread',
      }),
    );

    expect(
      onCategoryChange,
    ).toHaveBeenCalledWith(
      'bread',
    );
  });

  it('selects Drinks category', async () => {
    const user =
      userEvent.setup();

    const onCategoryChange =
      vi.fn();

    render(
      <MenuFilterBar
        activeCategory="all"
        searchKeyword=""
        sortOption="default"
        onCategoryChange={
          onCategoryChange
        }
        onSearchChange={vi.fn()}
        onSortChange={vi.fn()}
      />,
    );

    await user.click(
      screen.getByRole('button', {
        name: 'Drinks',
      }),
    );

    expect(
      onCategoryChange,
    ).toHaveBeenCalledWith(
      'drink',
    );
  });

  it('updates search input', async () => {
    const user =
      userEvent.setup();

    const onSearchChange =
      vi.fn();

    render(
      <MenuFilterBar
        activeCategory="all"
        searchKeyword=""
        sortOption="default"
        onCategoryChange={vi.fn()}
        onSearchChange={
          onSearchChange
        }
        onSortChange={vi.fn()}
      />,
    );

    await user.type(
      screen.getByPlaceholderText(
        /search breads/i,
      ),
      'cake',
    );

    expect(
      onSearchChange,
    ).toHaveBeenCalled();
  });

  it('changes sorting', async () => {
    const user =
      userEvent.setup();

    const onSortChange =
      vi.fn();

    render(
      <MenuFilterBar
        activeCategory="all"
        searchKeyword=""
        sortOption="default"
        onCategoryChange={vi.fn()}
        onSearchChange={vi.fn()}
        onSortChange={
          onSortChange
        }
      />,
    );

    await user.selectOptions(
      screen.getByRole(
        'combobox',
      ),
      'price-low',
    );

    expect(
      onSortChange,
    ).toHaveBeenCalledWith(
      'price-low',
    );
  });
});