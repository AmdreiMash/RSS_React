import React from 'react';
import { CardData } from 'Types/Types';
import CardWrapper from './Elements/CardWrapper';

class FormCard extends React.Component<{ data: CardData }> {
  render() {
    const { data } = this.props;
    const { name, email, country, policy, birtday, gender, file } = data;
    return (
      <CardWrapper>
        <img src={file} alt="img" style={{ maxHeight: '295px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Name: {name}</span>
          <span>Email: {email}</span>
          <span>
            Birtday:
            {typeof birtday === 'string' && birtday.split('-').join('.')}
          </span>
          <span>Country: {country}</span>
          <span>Gender: {gender}</span>
          <span>Аdopted the policy: {String(policy)}</span>
        </div>
      </CardWrapper>
    );
  }
}

export default FormCard;
