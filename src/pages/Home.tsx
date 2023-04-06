import React, { useState } from 'react';
import Header from '../components/Header';
import Content from 'antd/es/layout/layout';
import SearchBar from '../components/SerchBar';
import style from './styles';
import Wrapper from '../components/Elements/PageWrapper';
import ProductCard from '../components/ProductCard';
import Products from '../../assets/products';

const HomePage = () => {
  //const inputHeandler = (e: InputEvent) => {
  //  e.target && setSerchValue(e.target.value);
  //};

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
