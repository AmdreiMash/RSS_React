import styled from 'styled-components';

const style: { [key: string]: React.CSSProperties } = {
  productWrapper: {
    width: '300px',
    height: '350px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    border: '1px solid  rgba(0, 0, 0, 0.09)',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5px',
  },

  productText: {
    width: '80%',
    marginLeft: '8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  SearchBar: { flex: '1', alignSelf: 'center' },

  productName: {
    marginLeft: '8px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    maxHeight: '1.3em',
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  productInfo: {
    width: '100%',
    position: 'relative',
    paddingBottom: '10px',
  },

  like: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    width: '25px',
    height: '25px',
    backgroundSize: 'cover',
  },

  label: { display: 'flex', gap: '10px' },
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
export default style;
