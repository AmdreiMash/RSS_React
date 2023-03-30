import { FieldError } from 'react-hook-form/dist/types';
import styled from 'styled-components';

const Input = styled.input<{ status: FieldError | undefined }>`
  border: none;
  height: 20px;
  width: 70%;
  color: ${(props) => (props.status ? '#DC143C' : 'initial')};
  border-bottom: solid 1px;
  border-color: ${(props) => (props.status ? '#DC143C' : 'rgba(5, 5, 5, 0.3)')};
  dordering: decimal;

  &:focus {
    outline: none;
    border-bottom: solid 1px;
    border-color: ${(props) => (props.status ? '#DC143C' : '#1677ff')};
  }
`;

export default Input;
