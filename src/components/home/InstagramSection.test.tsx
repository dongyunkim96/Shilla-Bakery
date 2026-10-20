import {
  render,
  screen,
} from '@testing-library/react';

import {
  describe,
  expect,
  it,
} from 'vitest';

import InstagramSection from './InstagramSection';

describe('InstagramSection', () => {
  it('shows Instagram CTA', () => {
    render(
      <InstagramSection />,
    );

    expect(
      screen.getByRole(
        'link',
        {
          name:
            /follow @shillabakeryvienna/i,
        },
      ),
    ).toHaveAttribute(
      'href',
      'https://www.instagram.com/shillabakeryvienna/',
    );
  });

  it('renders three videos', () => {
    const { container } =
      render(
        <InstagramSection />,
      );

    const videos =
      container.querySelectorAll(
        'video',
      );

    expect(videos).toHaveLength(3);

    videos.forEach((video) => {
      expect(video.loop).toBe(true);
      expect(video.muted).toBe(true);
      expect(video.autoplay).toBe(true);
    });
  });
});