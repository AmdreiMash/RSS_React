import React, { useState } from 'react';
import LabelFile from './Elements/LabelFile';
import File from './Elements/File';
import frame from '../../../assets/frame.svg';
import Img from './Elements/Img';
import { FieldError, UseFormRegister } from 'react-hook-form/dist/types';
import { CardData } from 'Types/Types';

const InputImg = (props: {
  status: FieldError | undefined;
  register: UseFormRegister<CardData>;
}) => {
  const { status, register } = props;
  const [img, setImg] = useState(frame);

  return (
    <div style={{ position: 'relative' }}>
      <LabelFile message="Upload your image" status={status}>
        Add Foto
        <File
          type="file"
          {...register('file', { required: true })}
          accept="image/*"
          onChange={(e) =>
            setImg(e.target?.files?.[0] ? URL.createObjectURL(e.target.files[0]) : frame)
          }
        />
      </LabelFile>
      <Img img={img} />
    </div>
  );
};

export default InputImg;
