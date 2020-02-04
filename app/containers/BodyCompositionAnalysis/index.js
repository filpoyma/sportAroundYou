/**
 *
 * Анализ состава тела
 *
 */

import PropTypes from 'prop-types';
import React from 'react';

import BarChart from '@/components/BarChart';

import Header from './elements/Header';
import Label from './elements/Label';
import Row from './elements/Row';

const BodyCompositionAnalysis = ({ data }) => (
  <div>
    <Header />
    {data.map(({ label, values }) => (
      <Row key={label}>
        <Label>{label}</Label>
        <BarChart values={values} />
      </Row>
    ))}
  </div>
);

BodyCompositionAnalysis.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      values: PropTypes.shape({
        max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      }).isRequired
    })
  ).isRequired
};

export default BodyCompositionAnalysis;
