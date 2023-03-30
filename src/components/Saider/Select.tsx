import styled from '../styled';
import React from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { CardData } from '../../Types/Types';

const Select = (props: { register: UseFormRegister<CardData> }) => {
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
      <option value="Polna">Polna</option>
      <option value="other">other</option>
    </select>
  );
};

export default Select;
