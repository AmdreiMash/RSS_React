import React from 'react';
import Header from '../components/Header';
import { Content } from 'antd/es/layout/layout';
import SearchBar from '../components/SerchBar';
import { Col, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0', minWidth: '200px' };
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', width: '90%' }}>
            <h1>Home</h1>
            <SearchBar />
          </div>
          <div style={{ display: 'flex', gap: '20px', width: '80%' }}></div>
        </Content>
      </>
    );
  }
}

export default HomePage;
