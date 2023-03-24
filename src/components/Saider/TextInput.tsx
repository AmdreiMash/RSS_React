import React from 'react';
import styled from 'styled-components';
import { InputProps } from 'Types/PropsType';
import Lable from './Elements/Lable';
import MyInput from './Elements/MyInput';

class Input extends React.Component<InputProps> {
  render() {
    return (
      <Lable status={this.props.status} message={`Entre your ${this.props.name}`}>
        {this.props.name}
        <MyInput
          type="text"
          value={this.props.value}
          name={this.props.name}
          status={this.props.status}
          onChange={this.props.onChange}
        />
      </Lable>
    );
  }
}

export default Input;
