import styled from 'styled-components';

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

export default MyInput;
