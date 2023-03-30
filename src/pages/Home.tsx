import React from 'react';
import Header from '../components/Header';
import Content from 'antd/es/layout/layout';
import SearchBar from '../components/SerchBar';
import style from './styles';
import Products from '../../assets/products';
import ProductCard from '../components/ProductCard';
import Wrapper from '../components/Elements/PageWrapper';

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Content style={style.main}>
        <div style={style.mainHeading}>
          <h1>Home</h1>
          <SearchBar />
        </div>
        <div style={{ ...style.productContainer }}>
          {Products.map((e) => (
            <ProductCard key={e.id} {...e} />
          ))}
        </div>
      </Content>
    </Wrapper>
  );
};

export default HomePage;
