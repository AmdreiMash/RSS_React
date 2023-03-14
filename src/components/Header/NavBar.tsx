import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  state = { current: location.pathname };

  navItems: MenuProps['items'] = [
    {
      label: <Link to={'/'}>Home</Link>,
      key: '/',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={'About'}>About</Link>,
      key: '/About',
      icon: <InfoCircleOutlined />,
    },
  ];

  componentDidMount() {
    this.setState({ current: location.pathname });
  }

  render() {
    return <Menu mode="horizontal" selectedKeys={[this.state.current]} items={this.navItems} />;
  }
}

export default NavBar;
