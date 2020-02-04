import { css } from 'styled-components';

import { OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const HistogramChartStyles = css`
  width: 584px;
  height: ${props => props.height || '300px'};
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
`;

export default HistogramChartStyles;
