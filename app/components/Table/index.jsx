import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import TableColumn from './elements/TableColumn';
import styles from './styles';

const Table = ({ data, ...rest }) => {
  const columns = data?.columns;

  if (!data || !columns) return <div>Таблица не содержит данных</div>;

  return (
    <div {...rest}>
      {columns.map(item => (
        <TableColumn
          key={`table_column_${item.id}`}
          header={{
            height: data.headerHeight,
            ...item.header
          }}
          cells={{
            height: data.cellsHeight,
            ...item.body
          }}
          {...item.special}
        />
      ))}
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
};

Table.defaultProps = {
  className: 'tableClass'
};

Table.displayName = 'TableComponent';

export default injectStyles(Table, styles);
