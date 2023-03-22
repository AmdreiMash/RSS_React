import styled from 'styled-components';

const Wrapper = styled.div<{ active: boolean }>`
  width: 370px;
  min-height: 100%;
  display: flex;
  flexdirection: column;
  border: 1px solid red;
  top: 0px;
  position: absolute;
  left: 0;
  transform: translate(${(props) => (props.active ? '0px' : '-400px')});
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

export default Wrapper;
