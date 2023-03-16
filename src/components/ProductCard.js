import React from 'react';
import { Image } from 'antd';
import styled from './styled';
const rateColor = ['black', 'red', '#E35049', '#E5D751', '#74F272', '#00F509'];
class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { style: { ...styled.productWrapper, flexDirection: 'column' } },
            React.createElement(Image, { src: this.props.data.image, width: '80%', height: '80%' }),
            React.createElement("div", { style: styled.productText }, this.props.data.title),
            React.createElement("div", { style: styled.productText }, this.props.data.category),
            React.createElement("div", { style: {
                    ...styled.productText,
                } },
                "Raiting:",
                React.createElement("span", { style: { color: `${rateColor[Math.floor(this.props.data.rating.rate)]}` } }, ` ${this.props.data.rating.rate}`))));
    }
}
export default ProductCard;
