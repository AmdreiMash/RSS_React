import React from 'react';
import { CardData, FormValue } from 'Types/Types';
import CardWrapper from './CardWrapper';

class FormCard extends React.Component<{ data: CardData }> {
  render() {
    const { data } = this.props;
    const { name, email, country, policy, birtday, gender } = data;
    return (
      <CardWrapper>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>
          Birtday:
          {typeof birtday === 'string' && birtday.split('-').join('.')}
        </p>
        <p>Country: {country}</p>
        <p>Gender: {gender}</p>
        <p>Аdopted the policy: {String(policy)}</p>
      </CardWrapper>
    );
  }
}

export default FormCard;
