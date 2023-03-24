import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import Button from 'antd/es/button/button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from './styles';

class NotFound extends React.Component {
  render() {
    return (
      <div style={styled.notFound}>
        <Button icon={<HomeOutlined />} size="large" type="text">
          <Link to="/"> Home</Link>
        </Button>
      </div>
    );
  }
}

export default NotFound;
