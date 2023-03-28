import React from 'react';
import FormCardsWrapper from './Elements/FormCardsWrapper';
import { FormCardsProps } from '../../Types/interfaces';
import FormCard from './FormCard';

const FormCards = (props: FormCardsProps) => {
  const { showForm, cards } = props;
  return (
    <FormCardsWrapper active={showForm}>
      {cards.map((data, index) => (
        <FormCard key={`${index}`} {...data} />
      ))}
    </FormCardsWrapper>
  );
};

export default FormCards;
