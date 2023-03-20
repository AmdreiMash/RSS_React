import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Form from './pages/Form';
class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
export default App;
