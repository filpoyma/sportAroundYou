import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'styled-components';

import injectStyles from '@/utils/injectStyles';
import { COLORS, OTHER, SPACE_SIZE } from '@/utils/styleConstants';

import { RECOMMENDATIONS, STRATEGY_KEY } from '../constants';

const getOverallResult = ({ ...strategies }) => {
  const values = Object.values(strategies);
  const total = values.reduce((sum, value) => sum + value, 0);
  const minValue = Math.min(...values);

  if (total >= 55 && minValue >= 6) {
    return 'Согласно оценке психологических навыков, способствующих улучшению результативности, можно отметить очень высокое разнообразие используемых стратегий.';
  }

  if (total >= 55) {
    return 'Согласно оценке психологических навыков, способствующих улучшению результативности, можно отметить высокое разнообразие используемых стратегий.';
  }

  if (total >= 41) {
    return 'Согласно оценке психологических навыков, способствующих улучшению результативности, можно отметить достаточное разнообразие используемых стратегий.';
  }

  return 'Согласно оценке психологических навыков, способствующих улучшению результативности, можно отметить низкое разнообразие используемых стратегий.';
};

const getLowestStrategiesRecommendation = ({ ...strategies }) => {
  const values = Object.values(strategies);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  if (minValue > 4 && minValue === maxValue) {
    return null;
  }

  if (minValue > 4) {
    return (
      <p>
        Для повышения эффективности психологической подготовки рекомендуется уделить внимание{' '}
        <b>наименее выраженным стратегиям:</b>
        <ul>
          {Object.keys(strategies).map(key => {
            if (strategies[key] !== minValue) {
              return null;
            }

            return (
              <li
                dangerouslySetInnerHTML={{ __html: RECOMMENDATIONS[key] }}
                key={`lowest_startegy_${key}`}
              />
            );
          })}
        </ul>
      </p>
    );
  }

  return (
    <p>
      Для повышения эффективности психологической подготовки рекомендуется уделить внимание{' '}
      <b>наименее выраженным стратегиям:</b>
      <ul>
        {Object.keys(strategies).map(key => {
          if (strategies[key] > 4) {
            return null;
          }

          return (
            <li
              dangerouslySetInnerHTML={{ __html: RECOMMENDATIONS[key] }}
              key={`lowest_startegy_${key}`}
            />
          );
        })}
      </ul>
    </p>
  );
};

const ResultDetails = ({ className, ...strategies }) => (
  <div className={className}>
    <p>{getOverallResult(strategies)}</p>
    {getLowestStrategiesRecommendation(strategies)}
  </div>
);

ResultDetails.propTypes = {
  className: PropTypes.string.isRequired,
  [STRATEGY_KEY.DS]: PropTypes.number.isRequired,
  [STRATEGY_KEY.KO]: PropTypes.number.isRequired,
  [STRATEGY_KEY.NP]: PropTypes.number.isRequired,
  [STRATEGY_KEY.OB]: PropTypes.number.isRequired,
  [STRATEGY_KEY.PC]: PropTypes.number.isRequired,
  [STRATEGY_KEY.SN]: PropTypes.number.isRequired,
  [STRATEGY_KEY.US]: PropTypes.number.isRequired
};

ResultDetails.defaultProps = {};

ResultDetails.displayName = 'CopingStrategiesTestResultDetailsElement';

const styles = css`
  color: ${COLORS.TEXT.PRIMARY};

  & > p {
    font: 14px/18px var(--dff);

    & > ul {
      padding-inline-start: ${SPACE_SIZE.S};
    }
  }

  & > hr {
    ${OTHER.HR}
  }
`;

export default injectStyles(ResultDetails, styles);
