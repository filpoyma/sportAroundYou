import { css } from 'styled-components';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

const FormStyles = css`
  & > ${Input} + ${Input} {
    margin-top: ${SPACE_SIZE.XXS};
  }

  & > ${Button} {
    margin-top: ${SPACE_SIZE.L};
  }

  & > span {
    padding-left: ${SPACE_SIZE.L};
    color: ${COLORS.ERROR};
    font: 15px/18px var(--dff);
  }

  & > hr {
    ${OTHER.HR}
  }

  & > h3 {
    margin: 0 0 ${SPACE_SIZE.S};
    color: ${COLORS.TEXT.PRIMARY};
    font: 700 15px/20px var(--ff);
  }
`;

export default FormStyles;
