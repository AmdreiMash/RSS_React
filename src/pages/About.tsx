import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Header/NavBar';

class About extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>About Us</h1>
        <p>Some content...</p>
      </>
    );
  }
}

export default About;
