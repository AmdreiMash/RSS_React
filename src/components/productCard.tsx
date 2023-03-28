import React, { useState } from 'react';
import { IProduct } from '../Types/interfaces';
import { Image } from 'antd';
import styled from './styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/like.svg';

const ProductCard = (data: IProduct) => {
  const [liked, srtLike] = useState(false);
  const [hover, setHover] = useState(false);
  const rateColor = ['black', 'red', '#E35049', '#E5D751', '#74F272', '#00F509'];
  const { price, image, title, rating, category } = data;
  const boxShadow = hover ? { boxShadow: '2px 10px 8px 0px rgba(34, 60, 80, 0.2)' } : {};

  const likeHandler = () => srtLike(!liked);
  const hoverHandler = () => {
    setHover(!hover);
  };

  return (
    <div
      className="card-content"
      style={{
        ...styled.productWrapper,
        flexDirection: 'column',
        ...boxShadow,
      }}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <Image src={image} width={'40%'} height={'60%'} />

      <div style={styled.productPrice}>{`${price}$`}</div>

      <div style={styled.productInfo}>
        <div style={styled.productName}>{title}</div>
        <div style={styled.productText}>
          Category: <Link to="">{`${category}`}</Link>
        </div>
        <div style={styled.productText}>
          Raiting:
          <span
            style={{ color: `${rateColor[Math.floor(rating.rate)]}` }}
          >{` ${rating.rate}`}</span>
        </div>
        <Like
          className="like"
          style={styled.like}
          fill={liked ? '#FF7979' : '#808080'}
          height={25}
          width={25}
          onClick={likeHandler}
        />
      </div>
    </div>
  );
};

export default ProductCard;
