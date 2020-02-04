import { css } from 'styled-components';

import { COLORS } from '@/utils/styleConstants';

const SIZES = {
  small: '20px',
  normal: '50px',
  big: '100px'
};

const SpinnerStyles = css`
  font-size: ${props => SIZES[props.size] || SIZES.normal};
  position: ${props => props.position};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-top: 0.12em solid ${COLORS.SPINNER.SECONDARY};
  border-right: 0.12em solid ${COLORS.SPINNER.SECONDARY};
  border-bottom: 0.12em solid ${COLORS.SPINNER.SECONDARY};
  border-left: 0.12em solid ${COLORS.SPINNER.PRIMARY};
  transform: translateZ(0);
  animation: load 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerStyles;
