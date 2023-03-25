import React from 'react';
import FormCardWrapper from './FormCardWrapper';
import { FormCardsProps } from '../../Types/Interfaces';

class FormCards extends React.Component<FormCardsProps> {
  render() {
    return (
      <FormCardWrapper active={this.props.showForm}>
        <p>Card</p>
      </FormCardWrapper>
    );
  }
}

export default FormCards;
