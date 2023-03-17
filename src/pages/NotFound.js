import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import Button from 'antd/es/button/button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from './styled';
class NotFound extends React.Component {
    render() {
        return (React.createElement("div", { style: styled.notFound },
            React.createElement(Button, { icon: React.createElement(HomeOutlined, null), size: "large", type: "text" },
                React.createElement(Link, { to: "/" }, " Home"))));
    }
}
export default NotFound;
