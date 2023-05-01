import React from 'react';
import { CardData } from '../../Types/Types';
import CardWrapper from './Elements/CardWrapper';

const FormCard = (data: CardData) => {
  const { name, email, country, policy, birthday, gender, img } = data;
  return (
    <CardWrapper>
      <img src={img} alt="img" style={{ maxHeight: '295px' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>
          birthday:
          {typeof birthday === 'string' && birthday.split('-').join('.')}
        </span>
        <span>Country: {country}</span>
        <span>Gender: {gender}</span>
        <span>Аdopted the policy: {String(policy)}</span>
      </div>
    </CardWrapper>
  );
};

export default FormCard;
