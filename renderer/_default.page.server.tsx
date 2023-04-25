import React from 'react';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vite-plugin-ssr/server';
import Header from '../src/components/Header';

export { render };
export { passToClient };

const passToClient = ['pageProps'];

async function render(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext;

  const header = renderToString(
    <StaticRouter location={urlPathname}>
      <Header />
    </StaticRouter>
  );

  const { pipe } = renderToPipeableStream(Page, {
    onShellReady() {
      console.log('onShellReady()');
    },
    onAllReady() {
      console.log('onAllReady()');
    },
    onShellError(err: unknown) {
      console.log('onShellError()');
      console.log(err);
    },
    onError(err: unknown) {
      console.log('onError()');
      console.log(err);
    },
  });
  stampPipe(pipe, 'node-stream');
  const pageHtml = pipe;

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${pageHtml}</div>
      </body>
    </html>`;
}
