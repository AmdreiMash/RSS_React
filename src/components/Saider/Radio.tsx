import styled from '../styled';
import React from 'react';
import { CardData } from '../../Types/Types';
import { UseFormRegister } from 'react-hook-form/dist/types';

const Radio = (props: { register: UseFormRegister<CardData> }) => {
  const { register } = props;
  return (
    <div style={styled.label}>
      <label style={styled.label}>
        female
        <input type="radio" {...register('gender', { required: true })} value="female" />
      </label>
      <label style={styled.label}>
        male
        <input type="radio" {...register('gender', { required: true })} value="male" />
      </label>
    </div>
  );
};

export default Radio;
