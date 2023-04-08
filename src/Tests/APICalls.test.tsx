import HomePage from '../pages/Home';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import server from './mocks/server';

describe('API-calls test', () => {
  it('Sheld return alert', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const input = screen.findAllByPlaceholderText('Enter a character name');
    expect(input).toBeDefined();
  });
});
