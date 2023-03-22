import React from 'react';
import Wrapper from './SaiderWrapper';
import ShowButton from './showButton';
import { SaiderProps } from 'Types/interfaces';
import Form from './Form';

class Saider extends React.Component<SaiderProps> {
  render() {
    return (
      <Wrapper active={this.props.showForm}>
        <ShowButton onClick={this.props.showFormHandler} active={this.props.showForm}>
          {this.props.showForm ? 'Close' : ' Add card'}
        </ShowButton>
        <Form />
      </Wrapper>
    );
  }
}

export default Saider;
