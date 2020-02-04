import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import BodyChart from '@/components/BodyChart';
import Box from '@/components/Box';
import LineChart from '@/components/LineChart';
import Spinner from '@/components/Spinner';
import SunburstChart from '@/components/SunburstChart';
import BodyCompositionAnalysis from '@/containers/BodyCompositionAnalysis';
import { getDates } from '@/containers/DateSelector/actions';
import { makeSelectPersonGender } from '@/pages/TestPage/selectors';
import { REQUEST_STATUS } from '@/utils/constants';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH, STATE_KEY } from './constants';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectDynamic,
  makeSelectFatMuscleRatio,
  makeSelectIndicatorForCurrentDate,
  makeSelectMuscleBalance,
  makeSelectStatus
} from './selectors';

const Error = () => <Box title="Ошибка">Не удалось получить результаты тестирования</Box>;
const Loader = () => <Spinner position="relative" size="big" />;

class InBodyTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      bcm,
      bfm,
      bmi,
      bmr,
      ecw,
      icw,
      mineral,
      muscleBalance,
      pbf,
      personGender,
      protein,
      smm,
      fatMuscleRatio,
      wt,
      statusInBody,
      statusInBodyByRange
    } = this.props;

    if (statusInBody === REQUEST_STATUS.ERROR) {
      return <Error />;
    }

    if (statusInBody === REQUEST_STATUS.LOADING) {
      return <Loader />;
    }

    return (
      <>
        <Box flex status={statusInBodyByRange}>
          <SunburstChart {...fatMuscleRatio} />
          <BodyChart gender={personGender} {...muscleBalance} />
        </Box>
        <Box status={statusInBodyByRange} title="Анализ состава тела">
          <BodyCompositionAnalysis
            data={[
              { label: 'Белки, кг', values: protein },
              { label: 'Жиры, кг', values: bfm },
              { label: 'Минералы, кг', values: mineral },
              { label: 'Вода внутриклеточная, кг', values: icw },
              { label: 'Вода внеклеточная', values: ecw }
            ]}
          />
        </Box>
        <Box status={statusInBodyByRange} title="Дополнительные параметры">
          <BodyCompositionAnalysis
            data={[
              { label: 'Индекс массы тела, кг/м²', values: bmi },
              { label: 'Клеточная масса тела, кг', values: bcm },
              { label: 'Интенсивность основного обмена, ккал/сут.', values: bmr }
            ]}
          />
        </Box>
        <Box title="Динамика">
          <LineChart {...smm} legend="Мышечная масса" units="кг" />
          <LineChart {...pbf} legend="Процент жира" units="%" />
          <LineChart {...wt} legend="Вес" units="кг" />
        </Box>
      </>
    );
  }
}

InBodyTest.propTypes = {
  /**
   * Клеточная масса тела, кг
   */
  bcm: PropTypes.object,
  /**
   * Жиры
   */
  bfm: PropTypes.object,

  /**
   * Индекс массы тела, кг/м²
   */
  bmi: PropTypes.object,

  /**
   * Интенсивность основного обмена, ккал/сут.
   */
  bmr: PropTypes.object,
  dispatch: PropTypes.func.isRequired,

  /**
   * Вода внеклеточная
   */
  ecw: PropTypes.object,

  /**
   * Вода внутриклеточная
   */
  icw: PropTypes.object,
  match: PropTypes.object.isRequired,

  /**
   * Минералы
   */
  mineral: PropTypes.object,
  personGender: PropTypes.oneOf(['F', 'M']).isRequired,
  /**
   * Белки
   */
  protein: PropTypes.object,
  pbf: PropTypes.object,
  smm: PropTypes.object,
  wt: PropTypes.object,
  fatMuscleRatio: PropTypes.object,
  muscleBalance: PropTypes.object,
  statusInBody: PropTypes.string.isRequired,
  statusInBodyByRange: PropTypes.string.isRequired
};

InBodyTest.defaultProps = {
  bcm: {},
  bfm: {},
  bmi: {},
  bmr: {},
  ecw: {},
  icw: {},
  mineral: {},
  pbf: [],
  protein: {},
  smm: [],
  wt: [],
  fatMuscleRatio: null,
  muscleBalance: {}
};

InBodyTest.displayName = 'InBodyTest';

// InBodyTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  bcm: makeSelectIndicatorForCurrentDate('wc', 'bcm'),
  bfm: makeSelectIndicatorForCurrentDate('bca', 'bfm'),
  bmi: makeSelectIndicatorForCurrentDate('mfa', 'bmi'),
  bmr: makeSelectIndicatorForCurrentDate('wc', 'bmr'),
  ecw: makeSelectIndicatorForCurrentDate('bca', 'ecw'),
  fatMuscleRatio: makeSelectFatMuscleRatio(),
  icw: makeSelectIndicatorForCurrentDate('bca', 'icw'),
  mineral: makeSelectIndicatorForCurrentDate('bca', 'mineral'),
  muscleBalance: makeSelectMuscleBalance(),
  pbf: makeSelectDynamic('mfa', 'pbf'),
  personGender: makeSelectPersonGender(),
  protein: makeSelectIndicatorForCurrentDate('bca', 'protein'),
  smm: makeSelectDynamic('mfa', 'smm'),
  statusInBody: makeSelectStatus(STATE_KEY.IN_BODY),
  statusInBodyByRange: makeSelectStatus(STATE_KEY.IN_BODY_BY_RANGE),
  wt: makeSelectDynamic('bca', 'wt')
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(InBodyTest);
