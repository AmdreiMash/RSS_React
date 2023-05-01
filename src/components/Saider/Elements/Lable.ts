import { FieldError } from 'react-hook-form/dist/types';
import styled from 'styled-components';

const Label = styled.label<{
  status: FieldError | undefined | boolean;
  message: string;
  bottom?: string;
  width?: string;
}>`
  position: relative;
  width: ${(props) => (props.width ? props.width : 'auto')};
  color: ${(props) => (props.status ? 'red' : 'inherit')};
  display: flex;
  gap: 8px;
  &:after {
    content: '${(props) => (props.status ? props.message : '')}';
    position: absolute;
    left: 0;
    bottom: ${(props) => (props.bottom ? props.bottom : '-20px')};
    color: red;
    font-size: 12px;
    line-height: 0.9;
  }
`;

export default Label;
