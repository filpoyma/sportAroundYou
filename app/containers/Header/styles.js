import { css } from 'styled-components';

import Logo from '@/components/Logo';
import { SPACE_SIZE } from '@/utils/styleConstants';

const HeaderStyles = css`
  box-sizing: content-box;
  height: 60px;
  margin-bottom: ${SPACE_SIZE.L};
  padding-bottom: 22px;
  background: linear-gradient(
    to bottom,
    #fff 60px,
    #1a5265 60px,
    #1a5265 64px,
    #fff 64px,
    #fff 66px,
    #c80a02 66px,
    #c80a02 70px,
    #fff 70px,
    #fff 72px,
    #fe7822 72px,
    #fe7822 76px,
    #fff 76px,
    #fff 78px,
    #0297ca 78px,
    #0297ca 82px
  );

  & ${Logo} {
    padding-top: 9px;
  }
`;

export default HeaderStyles;
