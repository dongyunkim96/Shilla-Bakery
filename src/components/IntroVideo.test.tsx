import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest';

import IntroVideo from './IntroVideo';

describe('IntroVideo', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('shows intro on first visit', () => {
    render(<IntroVideo />);

    expect(
      screen.getByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      ),
    ).toBeInTheDocument();
  });

  it('closes intro', () => {
    render(<IntroVideo />);

    fireEvent.click(
      screen.getByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      ),
    );

    expect(
      sessionStorage.getItem(
        'shilla-intro-seen',
      ),
    ).toBe('true');
  });

  it('does not appear again', () => {
    sessionStorage.setItem(
      'shilla-intro-seen',
      'true',
    );

    render(<IntroVideo />);

    expect(
      screen.queryByRole(
        'button',
        {
          name:
            /enter shilla bakery/i,
        },
      ),
    ).not.toBeInTheDocument();
  });

  it('closes with Escape key', () => {
    render(<IntroVideo />);

    fireEvent.keyDown(
      window,
      {
        key: 'Escape',
      },
    );

    expect(
      sessionStorage.getItem(
        'shilla-intro-seen',
      ),
    ).toBe('true');
  });
});