import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import Header from '../src/components/Header';
import { setupStore } from '../src/store/store';
import { Provider } from 'react-redux';

const store = setupStore();

export { render };
export { passToClient };

const passToClient = ['pageProps'];

async function render(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext;
  const pageHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={urlPathname}>
        <Header />
        <Page {...pageProps} />
      </StaticRouter>
    </Provider>
  );
  return escapeInject`<!DOCTYPE html>
    <html>
    <head> 
    <title>SSR by Dron</title>
    <link rel="shortcut icon" href="../assets/i'm_fine.png" type="image/x-icon">
    </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
