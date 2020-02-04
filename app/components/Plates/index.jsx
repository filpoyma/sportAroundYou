import PropTypes from 'prop-types';
import React from 'react';

import injectStyles from '@/utils/injectStyles';

import styles from './styles';

const Plates = ({ data, className }) => {
  if (!data) return <div>Plates не содержат данных</div>;

  return (
    <div className={className}>
      {data.map(({ id, title, value }) => (
        <div key={`plate_${id}`}>
          <p>{title}</p>
          <b>{value}</b>
        </div>
      ))}
    </div>
  );
};

Plates.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  // Used by StyledComponents
  height: PropTypes.number // eslint-disable-line react/no-unused-prop-types
};

Plates.defaultProps = {
  height: 92
};

Plates.displayName = 'PlatesComponent';

export default injectStyles(Plates, styles);
