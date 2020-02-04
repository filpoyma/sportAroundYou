import { css } from 'styled-components';

import { SPACE_SIZE } from '@/utils/styleConstants';

const PersonCardStyles = css`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: ${SPACE_SIZE.M} ${SPACE_SIZE.XXS};
  grid-template-areas: 'person-card-avatar person-card-title' 'person-card-attributes person-card-attributes' 'person-card-information person-card-information';

  & > *:nth-child(1) {
    grid-area: person-card-avatar;
  }

  & > *:nth-child(2) {
    grid-area: person-card-title;
  }

  & > *:nth-child(3) {
    grid-area: person-card-attributes;
  }

  & > *:nth-child(4) {
    grid-area: person-card-information;
  }

  padding: ${SPACE_SIZE.L} ${SPACE_SIZE.S};
`;

export default PersonCardStyles;
