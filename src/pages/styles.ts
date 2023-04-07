import styled from 'styled-components';
//const style: { [key: string]: React.CSSProperties } =

export const ProductContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
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

//};

//export default style;
