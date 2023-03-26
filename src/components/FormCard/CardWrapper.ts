import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex:
  flex-direction: column;
  gap: 5px;
  &:hover {
    box-shadow: 2px 10px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export default CardWrapper;
