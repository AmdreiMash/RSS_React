import React, { useState } from 'react';
import style, { ProductWrapper } from './styled';
import { ReactComponent as Like } from '../../assets/like.svg';
import { Character } from '../Types/Types';

const ProductCard = (props: Character) => {
  const [liked, srtLike] = useState(false);
  const [hover, setHover] = useState(false);
  const { image, name, status, species, type, gender, origin, location, episode, created } = props;

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
      <img src={image} width={'90%'} height={'90%'} />

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
