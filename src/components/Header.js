import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    state = { current: location.pathname };
    navItems = [
        {
            label: React.createElement(Link, { to: '/' }, "Home"),
            key: '/',
            icon: React.createElement(HomeOutlined, null),
        },
        {
            label: React.createElement(Link, { to: 'About' }, "About"),
            key: '/About',
            icon: React.createElement(InfoCircleOutlined, null),
        },
    ];
    componentDidMount() {
        this.setState({ current: location.pathname });
    }
    render() {
        return (React.createElement("header", null,
            React.createElement(Menu, { mode: "horizontal", selectedKeys: [this.state.current], items: this.navItems })));
    }
}
export default Header;
