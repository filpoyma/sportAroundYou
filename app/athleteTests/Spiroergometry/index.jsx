import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import DynamicSpdPwrChart from '@/athleteTests/Spiroergometry/elements/DynamicSpdPwrChart';
import Box from '@/components/Box';
// import LineChart from '@/components/LineChart';
import Plates from '@/components/Plates';
import StreamChart from '@/components/StreamChart';
import Table from '@/components/Table';
import { getDates } from '@/containers/DateSelector/actions';
import TestResults from '@/containers/TestResults';
import injectLogic from '@/utils/injectLogic';
import injectReducer from '@/utils/injectReducer';

import { API_PATH, STATE_KEY } from './constants';
import SummaryChart from './elements/SummaryChart';
import logic from './logic';
import reducer from './reducer';
import {
  makeSelectDynamic,
  makeSelectDynamicBySpdPwr,
  makeSelectGeneralTable,
  makeSelectPlates,
  makeSelectStatus,
  makeSelectSummaryChart,
  makeSelectSummaryTable,
  makeSelectZoneTable
} from './selectors';

class SpiroergometryTest extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDates(API_PATH));
  }

  render() {
    const {
      summaryChartData,
      summaryTableData,
      generalTableData,
      zoneTableData,
      platesData,
      // hrPano,
      // hrPwr,
      // lactatePwr,
      // powerPano,
      // vo2PanoRelPano,
      statusSpiroergometry,
      statusSpiroergometryByRange
    } = this.props;

    return (
      <TestResults status={statusSpiroergometry}>
        <Box title="Сводная таблица">
          <Table data={generalTableData} />
        </Box>
        <Box status={statusSpiroergometryByRange} title="Сводный график">
          <SummaryChart {...summaryChartData} />
        </Box>
        <Box title="Максимальные и пороговые показатели">
          <Table data={summaryTableData} />
          <br />
          <Plates data={platesData} />
        </Box>
        <Box title="Тренировочные зоны">
          <Table data={zoneTableData} />
        </Box>
        <Box title="Вклад жиров и углеводов">
          <StreamChart />
        </Box>
        <Box title="Динамика">
          {/* <DynamicSpdPwrChart {...hrPwr} legend="ЧСС" units="уд/мин" />
          <DynamicSpdPwrChart {...lactatePwr} legend="Лактат" units="ммоль/л" />
          <LineChart {...hrPano} legend="ПАНО ЧСС" units="уд/мин" />
          <LineChart {...powerPano} legend="ПАНО мощность" units="Вт" />
          <LineChart
            {...vo2PanoRelPano}
            height="350px"
            legend="ПАНО потребление кислорода"
            units="л/мин"
          /> */}
        </Box>
      </TestResults>
    );
  }
}

SpiroergometryTest.propTypes = {
  dispatch: PropTypes.func.isRequired,
  summaryChartData: PropTypes.object.isRequired,
  summaryTableData: PropTypes.object.isRequired,
  generalTableData: PropTypes.object.isRequired,
  zoneTableData: PropTypes.object.isRequired,
  platesData: PropTypes.array.isRequired,
  hrPano: PropTypes.object.isRequired,
  hrPwr: PropTypes.object.isRequired,
  lactatePwr: PropTypes.object.isRequired,
  powerPano: PropTypes.object.isRequired,
  statusSpiroergometry: PropTypes.string.isRequired,
  statusSpiroergometryByRange: PropTypes.string.isRequired,
  vo2PanoRelPano: PropTypes.object.isRequired
};

SpiroergometryTest.defaultProps = {};

SpiroergometryTest.displayName = 'SpiroergometryTest';

// SpiroergometryTest.whyDidYouRender = true;

const mapStateToProps = createStructuredSelector({
  summaryChartData: makeSelectSummaryChart(),
  summaryTableData: makeSelectSummaryTable(),
  generalTableData: makeSelectGeneralTable(),
  zoneTableData: makeSelectZoneTable(),
  platesData: makeSelectPlates(),
  hrPano: makeSelectDynamic('hrPano'),
  hrPwr: makeSelectDynamicBySpdPwr('hr'),
  lactatePwr: makeSelectDynamicBySpdPwr('la'),
  powerPano: makeSelectDynamic('powerPanoAbs'),
  statusSpiroergometry: makeSelectStatus(STATE_KEY.SPIROERGOMETRY),
  statusSpiroergometryByRange: makeSelectStatus(STATE_KEY.SPIROERGOMETRY_BY_RANGE),
  vo2PanoRelPano: makeSelectDynamic('vo2PanoRel')
});

const withConnect = connect(mapStateToProps);
const withLogic = injectLogic({ logic, type: 'test' });
const withReducer = injectReducer({ key: STATE_KEY.MAIN, reducer });

export default compose(
  withConnect,
  withLogic,
  withReducer
)(SpiroergometryTest);
