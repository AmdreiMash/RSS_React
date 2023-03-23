import styled from '../steled/styled';
import React from 'react';
import FormWrapper from './FormWrapper';
import Input from './Input';
import InputFile from './InputFile';
import LabelFile from './LabelFile';

class Form extends React.Component {
  state = { staus: true };
  render() {
    return (
      <FormWrapper>
        <label>
          Name
          <Input type="text" status={this.state.staus} />
        </label>
        <label>
          Email
          <Input type="email" status={this.state.staus} />
        </label>
        <label style={styled.label}>
          Birthday
          <input type="date" max={'2015-01-01'} min={'1940-01-01'} />
        </label>
        <label style={styled.label}>
          Сountry
          <select name="Сountry" style={styled.label}>
            <option value="value1">Belarus</option>
            <option value="value2">Russia</option>
            <option value="value3">Ukraine</option>
            <option value="value4">Polna</option>
            <option value="value5">other</option>
          </select>
        </label>
        <div style={styled.label}>
          <label style={styled.label}>
            <input type="radio" name="gender" value="female" />
            female
          </label>
          <label style={styled.label}>
            <input type="radio" name="gender" value="male" />
            male
          </label>
        </div>
        {/*<label style={styled.label}>
          <input type="radio" name="gender" value="undecided" />
          still undecided
        </label>*/}
        <LabelFile style={styled.label}>
          Add foto
          <InputFile type="file" />
        </LabelFile>
        <label style={{ ...styled.label, fontSize: '0.7em' }}>
          <p>
            I have read and agree with the <a href="#">privacy policy</a>
          </p>
          <input type="checkbox" />
        </label>
      </FormWrapper>
    );
  }
}

export default Form;
