import React, { useState } from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Elements/PageWrapper';
import Saider from '../components/Saider/Saider';
import FormPageWrapper from '../components/Elements/FormPageWrapper';
import FormCards from '../components/FormCard/FormCards';
import { CardData } from '../Types/Types';
import Message from '../components/Saider/Elements/SubmitMessage';
import { useAppDiepatch, useAppSelector } from '../store/hooks/redux';
import { AppSlice } from '../store/redusers/UseSlice';

const FormPage = () => {
  const [showForm, showFormTogglet] = useState(false);
  const { formCards } = useAppSelector((state) => state.AppReducer);
  const { addFormCard } = AppSlice.actions;
  const [showMessage, showMessageTogglet] = useState(false);
  const dispatch = useAppDiepatch();

  const showFormHandler = () => {
    showFormTogglet(!showForm);
  };

  const addNewCard = (data: CardData) => {
    const img = URL.createObjectURL(data.file[0]);
    dispatch(addFormCard({ ...data, img }));
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
        <FormCards showForm={showForm} cards={formCards} />
      </FormPageWrapper>
    </Wrapper>
  );
};

export default FormPage;
