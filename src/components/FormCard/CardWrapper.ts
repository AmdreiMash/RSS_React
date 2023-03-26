import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  border: 1px solid rgba(5, 5, 5, 0.06);
  font-size: 0.9em;
  padding: 5px;
  &:hover {
    box-shadow: 2px 10px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export default CardWrapper;
