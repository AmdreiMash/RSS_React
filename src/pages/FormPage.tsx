import React, { useState } from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Elements/PageWrapper';
import Saider from '../components/Saider/Saider';
import FormPageWrapper from '../components/Elements/FormPageWrapper';
import FormCards from '../components/FormCard/FormCards';
import { CardData } from '../Types/Types';
import Message from '../components/Saider/Elements/SubmitMessage';

const FormPage = () => {
  const [showForm, showFormTogglet] = useState(false);
  const [cards, setCards] = useState([] as CardData[]);
  const [showMessage, showMessageTogglet] = useState(false);

  const showFormHandler = () => {
    showFormTogglet(!showForm);
  };

  const addNewCard = (data: CardData) => {
    const img = URL.createObjectURL(data.file[0]);
    setCards([...cards, { ...data, img } as CardData]);
    showMessageTogglet(true);
    setTimeout(() => {
      showMessageTogglet(false);
    }, 1500);
  };

  return (
    <Wrapper>
      <Message showe={showMessage}>Successfully</Message>
      <Header />
      <FormPageWrapper>
        <Saider showForm={showForm} showFormHandler={showFormHandler} addNewCard={addNewCard} />
        <FormCards showForm={showForm} cards={cards} />
      </FormPageWrapper>
    </Wrapper>
  );
};

export default FormPage;
