import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders page header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const toHome = screen.getByText('Home');
    const toAbout = screen.getByText('About');
    expect(toHome).toBeInTheDocument();
    expect(toAbout).toBeInTheDocument();
  });
});
