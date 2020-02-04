import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS } from '@/utils/styleConstants';

import { CELL_TYPE } from '../constants';
import ZoneCircle from './cells/ZoneCircle';

const ColumnCell = ({ type, data, className }) => {
  if (type === CELL_TYPE.TEXT) {
    return (
      <div className={className}>
        <p>{data.text}</p>
      </div>
    );
  }

  if (type === CELL_TYPE.TEXT_BOLD) {
    return (
      <div className={className}>
        <h1>{data.text}</h1>
      </div>
    );
  }

  if (type === CELL_TYPE.TEXT_DOUBLE) {
    return (
      <div className={className}>
        <h2>
          <i>{data.text}</i>
          <p>{data.textSecondLine}</p>
        </h2>
      </div>
    );
  }

  if (type === CELL_TYPE.TEXT_TRIPLE) {
    return (
      <div className={className}>
        <h2>
          <i>{data.text}</i>
          <p>{data.textSecondLine}</p>
          <p>{data.textTripleLine}</p>
        </h2>
      </div>
    );
  }

  if (type === CELL_TYPE.ZONE) {
    return (
      <div className={className}>
        <p>
          {' '}
          <ZoneCircle color={data.color} number={data.number} /> Зона {data.number}
        </p>
      </div>
    );
  }

  return <div> неверный тип ячейки </div>;
};

ColumnCell.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // from CELL_TYPE
  data: PropTypes.object.isRequired,
  // Used by StyledComponents
  even: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  height: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  // Used by StyledComponents
  padding: PropTypes.string // eslint-disable-line react/no-unused-prop-types
};

ColumnCell.defaultProps = {
  even: false,
  padding: ''
};

ColumnCell.displayName = 'TableComponentTableColumnElement';

const styles = css`
  display: flex;
  flex-direction: row;
  justify-content: inherit;
  align-items: center;

  width: 100%;

  color: ${COLORS.TEXT.PRIMARY};

  font: 14px/16px var(--dff);

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font: 14px/14px var(--dff);
    font-weight: 200;
    margin: 0px;
  }

  h1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font: 17px/17px var(--dff);
    font-weight: bold;
    margin: 0px;
  }

  h2 {
    margin: 0px;
  }

  i {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font: 17px/17px var(--dff);
    font-weight: bold;
    margin: 0px;
  }

  ${props => css`
    height: ${props.height}px;
    background: ${props.even ? COLORS.TABLE.CELLS.EVENCOLOR : COLORS.TABLE.CELLS.NOTEVENCOLOR};
  `}

  ${props => props.padding && `padding: ${props.padding};`}
`;

export default injectStyles(ColumnCell, styles);
