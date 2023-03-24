import styled from 'styled-components';

const Label = styled.label<{ staus: boolean; message: string }>`
  position: relative;
  &:after {
    content: '*${(props) => (props.staus ? '' : props.message)}';
    position: absolute;
    left: 0;
    bottom: -12px;
    color: red;
    font-size: 12px;
  }
`;

export default Label;
