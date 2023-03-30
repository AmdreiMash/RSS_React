import React, { FormEvent, useState } from 'react';
import styled from '../styled';
import FormWrapper from './Elements/FormWrapper';
import Input from './Elements/Input';
import InputFile from './Elements/File';
import LabelFile from './Elements/LabelFile';
import { FormState } from 'Types/interfaces';
import Label from './Elements/Lable';
import errorMessage from '../../ErrorMessages';
import Select from './Select';
import Radio from './Radio';
import SubmitButton from './SubmitButton';
import getValue from '../../utils/getValue';
import getFile from '../../utils/getFile';
import emailValidation from '../../utils/emailValidarion';
import { FormValue } from '../../Types/Types';
import birthdayValidation from '../../utils/birthdayValidation';
import resetValues from '../../utils/resetValues';
import InputImg from './InputImg';
import { useForm, SubmitHandler } from 'react-hook-form';

const Form = (props: { addNewCard(data: FormValue): void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      birthday: '',
      country: '',
      gender: '',
      policy: false,
      male: false,
      female: false,
      file: '',
    },
  });

  //const getData = (data) => {
  //  const name = nameValidation(data.name);
  //  const email = emailValidation(data.email);
  //  const birthday = birthdayValidation(data.birthday);
  //  const country = getValue(data.country) === 'Country' ? false : getValue(this.country);
  //  const img = getFile(data.file);
  //  const file = img ? URL.createObjectURL(img) : false;
  //  const policy = data.policy.current?.checked as boolean;
  //  const gender = data.male.current?.checked
  //    ? 'male'
  //    : data.female.current?.checked
  //    ? 'female'
  //    : false;

  //  const values: FormValue = { gender, name, email, birthday, country, file, policy };
  //  return values;
  //};

  //const resetForm = () => {
  //  resetValues([this.name, this.email, this.birthday, this.policy, this.male, this.female]);
  //  this.country &&
  //    this.country.current &&
  //    this.country.current.value &&
  //    (this.country.current.value = 'Country');
  //  this.file &&
  //    this.file.current &&
  //    this.file.current.files &&
  //    (this.file.current.files = new DataTransfer().files);
  //};

  //const submitHeader = (e: FormEvent) => {
  //  const data: FormValue = this.getData();
  //  const check: { [key: string]: boolean } = {};

  //  for (const key in data) {
  //    if (data[key] === false) {
  //      check[key] = false;
  //    } else {
  //      check[key] = true;
  //    }
  //  }

  //  e.preventDefault();

  //  this.setState({ ...this.state, ...check });

  //  if (!Object.values(check).includes(false)) {
  //    this.props.addNewCard(data);
  //    this.resetForm();
  //  }
  //};

  return (
    <FormWrapper onSubmit={handleSubmit((data) => console.log(data))}>
      <Label status={errors.name} message={errorMessage.name} bottom="-25px">
        Name
        <Input
          status={errors.name}
          {...register('name', {
            required: true,
            maxLength: 30,
            pattern: /^[A-ZА-ЯЁ][a-zа-яё]+$/,
          })}
        />
      </Label>
      <Label status={errors.email} message={errorMessage.email} bottom={'-25px'}>
        Email
        <Input
          status={errors.email}
          {...register('email', {
            required: true,
            maxLength: 30,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
      </Label>
      <Label status={errors.birthday} message={errorMessage.birthday}>
        Birthday
        <input
          {...register('birthday', { required: true, max: '2014-12-31', min: '1940-01-01' })}
          type="date"
        />
      </Label>
      <Label status={errors.country} message={errorMessage.country}>
        Сountry
        <Select register={register} />
      </Label>
      {/*<Label status={this.state.gender} message={errorMessage.gender}>
        Gender:
        <Radio male={this.male} female={this.female} />
      </Label>*/}
      {/*<InputImg status={this.state.file} ref={this.file} />*/}
      {/*<LabelFile status={this.state.file} message={'Add your foto'} style={styled.label}>
          Add foto
          <InputFile ref={this.file} type="file" name="file" accept="image/*" multiple={false} />
        </LabelFile>*/}
      {/*<Label
        status={this.state.policy}
        message={errorMessage.policy}
        style={{ ...styled.label, fontSize: '0.8em' }}
      >
        <p>
          I have read and agree with the <a href="#">privacy policy</a>
        </p>
        <input type="checkbox" ref={this.policy} />
      </Label>*/}
      <SubmitButton />
    </FormWrapper>
  );
};

export default Form;
