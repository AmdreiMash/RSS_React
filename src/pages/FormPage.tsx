import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Elements/PageWrapper';
import Saider from '../components/Saider/Saider';
import FormPageWrapper from '../components/Elements/FormPageWrapper';
import FormCards from '../components/FormCard/FormCards';
import { FormValue, CardData } from '../Types/Types';
import Message from '../components/Saider/Elements/SubmitMessage';

class FormPage extends React.Component {
  state = {
    showForm: false,
    cards: [
      {
        birtday: '1994-02-17',
        country: 'Ukraine',
        email: 'Ahdma@mail.ru',
        file: 'blob:http://localhost:8080/2226c4ed-9820-45be-b5d6-075707c71a97',
        gender: 'male',
        name: 'Андрей',
        policy: true,
      },
    ] as CardData[],
    showMessage: false,
  };

  showFormHandler = () => {
    console.log('showFormHandler');
    this.setState({ ...this.state, showForm: !this.state.showForm });
  };

  addNewCard = (data: FormValue) => {
    //const newCards = this.state.cards.push(data as CardData);
    this.setState({ ...this.state, cards: [...this.state.cards, data] });
    this.setState({ showMessage: true });
    console.log();
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 1500);
  };

  render() {
    return (
      <Wrapper>
        <Message showe={this.state.showMessage}>Successfully</Message>
        <Header />
        <FormPageWrapper>
          <Saider
            showForm={this.state.showForm}
            showFormHandler={this.showFormHandler}
            addNewCard={this.addNewCard}
          />
          <FormCards showForm={this.state.showForm} cards={this.state.cards} />
        </FormPageWrapper>
      </Wrapper>
    );
  }
}

export default FormPage;
