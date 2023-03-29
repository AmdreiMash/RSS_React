import React, { useState } from 'react';
import LabelFile from './Elements/LabelFile';
import File from './Elements/File';
import frame from '../../../assets/frame.svg';
import Img from './Elements/Img';

const InputImg = (props: { status: boolean; ref: React.RefObject<HTMLInputElement> }) => {
  const { status, ref } = props;
  const [img, setImg] = useState(frame);

  return (
    <div style={{ position: 'relative' }}>
      <LabelFile message="Upload your image" status={status}>
        Add Foto
        <File
          type="file"
          name="img"
          accept="image/*"
          ref={ref}
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
