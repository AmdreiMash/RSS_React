import React from 'react';
import styled from 'styled-components';
import { InputProps } from 'Types/PropsType';

const MyInput = styled.input<{ status: boolean }>`
  border: none;
  height: 20px;
  width: 70%;
  color: ${(props) => (props.status ? 'initial' : '#DC143C')};
  border-bottom: solid 1px;
  border-color: ${(props) => (props.status ? 'rgba(5, 5, 5, 0.3)' : '#DC143C')};
  dordering: decimal;
  &:focus {
    outline: none;
    border-bottom: solid 1px;
    border-color: ${(props) => (props.status ? '#1677ff' : '#DC143C')};
  }
`;

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
