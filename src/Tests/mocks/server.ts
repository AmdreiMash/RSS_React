import { setupServer } from 'msw/node';
import { rest } from 'msw';
import cardTestData from '../cardTestData.json';

//const server = setupServer(
//  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
//    console.log(
//      'server================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================'
//    );
//    console.log(req.url.searchParams.get('name'));
//    if (req.url.searchParams.get('name') === 'rick') {
//      return res(ctx.status(200), ctx.json({ results: [cardTestData.results[0]] }));
//    } else if (req.url.searchParams.get('name') === 'morty') {
//      return res(ctx.status(200), ctx.json({ results: [cardTestData.results[1]] }));
//    } else if (req.url.searchParams.get('name') === '') {
//      return res(ctx.status(200), ctx.json({ results: cardTestData.results }));
//    } else {
//      return res(ctx.status(404));
//    }
//  })
//);

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json({ cardTestData }), ctx.delay(100));
  }),
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({ cardTestData }), ctx.delay(100));
  })
);

export default server;
