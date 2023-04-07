import React from 'react';
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import CharacterCard from '../components/CharacterCard';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const Data = JSON.parse(`{
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Citadel of Ricks",
                "url": "https://rickandmortyapi.com/api/location/3"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/13",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/17",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/24",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/27",
                "https://rickandmortyapi.com/api/episode/28",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/34",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/37",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/50",
                "https://rickandmortyapi.com/api/episode/51"
  ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
}`);

describe('CharacterCard', () => {
  it('renders CharacterCard', () => {
    render(
      <BrowserRouter>
        <CharacterCard {...Data} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rick Sanchez/i));
  });
  //! перделать на появление модалки
  //it('Shold add shadow if user hover the product card', async () => {
  //  const { container } = render(
  //    <BrowserRouter>
  //      <CharacterCard {...Data} />
  //    </BrowserRouter>
  //  );
  //  const CharacterCard = screen.getByRole('card');

  //  if (!CharacterCard) return console.error('CharacterCard not found');

  //  expect(CharacterCard.style.boxShadow).toBe('');

  //  await userEvent.hover(CharacterCard);

  //  console.log(CharacterCard.style);

  //  expect(CharacterCard.style.boxShadow).toBe('2px 10px 8px 0px rgba(34, 60, 80, 0.2)');
  //});

  it('Like shold work', async () => {
    render(
      <BrowserRouter>
        <CharacterCard {...Data} />
      </BrowserRouter>
    );

    const Like = screen.getByRole('button');

    if (!Like) throw new Error('Like not found');

    expect(Like.getAttribute('fill')).toBe('#808080');

    await userEvent.click(Like);

    expect(Like.getAttribute('fill')).toBe('#FF7979');
  });
});
