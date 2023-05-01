import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { FormOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const current = useLocation().pathname;

  const navItems: MenuProps['items'] = [
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

  return <Menu mode="horizontal" selectedKeys={[current]} items={navItems} />;
};

export default Header;
