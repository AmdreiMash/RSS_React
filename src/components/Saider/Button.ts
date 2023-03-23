import styled from 'styled-components';

const Button = styled.div<{ active: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.active ? '' : '')};
  opacity: ${(props) => (props.active ? '0.7' : '0.5')};
  color: ${(props) => (props.active ? '#1677ff' : 'gray')};
  box-sizing: border-box;
  text-align: center;
  width: max-content;
  cursor: pointer;
  align-self: center;
  background-color: ${(props) => (props.active ? 'none' : '#F0FFFF')};
  border-radius: 5px;
  &:hover {
    opacity: ${(props) => (props.active ? '1' : '0.5')};
    border-bottom: ${(props) => (props.active ? '2px solid #1677ff' : 'none')};
  }
`;

export default Button;
