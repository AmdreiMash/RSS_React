import React from 'react';
import { IPriduct } from '../Types/interfaces';
import { Image } from 'antd';
import styled from './styled';

class ProductCard extends React.Component<{ data: IPriduct }> {
  constructor(props: { data: IPriduct }) {
    super(props);
  }
  render() {
    return (
      <div style={{ ...styled.productWrapper, flexDirection: 'column' }}>
        <Image src={this.props.data.image} width={'80%'} height={'80%'} />
        <p style={styled.productText}>{this.props.data.title}</p>
      </div>
    );
  }
}

export default ProductCard;
