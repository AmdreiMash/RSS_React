import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import productsData from '../assets/products';
import ProductCard from '../components/ProductCard';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('ProductCard', () => {
  it('renders ProductCard', () => {
    render(
      <BrowserRouter>
        <ProductCard data={productsData[1]} />
      </BrowserRouter>
    );
    expect(screen.getByRole('link')).toHaveTextContent("men's clothing");
  });

  it('Shold add shadow if user hover the product card', async () => {
    render(
      <BrowserRouter>
        <ProductCard data={productsData[1]} />
      </BrowserRouter>
    );
    const productCard = document.querySelector<HTMLDivElement>('.card-content');

    if (!productCard) return console.error('ProductCard not found');

    expect(productCard.style.boxShadow).toBe('');

    await userEvent.hover(productCard);

    expect(productCard.style.boxShadow).toBe('2px 10px 8px 0px rgba(34, 60, 80, 0.2)');
  });

  it('Like shold work', async () => {
    render(
      <BrowserRouter>
        <ProductCard data={productsData[1]} />
      </BrowserRouter>
    );
    const Like = document.querySelector<HTMLDivElement>('.like');

    if (!Like) throw new Error('Like not found');

    await userEvent.click(Like);

    expect(Like.style.backgroundImage).toBe('');
  });
});
