import styled from 'styled-components';

const FormCardsWrapper = styled.div<{ active: boolean }>`
  width: calc(100% - ${(props) => (props.active ? '380px' : '0px')});
  min-height: 100%;
  display: flex;
  flexdirection: column;
  border: 1px solid rgba(5, 5, 5, 0.06);
  padding: 25px;
  flex-wrap: wrap;
  gap: 10px;
  top: 0px;
  position: absolute;
  right: 0;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
`;

export default FormCardsWrapper;
