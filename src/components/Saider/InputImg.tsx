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
      <LabelFile message="Upload your foto" status={status}>
        Add Foto
        <File
          type="file"
          {...register('file', {
            required: true,
            validate: { type: (value) => value[0] && value[0].type.startsWith('image') },
          })}
          accept="image/*"
          multiple={false}
        />
      </LabelFile>
    </div>
  );
};

export default InputImg;
