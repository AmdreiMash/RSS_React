import React from 'react';
import Wrapper from './Elements/SaiderWrapper';
import ShowButton from './Elements/ShowButton';
import { SaiderProps } from '../../Types/interfaces';
import Form from './Form';

const Saider = (props: SaiderProps) => {
  const { showForm, showFormHandler, addNewCard } = props;

  return (
    <Wrapper active={showForm}>
      <ShowButton onClick={showFormHandler} active={showForm}>
        {showForm ? 'Close' : ' Add card'}
      </ShowButton>
      <Form addNewCard={addNewCard} />
    </Wrapper>
  );
};

export default Saider;
