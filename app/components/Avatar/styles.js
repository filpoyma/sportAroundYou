import { css } from 'styled-components';

import { COLORS } from '@/utils/styleConstants';

const AvatarStyles = css`
  display: inline-block;
  width: 60px;
  height: 60px;
  background: ${COLORS.BACKGROUND};

  ${props =>
    props.url &&
    css`
      background-image: url(${props.url});
      background-size: cover;
    `}

  border-radius: 60px;
`;

export default AvatarStyles;
