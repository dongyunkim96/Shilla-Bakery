import {
  screen,
  render,
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

import MainLayout from './MainLayout';

describe('MainLayout', () => {
  it('renders nested page content', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
      >
        <Routes>
          <Route
            element={
              <MainLayout />
            }
          >
            <Route
              path="/"
              element={
                <div>
                  Test Page Content
                </div>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        'Test Page Content',
      ),
    ).toBeInTheDocument();
  });
});