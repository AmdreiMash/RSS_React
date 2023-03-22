import React from 'react';
import FormWrapper from './FormWrapper';
import Input from './Input';

class Form extends React.Component {
  state = { staus: true };
  render() {
    return (
      <FormWrapper>
        <Input type="text" status={this.state.staus} />
      </FormWrapper>
    );
  }
}

export default Form;
