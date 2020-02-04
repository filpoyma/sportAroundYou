import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '../../utils/styleConstants';

const TooltipStyles = css`
  position: relative;
  display: inline-block;
  width: 19px;
  height: 19px;
  background: ${COLORS.CHARTS.PRIMARY};
  color: #fff;
  font: 700 14px/19px var(--ff);
  border-radius: 100%;
  text-align: center;

  &:hover {
    background: ${COLORS.PRIMARY};
  }

  & > div {
    z-index: 99999999;
    position: absolute;
    display: none;
    top: 100%;
    left: 50%;
    max-width: 400px;
    margin-top: ${SPACE_SIZE.S};
    padding: ${SPACE_SIZE.XS} ${SPACE_SIZE.S};
    background: #fff;
    color: ${COLORS.TEXT.PRIMARY};
    font: 13px/15px var(--ff);
    text-align: left;
    transform: translate(-50%, 0);
    ${OTHER.BORDER_RADIUS}
    ${OTHER.BOX_SHADOW}

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 15px;
      height: 15px;
      background: #fff;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    & > div {
      max-width: 100%;
      width: max-content;
      hyphens: true;
    }
  }

  &:hover > div {
    display: inline-block;
  }
`;

export default TooltipStyles;
