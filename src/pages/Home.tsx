import React from 'react';
import Header from 'components/Header';
import { Content } from 'antd/es/layout/layout';
import SearchBar from 'components/SerchBar';
import productsData from 'assets/products';
import ProductCard from 'components/ProductCard';
import style from './styled';

class HomePage extends React.Component {
  products: JSX.Element[] = productsData.map((e) => <ProductCard data={e} key={e.id} />);

  render() {
    return (
      <>
        <Header />
        <Content style={style.main}>
          <div style={style.mainHeading}>
            <h1>Home</h1>
            <SearchBar />
          </div>
          <div style={{ ...style.productContainer }}>{this.products}</div>
        </Content>
      </>
    );
  }
}

export default HomePage;
