import styled, { createGlobalStyle } from 'styled-components';
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
  cursor: ${(props) => (props.show ? '' : 'pointer')};
  white-space: ${(props) => (props.show ? '' : 'nowrap')};

  @media (max-width: 1000px) {
    width: ${(props) => (props.show ? '530px' : '300px')};
    left: calc(50% - 280px);
    padding: ${(props) => (props.show ? '5px' : '5px 0')};
    gap: ${(props) => (props.show ? '5px' : '')};
  }

  @media (max-width: 540px) {
    top: 20px;
    width: ${(props) => (props.show ? '275px' : '300px')};
    left: calc(50% - 150px);
    padding: ${(props) => (props.show ? '5px' : '5px 0')};
    gap: ${(props) => (props.show ? '3px' : '')};
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
  @media (max-width: 540px) {
    font-size: 1em;
  }
`;

export const Info = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  @media (max-width: 540px) {
    font-size: 0.8em;
  }
`;

export const Overlay = styled.div<{ show: boolean }>`
  width: ${(props) => (props.show ? '100vw' : '0')};
  height: ${(props) => (props.show ? '100vh' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${(props) => (props.show ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.01)')};
  transition: background-color 0.3s ease-in-out;
`;

export const Close = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 540px) {
    top: 3px;
    right: 3px;
  }
`;

export const DisableScroll = createGlobalStyle<{ show: boolean }>` 
  body {
    overflow:${(props) => (props.show ? 'hidden' : '')};
  }
`;

export default style;
