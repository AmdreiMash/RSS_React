import React from 'react';
import styled from '../styled';
import FormWrapper from './Elements/FormWrapper';
import Input from './Elements/Input';
import Label from './Elements/Lable';
import errorMessage from '../../ErrorMessages';
import Select from './Select';
import Radio from './Radio';
import SubmitButton from './SubmitButton';
import { CardData } from '../../Types/Types';
import InputImg from './InputImg';
import { useForm } from 'react-hook-form';

const Form = (props: { addNewCard(data: CardData): void }) => {
  const { addNewCard } = props;
  const {
    register,
    handleSubmit,
    reset,
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
      file: '' as unknown as FileList,
    },
  });
  return (
    <FormWrapper
      onSubmit={handleSubmit((data) => {
        console.log(data);
        addNewCard(data);

        reset({}, { keepDefaultValues: true });
      })}
    >
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
      <Label status={errors.gender} message={errorMessage.gender}>
        Gender:
        <Radio register={register} />
      </Label>
      <InputImg status={errors.file} register={register} />
      <Label
        status={errors.policy}
        message={errorMessage.policy}
        style={{ ...styled.label, fontSize: '0.8em' }}
      >
        <p>
          I have read and agree with the <a href="#">privacy policy</a>
        </p>
        <input type="checkbox" {...register('policy', { required: true })} />
      </Label>
      <SubmitButton />
    </FormWrapper>
  );
};

export default Form;
