import styled from 'styled-components';

const Wrapper = styled.div<{ active: boolean }>`
  padding-top: 40px;
  width: 370px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(5, 5, 5, 0.06);
  top: 0px;
  position: absolute;
  left: 0;
  transform: translate(${(props) => (props.active ? '0px' : '-400px')});
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

export default Wrapper;
