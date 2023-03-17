import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
class App extends React.Component {
    render() {
        return (React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/About", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) })));
    }
}
export default App;
