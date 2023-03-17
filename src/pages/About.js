import React from 'react';
import Header from '../components/Header';
class About extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement("h1", null, "About Us"),
            React.createElement("p", null, "Some content...")));
    }
}
export default About;
