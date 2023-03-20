import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { FormOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = { current: location.pathname };

  navItems: MenuProps['items'] = [
    {
      label: <Link to={'/'}>Home</Link>,
      key: '/',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={'/About'}>About</Link>,
      key: '/About',
      icon: <InfoCircleOutlined />,
    },
    {
      label: <Link to={'/Form'}>Form</Link>,
      key: '/Form',
      icon: <FormOutlined />,
    },
  ];

  componentDidMount() {
    this.setState({ current: location.pathname });
  }
  render() {
    return (
      <header>
        <Menu mode="horizontal" selectedKeys={[this.state.current]} items={this.navItems} />
      </header>
    );
  }
}

export default Header;
