import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render home page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
