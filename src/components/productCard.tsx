import React from 'react';
import { IPriduct } from '../Types/interfaces';

const styled = {
  wrapper: {
    width: '200px',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    border: '1px solid  rgba(0, 0, 0, 0.09)',
    borderRadius: '5px',
  },
  text: { backgroundColor: '#91A2AE' },
};
class ProductCard extends React.Component<{ data: IPriduct }> {
  constructor(props: { data: IPriduct }) {
    super(props);
  }
  render() {
    return (
      <div style={{ ...styled.wrapper, backgroundImage: `url("${this.props.data.image}")` }}>
        <p style={styled.text}>{this.props.data.title}</p>
      </div>
    );
  }
}

export default ProductCard;
