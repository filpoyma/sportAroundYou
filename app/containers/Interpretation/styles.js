import { css } from 'styled-components';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import { SPACE_SIZE } from '@/utils/styleConstants';

const InterpretationStyles = css`
  margin-top: ${SPACE_SIZE.S};
  padding-top: ${SPACE_SIZE.S};

  & ${TextArea} {
    margin-top: ${SPACE_SIZE.S};
  }

  & ${Button} {
    margin-top: ${SPACE_SIZE.S};
  }
`;

export default InterpretationStyles;
