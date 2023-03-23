import styled from 'styled-components';
import Input from '../../../assets/upload.svg';

const LabelFile = styled.label`
  position: relative;
  opacity: 0.7;
  cursor: pointer;
  &:before {
    display: absolute;
    content: url('${Input}');
    position: absolute;
    left: 60px;
    top: -5px;
    width: 25px;
    height: 25px;
  }
  &:hover {
    opacity: 1;
  }
  &:hover::before {
    scale: 1.2;
    transition: all 0.5s;
  }
`;

export default LabelFile;
