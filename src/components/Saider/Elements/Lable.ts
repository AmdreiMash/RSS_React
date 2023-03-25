import styled from 'styled-components';

const Label = styled.label<{ status: boolean; message: string }>`
  position: relative;
  color: ${(props) => (props.status ? 'inherit' : 'red')};
  display: flex;
  gap: 8px;
  &:after {
    content: '${(props) => (props.status ? '' : props.message)}';
    position: absolute;
    left: 0;
    bottom: -12px;
    color: red;
    font-size: 12px;
  }
`;

export default Label;
