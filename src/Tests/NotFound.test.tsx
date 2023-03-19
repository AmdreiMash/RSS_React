import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe('404', () => {
  it('renders 404 page', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Home');
  });
});
