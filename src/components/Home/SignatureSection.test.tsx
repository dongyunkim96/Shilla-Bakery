import {
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import SignatureSection from './SignatureSection';

import {
  renderWithRouter,
} from '../../test/renderWithRouter';

describe('SignatureSection', () => {
  it('renders signature selections', () => {
    renderWithRouter(
      <SignatureSection />,
    );

    expect(
      screen.getByText(
        /signature selections/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /view full menu/i,
      }),
    ).toHaveAttribute(
      'href',
      '/menu',
    );
  });
});