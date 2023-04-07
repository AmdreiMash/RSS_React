import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Shold render Home page, if click to the link mast routed to the About us', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByText('About');

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Home/i);

    await userEvent.click(link);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/About Us/i);
  });
});
