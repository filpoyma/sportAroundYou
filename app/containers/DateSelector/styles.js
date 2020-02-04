import { css } from 'styled-components';

import Button from '@/components/Button';
import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

import Date from './elements/Date';

const DateSelectorStyles = css`
  position: relative;
  display: inline-block;
  flex: 1;
  width: 100%;
  height: 40px;
  padding: 0 ${SPACE_SIZE.S};
  background: #fff;
  user-select: none;
  ${OTHER.BORDER_RADIUS}
  ${OTHER.BOX_SHADOW}

  & > span {
    margin-right: ${SPACE_SIZE.XXXS};
    color: ${COLORS.TEXT.PRIMARY};
    font: 14px/40px var(--ff);

    & + ${Date} {
      margin-left: 58px;
    }
  }

  & + ${Button} {
    margin-left: ${SPACE_SIZE.XS};
    float: right;
  }
`;

export default DateSelectorStyles;
