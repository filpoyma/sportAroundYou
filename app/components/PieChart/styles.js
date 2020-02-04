import { css } from 'styled-components';

import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const PieChartStyles = css`
  position: relative;
  width: 584px;
  height: ${props => props.height};
  padding-bottom: ${SPACE_SIZE.M};

  &:last-child {
    padding-bottom: 0;
  }

  & + & {
    padding-top: ${SPACE_SIZE.S};
    ${OTHER.BORDER.FULLWIDTH.TOP}

    &:before {
      margin-top: -${SPACE_SIZE.S};
    }
  }

  & > div[data-total] {
    position: absolute;
    display: flex;
    top: ${SPACE_SIZE.S};
    bottom: 0;
    right: 0;
    left: 0;

    & > div {
      margin: auto;
      color: ${COLORS.PRIMARY};
      text-align: center;

      p {
        margin: 0;
        font: 700 30px/36px var(--dff);
      }

      span {
        font: 700 22px/22px var(--dff);
      }
    }
  }
`;

export default PieChartStyles;
