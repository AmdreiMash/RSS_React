import React, { FormEvent } from 'react';
import styled from '../styled';
import FormWrapper from './Elements/FormWrapper';
import Input from './Elements/Input';
import InputFile from './Elements/InputFile';
import LabelFile from './Elements/LabelFile';
import { FormState } from 'Types/Interfaces';
import Label from './Elements/Lable';
import errorMessage from '../../ErrorMessages';
import Select from './Select';
import Radio from './Radio';
import SubmitButton from './SubmitButton';
import getValue from '../../utils/getValue';
import getFile from '../../utils/getFile';
import nameValidation from '../../utils/nameVlaidation';
import emailValidation from '../../utils/emailValidarion';

class Form extends React.Component<Record<string, never>, FormState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      name: true,
      email: true,
      birtday: true,
      country: true,
      gender: true,
      file: true,
      policy: true,
    };
  }

  name = React.createRef<HTMLInputElement>();
  email = React.createRef<HTMLInputElement>();
  birtday = React.createRef<HTMLInputElement>();
  country = React.createRef<HTMLSelectElement>();
  file = React.createRef<HTMLInputElement>();
  policy = React.createRef<HTMLInputElement>();
  male = React.createRef<HTMLInputElement>();
  female = React.createRef<HTMLInputElement>();

  submitHeader = (e: FormEvent) => {
    const name = nameValidation(this.name);
    const email = emailValidation(this.email);
    const birtday = getValue(this.birtday);
    const country = getValue(this.country);
    const img = getFile(this.file);
    const file = img ? URL.createObjectURL(img) : false;
    const policy = this.policy.current?.checked;
    const gender = this.male.current?.checked
      ? 'male'
      : this.female.current?.checked
      ? 'female'
      : false;

    const data = { gender, name, email, birtday, country, file, policy };
    console.log(data);

    e.preventDefault();
  };
  render() {
    return (
      <FormWrapper onSubmit={this.submitHeader}>
        <Label status={this.state.name} message={errorMessage.name}>
          Name
          <Input
            status={this.state.name} //! this attribute will simply change the input color if the value fails validation. I didn't have to do that) But it turns out prettier this way :) do not consider it an error, there is a similar functionality for input components in all popular libraries like Antd or MUI. This component remains uncontrolled anyway
            ref={this.name}
            name="name"
          />
        </Label>
        <Label status={this.state.email} message={errorMessage.email}>
          Email
          <Input ref={this.email} name="email" status={this.state.email} />
        </Label>
        <Label status={this.state.birtday} message={errorMessage.birthday}>
          Birthday
          <input
            name="birthday"
            type="date"
            max={'2015-01-01'}
            min={'1940-01-01'}
            ref={this.birtday}
          />
        </Label>
        <Label status={this.state.country} message={errorMessage.country}>
          Сountry
          <Select link={this.country} />
        </Label>
        <Label status={this.state.gender} message={errorMessage.gender}>
          Gender:
          <Radio male={this.male} female={this.female} />
        </Label>
        <LabelFile status={false} message={'Add your foto'} style={styled.label}>
          Add foto
          <InputFile ref={this.file} type="file" name="file" accept="image/*" multiple={false} />
        </LabelFile>
        <Label
          status={this.state.policy}
          message={errorMessage.policy}
          style={{ ...styled.label, fontSize: '0.8em' }}
        >
          <p>
            I have read and agree with the <a href="#">privacy policy</a>
          </p>
          <input type="checkbox" ref={this.policy} />
        </Label>
        <SubmitButton />
      </FormWrapper>
    );
  }
}

export default Form;
