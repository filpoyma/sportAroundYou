export const STATE_KEY = {
  MAIN: 'SpiroergometryTest',
  SPIROERGOMETRY: 'spiroergometry',
  SPIROERGOMETRY_BY_RANGE: 'spiroergometryByRange'
};

export const API_PATH = 'spiroprocessed';

export const TEST_TYPE = {
  CYCLE: 'cycle',
  TREAD_MILL: 'treadmill'
};

export const SPIROERGOMETRY_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/SPIROERGOMETRY_LOAD_SUCCESS`;
export const SPIROERGOMETRY_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/SPIROERGOMETRY_LOAD_ERROR`;

export const SPIROERGOMETRY_BY_DATE_RANGE_LOAD_SUCCESS = `athleteTests/${STATE_KEY.MAIN}/SPIROERGOMETRY_BY_DATE_RANGE_LOAD_SUCCESS`;
export const SPIROERGOMETRY_BY_DATE_RANGE_LOAD_ERROR = `athleteTests/${STATE_KEY.MAIN}/SPIROERGOMETRY_BY_DATE_RANGE_LOAD_ERROR`;

export const SPIROERGOMETRY_CHART_ID = {
  HR: 'hr',
  VO2STPD: 'vo2stpd',
  CO2STPD: 'co2stpd',
  LACTATE: 'lactate'
};

export const SPIROERGOMETRY_CHART_COLORS = {
  HR: '#FF0707',
  VO2STPD: '#0E88FF',
  CO2STPD: '#FF9F00',
  LACTATE: '#FF69B4'
};
