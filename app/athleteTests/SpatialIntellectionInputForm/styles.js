import { css } from 'styled-components';

import { COLORS } from '@/utils/styleConstants';

const styles = css`
  h3 + div {
    display: flex;
    height: 38px;
    align-self: center;
    margin-bottom: 10px;

    p {
      margin: 0 25px 0 0;
      height: 38px;
      padding-top: 7px;
      font: 16px/26px var(--dff);
      color: ${COLORS.INPUT.TEXT};
    }

    > p {
      width: 320px;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      width: 220px;

      p {
        color: ${COLORS.ERROR};
      }
    }

    input {
      width: 52px;
      padding: 0 5px 0 5px;
      font: 400 15px/16px var(--ff);
      color: ${COLORS.INPUT.TEXT};
      font: 14px/16px var(--ff);
      border: 1px solid ${COLORS.INPUT.BORDER};
      border-radius: 5px;
    }
  }
`;

export default styles;
