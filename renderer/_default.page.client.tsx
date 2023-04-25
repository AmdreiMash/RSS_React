export { render };
import { StyleProvider } from '@ant-design/cssinjs';

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';

async function render(pageContext) {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById('react-root') as HTMLElement,
    <BrowserRouter>
      <Header />
      <Page {...pageContext.pageProps} />
    </BrowserRouter>
  );
}
