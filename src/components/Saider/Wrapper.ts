import styled from 'styled-components';

const Wrapper = styled.div<{ active: boolean }>`
  width: 370px;
  height: 100%;
  display: flex;
  flexdirection: column;
  border: 1px solid red;
  top: 0px;
  position: relative;
  left: 0;
  transform: translate(${(props) => (props.active ? '0px' : '-400px')});
  transition: transform 0.3s ease-in-out;
`;

export default Wrapper;
