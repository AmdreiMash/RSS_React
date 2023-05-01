import React from 'react';
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import CharacterCard from '../components/CharacterCard';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import testData from './cardTestData.json';

describe('CharacterCard', () => {
  it('Shold show modal and overlay', async () => {
    render(
      <BrowserRouter>
        <CharacterCard {...testData.results[0]} />
      </BrowserRouter>
    );
    const card = screen.getByTestId('1');
    expect(screen.getByTestId('1cross')).toHaveStyle('display: none');
    expect(screen.getByTestId('1overlay')).toHaveStyle('width: 0');
    await userEvent.click(card);
    const location = await screen.findByText('Citadel of Ricks');
    const male = await screen.findByText('Gender: Male');
    expect(screen.getByTestId('1overlay')).toHaveStyle('width: 100vw');
    expect(screen.getByTestId('1cross')).toHaveStyle('display: block');
    expect(location && male).toBeInTheDocument;
  });

  it('Like shold work', async () => {
    render(
      <BrowserRouter>
        <CharacterCard {...testData.results[0]} />
      </BrowserRouter>
    );

    const Like = screen.getByRole('button');
    expect(Like.getAttribute('fill')).toBe('#808080');
    await userEvent.click(Like);
    expect(Like.getAttribute('fill')).toBe('#FF7979');
  });
});
