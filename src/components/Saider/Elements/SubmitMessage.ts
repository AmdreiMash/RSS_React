import styled from 'styled-components';
import Check from '../../../../assets/checkmark.svg';

const Message = styled.span<{ showe: boolean }>`
  margin: 0 auto;
  transform: translateY(${(props) => (props.showe ? '45px' : '-100px')});
  color: green;
  position: absolute;
  transition: transform 0.5s ease;

  &:after {
    content: url('${Check}');
    width: 10px;
    height: 10px;
  }
`;

export default Message;
