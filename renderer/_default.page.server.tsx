import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import Header from '../src/components/Header';
import { setupStore } from '../src/store/store';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';

const store = setupStore();
export { render };
export { passToClient };

const passToClient = ['pageProps'];

async function render(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext;
  const sheet = new ServerStyleSheet();
  const pageHtml = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={urlPathname}>
          <Header />
          <Page {...pageProps} />
        </StaticRouter>
      </Provider>
    )
  );
  return escapeInject`<!DOCTYPE html>
    <html>
    <head> 
    <title>SSR by Dron</title>
    <link rel="shortcut icon" href="../assets/i'm_fine.png" type="image/x-icon">
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.10/antd.css"
  />

    <style>${dangerouslySkipEscape(sheet.getStyleTags())}</style>
    </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
