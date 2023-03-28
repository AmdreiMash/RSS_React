import React, { useState } from 'react';
import LabelFile from './Elements/LabelFile';
import File from './Elements/File';

const InputImg = (props: { status: boolean; ref: React.RefObject<HTMLInputElement> }) => {
  const { status, ref } = props;
  const [img, setImg] = useState('');
  return (
    <>
      <LabelFile message="Upload your image" status={status} img={img}>
        Add Foto
        <File
          type="file"
          name="img"
          accept="image/*"
          ref={ref}
          onChange={(e) =>
            setImg(e.target?.files?.[0] ? URL.createObjectURL(e.target.files[0]) : '')
          }
        />
      </LabelFile>
    </>
  );
};

export default InputImg;
