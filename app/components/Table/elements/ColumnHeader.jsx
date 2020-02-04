import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import { HEADER_TYPE } from '../constants';
import HeaderWithIcon from './headers/HeaderWithIcon';

const ColumnHeader = ({ type, data, className }) => {
  if (type === HEADER_TYPE.TEXT) {
    return (
      <div className={className}>
        <p>{data.title}</p>
      </div>
    );
  }

  if (type === HEADER_TYPE.ICON_DESCRIPTION) {
    return (
      <div className={className}>
        <HeaderWithIcon {...data} />
      </div>
    );
  }

  if (type === HEADER_TYPE.TWO_TITLES) {
    return (
      <div className={className}>
        <h2>
          {data.title}
          <br />
          {data.titleSecondLine}
        </h2>
      </div>
    );
  }

  return <div> неверный тип хедера </div>;
};

ColumnHeader.propTypes = {
  className: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired, // from HEADER_TYPE
  data: PropTypes.object.isRequired
};

ColumnHeader.defaultProps = {};

ColumnHeader.displayName = 'TableComponentColumnHeaderElement';

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: inherit;
  align-items: center;

  width: 100%;

  background: #ffffff;

  color: ${COLORS.TEXT.PRIMARY};
  border-bottom: 1px ${COLORS.TABLE.HEADER.UNDERLINE} solid;

  font: 14px/16px var(--dff);

  margin-bottom: 10px;

  p {
    text-align: left;
  }

  h2 {
    text-align: center;
    font: 14px/16px var(--dff);
    white-space: pre;
  }

  ${props => css`
    height: ${props.height}px;
  `}
`;

export default injectStyles(ColumnHeader, styles);
