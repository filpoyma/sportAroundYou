import { css } from 'styled-components';

import Input from '@/components/Input';
import Form from '@/containers/Form';
import DropdownTriangleIcon from '@/images/icon-dropdown-triangle.svg?file';
import { COLORS, SPACE_SIZE } from '@/utils/styleConstants';

const DropdownStyles = css`
  & + &,
  & + ${Input}, & + ${Form} {
    margin-top: ${SPACE_SIZE.XXS};
  }

  & > label {
    margin-right: ${SPACE_SIZE.XXS};
    color: ${COLORS.TEXT.PRIMARY};
    font: 14px/40px var(--ff);
  }

  & > div {
    position: relative;
    display: inline-block;
    width: ${props => props.width};
    color: ${COLORS.INPUT.TEXT};
    border: 1px solid ${COLORS.INPUT.BORDER};
    vertical-align: middle;
    cursor: pointer;
    border-radius: 6px;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      width: 35px;
      height: 100%;
      background: url(${DropdownTriangleIcon}) no-repeat 50% 50%;
      pointer-events: none;
    }

    [aria-expanded='true']& {
      border-radius: 6px 6px 0 0;

      &:before {
        transform: scaleY(-1);
      }
    }

    & > input,
    & > ul > li {
      padding: 0 ${SPACE_SIZE.XS};
      color: ${COLORS.INPUT.TEXT};
      font: 14px/40px var(--ff);
      border: none;
      outline: none;
      cursor: pointer;
    }

    & > input {
      width: 100%;
      padding-right: ${SPACE_SIZE.XL};
      border-radius: 6px;
    }

    & > ul > li {
      list-style: none;

      &:hover {
        background: ${COLORS.INPUT.HOVER};
      }
    }

    & > ul {
      z-index: 1;
      position: absolute;
      left: -1px;
      right: -1px;
      margin: 0;
      padding: 0;
      background: #fff;
      border: 1px solid ${COLORS.INPUT.BORDER};
      border-radius: 0 0 6px 6px;
    }
  }
`;

export default DropdownStyles;
