import React, { useState } from 'react';
import style, { ProductWrapper, Text, Name, Info, Overlay, Close, DisableScroll } from './styled';
import { ReactComponent as Like } from '../../assets/like.svg';
import { Character } from '../Types/Types';
import { CloseCircleTwoTone } from '@ant-design/icons';

const CharacterCard = (props: Character) => {
  const [liked, srtLike] = useState(false);
  const [show, setShow] = useState(false);
  const { image, name, status, species, type, gender, origin, location, episode, created, id } =
    props;

  const likeHandler = () => srtLike(!liked);

  const showModal = (e: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as typeof e.target & {
      tagName: string;
    };
    target.tagName !== 'svg' && target.tagName !== 'path' && setShow(true);
  };

  return (
    <>
      <DisableScroll show={show} />
      <Overlay show={show} onClick={() => setShow(false)} data-testid={`${id}overlay`}></Overlay>
      <ProductWrapper onClick={(e) => showModal(e)} data-testid={id} role="card" show={show}>
        <Close show={show} data-testid={`${id}cross`} onClick={() => setShow(false)}>
          <CloseCircleTwoTone twoToneColor="#eb2f96" />
        </Close>
        <img src={image} width={'270px'} height={'320px'} />
        <Info style={style.productInfo}>
          <Name role="row" style={style.productName}>
            {name}
          </Name>
          <Text role="row">Status: {status}</Text>
          <Text role="row">Home planet: {origin.name}</Text>
          <Text role="row">Created: {created.split('T')[0]}</Text>

          {show && (
            <>
              <Text role="row">Species: {species}</Text>
              <Text role="row">Type: {type}</Text>
              <Text role="row">Gender: {gender}</Text>
              <Text role="row">
                Location: <a href="#">{location.name}</a>
              </Text>
              <Text role="row">
                <p>
                  Episode:{' '}
                  {episode.map(
                    (e, i, arr) => `${e.match(/\d+$/)}${i < arr.length - 1 ? ',' : '.'} `
                  )}
                </p>
              </Text>
              <Text role="row">ID: {id}</Text>
            </>
          )}

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
    </>
  );
};

export default CharacterCard;
