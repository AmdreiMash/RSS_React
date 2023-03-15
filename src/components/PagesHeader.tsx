import React from 'react';
import { Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;
class PagesHeader extends React.Component {
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
    return (
      <Header>
        <Menu mode="horizontal" selectedKeys={[this.state.current]} items={this.navItems} />
      </Header>
    );
  }
}

export default PagesHeader;
