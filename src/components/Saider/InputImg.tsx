import React, { useState } from 'react';
import LabelFile from './Elements/LabelFile';
import File from './Elements/File';
import styled from 'styled-components';

const Img = styled.div<{ img: string }>`
    position: absolute;
    content: <div><div/>
    position: absolute;
    left: 230px;
    opacity: 1;
    top: -50px;
    width: 100px;
    height: 100px;
    background-image: url('${(props) => (props.img ? props.img : '')}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }`;

const InputImg = (props: { status: boolean; ref: React.RefObject<HTMLInputElement> }) => {
  const { status, ref } = props;
  const [img, setImg] = useState('');
  const [showImg, setShowImg] = useState(false);

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
            setImg(e.target?.files?.[0] ? URL.createObjectURL(e.target.files[0]) : '')
          }
        />
      </LabelFile>
      <Img img={img} />
    </div>
  );
};

export default InputImg;
