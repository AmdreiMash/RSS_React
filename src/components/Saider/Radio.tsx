import styled from '../styled';
import React from 'react';
import { RadioProps } from '../../Types/Types';

const Radio = (props: RadioProps) => {
  const { female, male } = props;
  return (
    <div style={styled.label}>
      <label style={styled.label}>
        female
        <input type="radio" name="gender" value="female" ref={female} />
      </label>
      <label style={styled.label}>
        male
        <input type="radio" name="gender" value="male" ref={male} />
      </label>
    </div>
  );
};

export default Radio;
