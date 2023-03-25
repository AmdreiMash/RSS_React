import styled from '../styled';
import React from 'react';
import { RadioProps } from '../../Types/Types';

class Radio extends React.Component<RadioProps> {
  render() {
    return (
      <div style={styled.label}>
        <label style={styled.label}>
          female
          <input type="radio" name="gender" value="female" ref={this.props.female} />
        </label>
        <label style={styled.label}>
          male
          <input type="radio" name="gender" value="male" ref={this.props.male} />
        </label>
      </div>
    );
  }
}

export default Radio;
