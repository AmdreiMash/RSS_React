import styled from 'styled-components';

const Img = styled.div<{ img: string }>`
    position: absolute;
    content: <div><div/>
    position: absolute;
    left: 230px;
    opacity: 1;
    top: -50px;
    width: 100px;
    height: 100px;
    background-image: url('${(props) => (props.img ? props.img : '')}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }`;

export default Img;
