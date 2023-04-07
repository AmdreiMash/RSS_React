import styled from 'styled-components';

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

export const ProductWrapper = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  flex-direction: column;
  &:hover {
    box-shadow: 2px 10px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

export const Text = styled.div`
    width: 80%;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  },
`;

export const Name = styled.div`
  margin-left: 8px;
  font-size: 1.5em;
  font-weight: bold;
  max-height: 1.3em;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const Info = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
`;

export default style;
