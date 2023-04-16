import HomePage from '../pages/Home';
import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import testData from './cardTestData.json';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const store = setupStore({});

//const server = setupServer(
//  rest.get('*', (req, res, ctx) => {
//    console.log(
//      '========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================'
//    );
//    res(ctx.json({ data: { testData } }));
//  })
//);

//beforeAll(() => server.listen());
//afterEach(() => server.resetHandlers());
//afterAll(() => server.close());

describe('API-calls test', () => {
  it('Sheld return Rick & Morty', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );
    await waitForElementToBeRemoved(() => screen.queryByRole('alert'));
    screen.debug();
    //const rick = screen.getByTestId('1');
    //expect(rick).toBeInTheDocument();
    //expect(rick).toHaveTextContent(testData.results[0].name);
    //const morty = screen.getByTestId('2');
    //expect(morty).toBeInTheDocument();
    //expect(morty.children[2]).toHaveTextContent(testData.results[1].name);
    //expect(screen.queryAllByRole('card')).toHaveLength(2);
  });
  it('Sheld return alert', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );
    await waitForElementToBeRemoved(() => screen.queryByRole('alert'));

    const input = await screen.findByPlaceholderText<HTMLInputElement>('Enter a character name');

    expect(input).toBeInTheDocument();

    await userEvent.type(input, 'Betman');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await waitForElementToBeRemoved(() => screen.queryByRole('alert'));
    expect(screen.getByTestId('404')).toBeInTheDocument;
    expect(screen.queryAllByRole('card')).toHaveLength(0);
  });
});
