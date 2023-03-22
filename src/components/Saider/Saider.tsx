import React from 'react';
import Wrapper from './Wrapper';
import ShowButton from './showButton';
import { SaiderProps } from 'Types/interfaces';

class Saider extends React.Component<SaiderProps> {
  render() {
    return (
      <Wrapper active={this.props.showForm}>
        <h1>Saider</h1>
        <ShowButton onClick={this.props.showFormHandler} active={this.props.showForm}>
          Add card
        </ShowButton>
      </Wrapper>
    );
  }
}

export default Saider;
