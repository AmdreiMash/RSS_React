import { setupServer } from 'msw/node';
import { rest } from 'msw';
import cardTestData from '../cardTestData.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    if (req.url.searchParams.get('name') === 'rick') {
      return res(ctx.status(200), ctx.json({ results: [cardTestData.results[0]] }));
    } else if (req.url.searchParams.get('name') === 'morty') {
      return res(ctx.status(200), ctx.json({ results: [cardTestData.results[1]] }));
    } else if (req.url.searchParams.get('name') === '') {
      return res(ctx.status(200), ctx.json({ results: cardTestData.results }));
    } else {
      return res(ctx.status(404));
    }
  })
);

export default server;
