export { render };

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';

async function render(pageContext) {
  const { Page } = pageContext;
  console.log(Page);
  hydrateRoot(
    document.getElementById('react-root') as HTMLElement,
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>
  );
}
