import styled from 'styled-components';
import animation from './animations';

const style: { [key: string]: React.CSSProperties } = {
  SearchBar: { flex: '1', alignSelf: 'center' },

  like: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    width: '25px',
    height: '25px',
    backgroundSize: 'cover',
  },
};

export const ProductWrapper = styled.div<{ show: boolean }>`
  min-width: 300px;
  min-height: 350px;
  width: ${(props) => (props.show ? '50vw' : '300px')};
  height: ${(props) => (props.show ? '' : '350px')};
  position: ${(props) => (props.show ? 'fixed' : '')};
  z-index: ${(props) => (props.show ? '2' : '0')};
  background: white;
  top: 100px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  left: calc(50% - 30vw);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.show ? '' : 'column')};
  align-items: ${(props) => (props.show ? '' : 'center')};
  gap: ${(props) => (props.show ? '30px' : '')};
  padding: ${(props) => (props.show ? '20px' : '5px 0')};
  cursor: pointer;
  white-space: ${(props) => (props.show ? '' : 'nowrap')};

  @media (max-width: 1000px) {
    width: ${(props) => (props.show ? '530px' : '300px')};
    left: calc(50% - 280px);
    padding: ${(props) => (props.show ? '5px' : '5px 0')};
    gap: ${(props) => (props.show ? '5px' : '')};
  }

  @media (max-width: 540px) {
    width: ${(props) => (props.show ? '275px' : '300px')};
    left: calc(50% - 140px);
    padding: ${(props) => (props.show ? '5px' : '5px 0')};
    gap: ${(props) => (props.show ? '5px' : '')};
    flex-direction: column;
    align-items: center;
  }

  ${(props) => (props.show ? animation : '')};

  &:hover {
    box-shadow: ${(props) => (props.show ? '' : '2px 10px 8px 0px rgba(34, 60, 80, 0.2)')};
    transform: ${(props) => (props.show ? '' : 'scale(1.1)')};
    transition: transform 0.3s;
  }

  word-wrap: break-word;
`;

export const Text = styled.div`
  width: 80%;
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.div`
  margin-left: 8px;
  font-size: 1.4em;
  font-weight: bold;
  max-height: 1.3em;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Info = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
`;

export default style;
