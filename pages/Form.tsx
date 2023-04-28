import React, { useState } from 'react';
import Header from '../src/components/Header';
import Wrapper from '../src/components/Elements/PageWrapper';
import Saider from '../src/components/Saider/Saider';
import FormPageWrapper from '../src/components/Elements/FormPageWrapper';
import FormCards from '../src/components/FormCard/FormCards';
import { FormData } from '../src/Types/Types';
import Message from '../src/components/Saider/Elements/SubmitMessage';
import { useAppDiepatch, useAppSelector } from '../src/store/hooks/redux';
import { AppSlice } from '../src/store/redusers/appSlice';

const FormPage = () => {
  const [showForm, showFormTogglet] = useState(false);
  const [showMessage, showMessageTogglet] = useState(false);
  const { formCards } = useAppSelector((state) => state.AppReducer);
  const { addFormCard } = AppSlice.actions;
  const dispatch = useAppDiepatch();

  const showFormHandler = () => {
    showFormTogglet(!showForm);
  };

  const addNewCard = (data: FormData) => {
    const { name, email, birthday, country, policy, gender } = data;
    const img = URL.createObjectURL(data.file[0]);
    dispatch(addFormCard({ name, email, birthday, country, policy, gender, img }));
    showMessageTogglet(true);
    setTimeout(() => {
      showMessageTogglet(false);
    }, 1500);
  };

  return (
    <Wrapper>
      <Message showe={showMessage}>Successfully</Message>
      <FormPageWrapper>
        <Saider showForm={showForm} showFormHandler={showFormHandler} addNewCard={addNewCard} />
        <FormCards showForm={showForm} cards={formCards} />
      </FormPageWrapper>
    </Wrapper>
  );
};

export default FormPage;
