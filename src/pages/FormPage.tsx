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
    cards: [] as CardData[],
    showMessage: false,
  };

  showFormHandler = () => {
    this.setState({ ...this.state, showForm: !this.state.showForm });
  };

  addNewCard = (data: FormValue) => {
    this.setState({ ...this.state, cards: [...this.state.cards, data] });
    this.setState({ showMessage: true });
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
