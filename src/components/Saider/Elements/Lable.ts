import { FieldError } from 'react-hook-form/dist/types';
import styled from 'styled-components';

const Label = styled.label<{ status: FieldError | undefined; message: string; bottom?: string }>`
  position: relative;
  color: ${(props) => (props.status ? 'red' : 'inherit')};
  display: flex;
  gap: 8px;
  &:after {
    content: '${(props) => (props.status ? props.message : '')}';
    position: absolute;
    left: 0;
    bottom: ${(props) => (props.bottom ? props.bottom : '-12px')};
    color: red;
    font-size: 12px;
  }
`;

export default Label;
