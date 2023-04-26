export { render };

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';

const store = setupStore();

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  console.log(Page);
  hydrateRoot(
    document.getElementById('react-root') as HTMLElement,
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Page {...pageProps} />
      </BrowserRouter>
    </Provider>
  );
}
