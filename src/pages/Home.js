import React from 'react';
import Header from '../components/Header';
import { Content } from 'antd/es/layout/layout';
import SearchBar from '../components/SerchBar';
import productsData from '../assets/products';
import ProductCard from '../components/ProductCard';
import style from './styled';
class HomePage extends React.Component {
    products = productsData.map((e) => React.createElement(ProductCard, { data: e, key: e.id }));
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement(Content, { style: style.main },
                React.createElement("div", { style: style.mainHeading },
                    React.createElement("h1", null, "Home"),
                    React.createElement(SearchBar, null)),
                React.createElement("div", { style: { ...style.productContainer } }, this.products))));
    }
}
export default HomePage;
