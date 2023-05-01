import styled from '../styled';
import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { FormData } from '../../Types/Types';

const Select = (props: { register: UseFormRegister<FormData> }) => {
  const { register } = props;
  return (
    <select
      {...register('country', { required: true })}
      defaultValue=""
      style={styled.label}
      placeholder="Country"
    >
      <option value="" disabled>
        Select your country
      </option>
      <option value="Belarus">Belarus</option>
      <option value="Russia">Russia</option>
      <option value="Ukraine">Ukraine</option>
      <option value="Poland">Poland</option>
      <option value="other">other</option>
    </select>
  );
};

export default Select;
