import React from 'react';
import styled from 'styled-components';
import { InputProps } from 'Types/PropsType';
import MyInput from './Elements/Input';

class Input extends React.Component<InputProps> {
  render() {
    return (
      <label>
        {this.props.name}
        <MyInput
          type="text"
          value={this.props.value}
          name={this.props.name}
          status={this.props.status}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default Input;
