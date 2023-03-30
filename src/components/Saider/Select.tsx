import styled from '../styled';
import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';

const Select = (props: {
  register: UseFormRegister<{
    name: string;
    email: string;
    birthday: string;
    country: string;
    gender: string;
    policy: boolean;
    male: boolean;
    female: boolean;
    file: string;
  }>;
}) => {
  const { register } = props;
  return (
    <select {...register('country', { required: true })} style={styled.label} placeholder="Country">
      <option value="" disabled selected>
        Select your country
      </option>
      <option value="Belarus">Belarus</option>
      <option value="Russia">Russia</option>
      <option value="Ukraine">Ukraine</option>
      <option value="Polna">Polna</option>
      <option value="other">other</option>
    </select>
  );
};

export default Select;
