import { css } from 'styled-components';

import { SPACE_SIZE } from '@/utils/styleConstants';

const TestPageStyles = css`
  display: grid;
  grid-template-columns: 270px 624px;
  grid-template-rows: max-content max-content;
  grid-template-areas: 'test-nav test-title' 'test-person-card test-date-selector' 'test-catalog test-result';
  gap: ${SPACE_SIZE.S} ${SPACE_SIZE.S};

  & > *:nth-child(1) {
    grid-area: test-nav;
    align-self: center;
  }

  & > *:nth-child(2) {
    grid-area: test-title;
  }

  & > *:nth-child(3) {
    grid-area: test-person-card;
  }

  & > *:nth-child(4) {
    grid-area: test-date-selector;
    display: flex;
    height: 40px;

    &:empty {
      height: 0;
    }
  }

  & > *:nth-child(5) {
    grid-area: test-catalog;
    height: fit-content;
  }

  & > *:nth-child(6) {
    grid-area: test-result;
    grid-row-start: span 2;
    margin-top: 60px;
    height: fit-content;
  }

  & > *:nth-child(4):empty ~ *:nth-child(6) {
    margin-top: 0;
  }
`;

export default TestPageStyles;
