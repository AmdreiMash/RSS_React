import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Elements/PageWrapper';
import Saider from '../components/Saider/Saider';
import FormPageWrapper from '../components/Elements/FormPageWrapper';
import FormCards from '../components/FormCard/FormCard';
import { FormValue } from '../Types/Types';
import Message from '../components/Saider/Elements/SubmitMessage';

class FormPage extends React.Component {
  state = { showForm: false, cards: [] as FormValue[], showMessage: false };

  showFormHandler = () => {
    console.log('showFormHandler');
    this.setState({ ...this.state, showForm: !this.state.showForm });
  };

  addNewCard = (data: FormValue) => {
    const newCards = this.state.cards.push(data);
    this.setState({ ...this.state, cards: newCards });
    this.setState({ showMessage: true });
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 1500);
  };

  render() {
    return (
      <Wrapper>
        <Message showe={this.state.showMessage}>Secsess</Message>
        <Header />
        <FormPageWrapper>
          <Saider
            showForm={this.state.showForm}
            showFormHandler={this.showFormHandler}
            addNewCard={this.addNewCard}
          />
          <FormCards showForm={this.state.showForm} />
        </FormPageWrapper>
      </Wrapper>
    );
  }
}

export default FormPage;
