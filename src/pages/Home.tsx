import React from 'react';
import Header from '../components/Header';
import Content from 'antd/es/layout/layout';
import SearchBar from '../components/SerchBar';
import style from './styles';
import Products from '../../assets/products';
import ProductCard from '../components/productCard';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content style={style.main}>
          <div style={style.mainHeading}>
            <h1>Home</h1>
            <SearchBar />
          </div>
          <div style={{ ...style.productContainer }}>
            {Products.map((e) => (
              <ProductCard data={e} key={e.id} />
            ))}
          </div>
        </Content>
      </>
    );
  }
}

export default HomePage;
