import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Elements/PageWrapper';
import Saider from '../components/Saider/Saider';
import FormPageWrapper from '../components/Elements/FormPageWrapper';
import FormCards from '../components/FormCard/FormCard';

class FormPage extends React.Component {
  state = { showForm: false };

  showFormHandler = () => {
    console.log('showFormHandler');
    this.setState({ ...this.state, showForm: !this.state.showForm });
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <FormPageWrapper>
          <Saider showForm={this.state.showForm} showFormHandler={this.showFormHandler} />
          <FormCards showForm={this.state.showForm} />
        </FormPageWrapper>
      </Wrapper>
    );
  }
}

export default FormPage;
