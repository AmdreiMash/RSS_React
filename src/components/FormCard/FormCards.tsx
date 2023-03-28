import React from 'react';
import FormCardsWrapper from './Elements/FormCardsWrapper';
import { FormCardsProps } from '../../Types/interfaces';
import FormCard from './FormCard';

class FormCards extends React.Component<FormCardsProps> {
  render() {
    return (
      <FormCardsWrapper active={this.props.showForm}>
        {this.props.cards.map((data, index) => (
          <FormCard key={index} data={data} />
        ))}
      </FormCardsWrapper>
    );
  }
}

export default FormCards;
