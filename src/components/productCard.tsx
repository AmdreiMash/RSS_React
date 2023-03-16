import React from 'react';
import { IPriduct } from '../Types/interfaces';
import { Image } from 'antd';
import styled from './styled';

const rateColor = ['black', 'red', '#E35049', '#E5D751', '#74F272', '#00F509'];

class ProductCard extends React.Component<{ data: IPriduct }> {
  constructor(props: { data: IPriduct }) {
    super(props);
  }
  render() {
    return (
      <div style={{ ...styled.productWrapper, flexDirection: 'column' }}>
        <Image src={this.props.data.image} width={'80%'} height={'80%'} />
        <div style={styled.productText}>{this.props.data.title}</div>
        <div style={styled.productText}>{this.props.data.category}</div>
        <div
          style={{
            ...styled.productText,
          }}
        >
          Raiting:
          <span style={{ color: `${rateColor[Math.floor(this.props.data.rating.rate)]}` }}>
            {` ${this.props.data.rating.rate}`}
          </span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
