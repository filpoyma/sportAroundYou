import { css } from 'styled-components';

import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const PlatesStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 180px;
    height: ${props => props.height}px;
    padding: 0 ${SPACE_SIZE.XXS};
    border: 1px solid #d8d8d8;
    border-radius: 6px;

    & + div {
      margin-left: ${SPACE_SIZE.S};
    }

    p {
      width: 100%;
      margin: ${SPACE_SIZE.XS} 0 0;
      font: 14px/16px var(--dff);
      text-align: center;
      white-space: pre-wrap;
    }

    b {
      width: 100%;
      margin: auto;
      color: ${COLORS.PRIMARY};
      font: 700 19px/16px var(--dff);
      text-align: center;
    }
  }
`;

export default PlatesStyles;
