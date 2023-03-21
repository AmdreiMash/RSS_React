import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/steled/PageWrapper';
import Saider from '../components/Saider/Saider';

class FormPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Saider />
        <p>Cards</p>
      </Wrapper>
    );
  }
}

export default FormPage;
