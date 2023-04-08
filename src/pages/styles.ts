import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  flex-wrap: wrap;
  //justify-content: center;
  @media (max-width: 1050px) {
    width: 650px;
  }

  @media (max-width: 670px) {
    width: 330px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 90%;
`;
export const NotFoundWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  background-image: url('./404 Error-rafiki-gray.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const NotFound = styled.img`
  width: 40vw;
  min-width: 300px;
`;
