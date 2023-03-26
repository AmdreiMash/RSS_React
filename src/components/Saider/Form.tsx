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
import { FormValue } from '../../Types/Types';
import birthdayValidation from '../../utils/birthdayValidation';
import resetValues from '../../utils/resetValues';

class Form extends React.Component<{ addNewCard(data: FormValue): void }, FormState> {
  constructor(props: { addNewCard(data: FormValue): void }) {
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

  getData = () => {
    const name = nameValidation(this.name);
    const email = emailValidation(this.email);
    const birtday = birthdayValidation(this.birtday);
    const country = getValue(this.country) === 'Country' ? false : getValue(this.country);
    const img = getFile(this.file);
    const file = img ? URL.createObjectURL(img) : false;
    const policy = this.policy.current?.checked as boolean;
    const gender = this.male.current?.checked
      ? 'male'
      : this.female.current?.checked
      ? 'female'
      : false;

    const data: FormValue = { gender, name, email, birtday, country, file, policy };
    return data;
  };

  resetForm = () => {
    resetValues([this.name, this.email, this.birtday, this.policy, this.male, this.female]);
    this.country &&
      this.country.current &&
      this.country.current.value &&
      (this.country.current.value = 'Country');
    this.file &&
      this.file.current &&
      this.file.current.files &&
      (this.file.current.files = new DataTransfer().files);
  };

  submitHeader = (e: FormEvent) => {
    const data: FormValue = this.getData();
    const check: { [key: string]: boolean } = {};

    for (const key in data) {
      if (data[key] === false) {
        check[key] = false;
      } else {
        check[key] = true;
      }
    }

    e.preventDefault();

    this.setState({ ...this.state, ...check });

    if (!Object.values(check).includes(false)) {
      this.props.addNewCard(data);
      console.log(data);
      this.resetForm();
    }
  };

  render() {
    return (
      <FormWrapper onSubmit={this.submitHeader}>
        <Label status={this.state.name} message={errorMessage.name} bottom={'-25px'}>
          Name
          <Input
            status={this.state.name} //! this attribute will simply change the input color if the value fails validation. I didn't have to do that) But it turns out prettier this way :) do not consider it an error, there is a similar functionality for input components in all popular libraries like Antd or MUI. This component remains uncontrolled anyway
            ref={this.name}
            name="name"
          />
        </Label>
        <Label status={this.state.email} message={errorMessage.email} bottom={'-25px'}>
          Email
          <Input ref={this.email} name="email" status={this.state.email} />
        </Label>
        <Label status={this.state.birtday} message={errorMessage.birthday}>
          Birthday
          <input name="birthday" type="date" ref={this.birtday} />
        </Label>
        <Label status={this.state.country} message={errorMessage.country}>
          Сountry
          <Select link={this.country} />
        </Label>
        <Label status={this.state.gender} message={errorMessage.gender}>
          Gender:
          <Radio male={this.male} female={this.female} />
        </Label>
        <LabelFile status={this.state.file} message={'Add your foto'} style={styled.label}>
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
