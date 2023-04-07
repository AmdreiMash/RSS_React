import React, { useState } from 'react';
import style, { ProductWrapper, Text, Name, Info } from './styled';
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
    <ProductWrapper role="card" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <img src={image} width={'90%'} height={'90%'} />

      <Info style={style.productInfo}>
        <Name role="row" style={style.productName}>
          {name}
        </Name>
        <Text role="row">Status: {status}</Text>
        <Text role="row">Home planet: {origin.name}</Text>
        <Text role="row">Created: {created.split('T')[0]}</Text>
        <Like
          role="button"
          style={style.like}
          fill={liked ? '#FF7979' : '#808080'}
          height={25}
          width={25}
          onClick={likeHandler}
        />
      </Info>
    </ProductWrapper>
  );
};

export default ProductCard;
