export { render };

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  console.log(Page);
  hydrateRoot(
    document.getElementById('react-root') as HTMLElement,
    <BrowserRouter>
      <Header />
      <Page {...pageProps} />
    </BrowserRouter>
  );
}
