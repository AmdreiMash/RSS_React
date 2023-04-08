import { setupServer } from 'msw/node';
import { rest } from 'msw';
import cardTestData from '../cardTestData';

export const server = setupServer(
  rest.get('/?name=rick', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cardTestData));
  })
);

export default server;
