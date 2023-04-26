import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Form from './Form';
import Header from '../src/components/Header';
import NotFound from './NotFound';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store/store';

const store = setupStore();

export { Page };

function Page() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Provider>
  );
}
