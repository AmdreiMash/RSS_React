import React, { useState } from 'react';
import { Image } from 'antd';
import style, { ProductWrapper } from './styled';
import { ReactComponent as Like } from '../../assets/like.svg';
import { Character } from '../Types/Types';

const ProductCard = (props: Character) => {
  const [liked, srtLike] = useState(false);
  const [hover, setHover] = useState(false);
  const rateColor = ['black', 'red', '#E35049', '#E5D751', '#74F272', '#00F509'];
  const { image, name, status, species, type, gender, origin, location, episode, created } = props;
  const boxShadow = hover ? { boxShadow: '2px 10px 8px 0px rgba(34, 60, 80, 0.2)' } : {};

  const likeHandler = () => srtLike(!liked);
  const hoverHandler = () => {
    setHover(!hover);
  };

  return (
    <ProductWrapper
      className="card-content"
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <Image src={image} width={'90%'} height={'90%'} />

      <div style={style.productInfo}>
        <div style={style.productName}>{name}</div>
        <div style={style.productText}>Status: {status}</div>
        <div style={style.productText}>Home planet: {origin.name}</div>
        <div style={style.productText}>Created: {created.split('T')[0]}</div>
        <Like
          className="like"
          style={style.like}
          fill={liked ? '#FF7979' : '#808080'}
          height={25}
          width={25}
          onClick={likeHandler}
        />
      </div>
    </ProductWrapper>
  );
};

export default ProductCard;
