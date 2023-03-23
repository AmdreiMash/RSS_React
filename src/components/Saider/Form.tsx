import React, { ChangeEvent, FormEvent } from 'react';
import styled from '../steled/styled';
import FormWrapper from './FormWrapper';
import Input from './Input';
import InputFile from './InputFile';
import LabelFile from './LabelFile';
import Button from './Button';

class Form extends React.Component {
  state = {
    staus: {
      name: true,
      email: true,
      birtday: true,
      country: true,
      gender: true,
      file: true,
      policy: true,
    },
    CardData: {
      name: '',
      email: '',
      birtday: '',
      country: '',
      gender: '',
      file: '',
      policy: false,
    },
  };
  inputHandler = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    event.target &&
      this.setState({
        ...this.state,
        CardData: { ...this.state.CardData, [name]: value },
      });
  };
  submitHeader = (e: FormEvent) => {
    const { CardData, staus } = this.state;
    e.preventDefault();
    console.log(CardData);
  };
  render() {
    return (
      <FormWrapper onSubmit={this.submitHeader}>
        <label>
          Name
          <Input
            name="name"
            type="text"
            status={this.state.staus.name}
            value={this.state.CardData.name}
            onChange={this.inputHandler}
          />
        </label>
        <label>
          Email
          <Input
            name="email"
            type="email"
            status={this.state.staus.email}
            onChange={this.inputHandler}
          />
        </label>
        <label style={styled.label}>
          Birthday
          <input
            name="birthday"
            type="date"
            max={'2015-01-01'}
            min={'1940-01-01'}
            onChange={this.inputHandler}
          />
        </label>
        <label style={styled.label}>
          Сountry
          <select name="country" style={styled.label} onChange={this.inputHandler}>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Polna">Polna</option>
            <option value="other">other</option>
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
        <LabelFile style={styled.label}>
          Add foto
          <InputFile type="file" name="file" onChange={this.inputHandler} />
        </LabelFile>
        <label style={{ ...styled.label, fontSize: '0.7em' }}>
          <p>
            I have read and agree with the <a href="#">privacy policy</a>
          </p>
          <input type="checkbox" name="policy" />
        </label>
        <button style={{ padding: '0', border: '0', background: 'none', boxShadow: 'none' }}>
          <Button active={false} role="button">
            Submit form
          </Button>
        </button>
      </FormWrapper>
    );
  }
}

export default Form;
