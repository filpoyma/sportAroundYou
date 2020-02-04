import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';

import ColumnCell from './ColumnCell';
import ColumnHeader from './ColumnHeader';

const TableColumn = ({ header, cells, className }) => (
  <div className={className}>
    <ColumnHeader {...header} />
    {cells.data?.map((item, index) => (
      <ColumnCell
        key={`column_cell_${item.id}`}
        height={cells.height}
        type={cells.type}
        data={item}
        even={index % 2 !== 0}
        {...cells.special}
      />
    ))}
  </div>
);

TableColumn.propTypes = {
  width: PropTypes.number,
  justify: PropTypes.string,
  className: PropTypes.string.isRequired,

  header: PropTypes.shape({
    height: PropTypes.number,
    type: PropTypes.string,
    data: PropTypes.object
  }).isRequired,

  cells: PropTypes.shape({
    height: PropTypes.number,
    type: PropTypes.string,
    data: PropTypes.array,
    special: PropTypes.object
  }).isRequired
};

TableColumn.defaultProps = {
  justify: '',
  width: 0
};

TableColumn.displayName = 'TableColumnElement';

const styles = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  ${props => props.width && `max-width: ${props.width}px;`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
`;

export default injectStyles(TableColumn, styles);
