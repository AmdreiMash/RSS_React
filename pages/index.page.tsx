import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Form from './Form';
import Header from '../src/components/Header';
import NotFound from './NotFound';

export { Page };

function Page() {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/" element={<About />} />
      {/*<Route path="/HOME" element={<div>12345</div>} />*/}
      {/*<Route path="/Form" element={<Form />} />*/}
      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}
