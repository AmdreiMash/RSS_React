import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <>
        <h1>About</h1>
        <Link to={'/'}>Home</Link>
      </>
    );
  }
}

export default About;
