import styled from 'styled-components';
import Check from '../../../../assets/checkmark.svg';

const Message = styled.span<{ showe: boolean }>`
  transform: translateY(${(props) => (props.showe ? '10px' : '-100px')});
  color: green;
  position: absolute;
  left: calc(50% - 52px);
  transition: transform 0.5s ease;

  &:after {
    content: url('${Check}');
    width: 10px;
    height: 10px;
  }
`;

export default Message;
