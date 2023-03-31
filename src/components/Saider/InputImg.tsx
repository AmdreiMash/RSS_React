import React from 'react';
import LabelFile from './Elements/LabelFile';
import File from './Elements/File';
import { FieldError, UseFormRegister } from 'react-hook-form/dist/types';
import { CardData } from 'Types/Types';

const InputImg = (props: {
  status: FieldError | undefined;
  register: UseFormRegister<CardData>;
}) => {
  const { status, register } = props;

  return (
    <div style={{ position: 'relative' }}>
      <LabelFile message="Upload your image" status={status}>
        Add Foto
        <File type="file" {...register('file', { required: true })} accept="image/*" />
      </LabelFile>
    </div>
  );
};

export default InputImg;
