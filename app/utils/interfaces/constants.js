const CONSTANTS = (reducerKey, apiPath, apiType, datesPath, apiBackGraphQl, graphQlKeys) => ({
  ACTIONS: {
    DATE_RANGE_LOAD_ERROR: `athleteTests/${reducerKey}/DATE_RANGE_LOAD_ERROR`,
    DATE_RANGE_LOAD_SUCCESS: `athleteTests/${reducerKey}/DATE_RANGE_LOAD_SUCCESS`,
    LOAD_ERROR: `athleteTests/${reducerKey}/LOAD_ERROR`,
    LOAD_SUCCESS: `athleteTests/${reducerKey}/LOAD_SUCCESS`
  },
  API_PATH: apiPath,
  API_TYPE: apiType,
  GRAPHQL_BACK_TYPE: apiBackGraphQl || false,
  GRAPHQL_KEYS: graphQlKeys || [],
  DATES_PATH: datesPath || apiPath,
  REDUCER_KEY: {
    KEY: reducerKey,
    RESULTS: 'results',
    RESULTS_BY_RANGE: 'resultsByRange',
    STATUS: 'status'
  }
});

export default CONSTANTS;
