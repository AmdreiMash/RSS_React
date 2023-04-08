import { css, keyframes } from 'styled-components';

const show = keyframes`
    from {
      transform: scale(0.1) rotate(0);
      opacity: 0.1;
    }
    to {
      transform: scale(1) rotate(4turn);
      opacity: 1;
    }
`;

const animation = css`
  animation-name: ${show};
  animation-duration: 0.5s;
  animation-timing-function: linear;
`;

export default animation;
