import styled from 'styled-components';
import Arrow from '../../../../assets/arrows_icon.svg';

const ShowButton = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: 0px;
  transform: translate(${(props) => (props.active ? '-10px' : '90px')});
  transition: transform 0.1s ease-in-out 0.1s;
  opacity: 0.7;
  cursor: pointer;

  &:before {
    content: url('${Arrow}');
    position: absolute;
    left: ${(props) => (props.active ? '-25px' : '60px')};
    top: 2px;
    transform: rotateY(${(props) => (props.active ? '180deg' : '0')});
    width: 25px;
    height: 25px;
  }

  &:hover {
    opacity: 1;
  }

  &:hover::before {
    transform: translate(${(props) => (props.active ? '-10px' : '10px')})
      rotateY(${(props) => (props.active ? '180deg' : '0')});
    transition: all 0.5s;
  }
`;

export default ShowButton;
