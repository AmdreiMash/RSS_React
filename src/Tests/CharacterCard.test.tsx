import React from 'react';
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import CharacterCard from '../components/CharacterCard';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import testData from './cardTestData';

describe('CharacterCard', () => {
  it('renders CharacterCard', () => {
    render(
      <BrowserRouter>
        <CharacterCard {...testData} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rick Sanchez/i));
  });
  it('Shold add shadow if user hover the product card', async () => {
    render(
      <BrowserRouter>
        <CharacterCard {...testData} />
      </BrowserRouter>
    );
    const card = screen.getByTestId('card');

    if (!card) return console.error('CharacterCard not found');
    await userEvent.click(card);
    const male = await screen.findByText('Gender: Male');
    const location = await screen.findByText('Citadel of Ricks');
    expect(location && male).toBeInTheDocument;
  });

  it('Like shold work', async () => {
    render(
      <BrowserRouter>
        <CharacterCard {...testData} />
      </BrowserRouter>
    );

    const Like = screen.getByRole('button');

    if (!Like) throw new Error('Like not found');

    expect(Like.getAttribute('fill')).toBe('#808080');

    await userEvent.click(Like);

    expect(Like.getAttribute('fill')).toBe('#FF7979');
  });
});
