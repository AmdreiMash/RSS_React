import React from 'react';
import { Image } from 'antd';
import styled from './styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Like } from '../assets/like.svg';
const rateColor = ['black', 'red', '#E35049', '#E5D751', '#74F272', '#00F509'];
class ProductCard extends React.Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
    }
    likeHandler = () => this.setState({ liked: !this.state.liked });
    render() {
        return (React.createElement("div", { style: { ...styled.productWrapper, flexDirection: 'column' } },
            React.createElement(Image, { src: this.props.data.image, width: '40%', height: '60%' }),
            React.createElement("div", { style: styled.productPrice }, `${this.props.data.price}$`),
            React.createElement("div", { style: styled.productInfo },
                React.createElement("div", { style: styled.productName }, this.props.data.title),
                React.createElement("div", { style: styled.productText },
                    "Category: ",
                    React.createElement(Link, { to: "" }, ` ${this.props.data.category}`)),
                React.createElement("div", { style: {
                        ...styled.productText,
                    } },
                    "Raiting:",
                    React.createElement("span", { style: { color: `${rateColor[Math.floor(this.props.data.rating.rate)]}` } }, ` ${this.props.data.rating.rate}`)),
                React.createElement(Like, { style: styled.like, fill: this.state.liked ? '#FF7979' : '#808080', height: 25, width: 25, onClick: this.likeHandler }))));
    }
}
export default ProductCard;
