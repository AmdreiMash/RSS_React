import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Form from './Form';
import Header from '../src/components/Header';
import { setupStore } from '../src/store/store';

export { Page };

function Page() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
}
