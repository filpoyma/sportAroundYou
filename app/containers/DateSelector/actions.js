import {
  CHANGE_DATE,
  CHANGE_DATE_RANGE,
  DATES_LOAD_SUCCESS,
  GET_DATES_BY_PERSON_ID
} from './constants';
export function changeDate(id) {
  return {
    type: CHANGE_DATE,
    id
  };
}

export function changeDateRange(direction) {
  return {
    type: CHANGE_DATE_RANGE,
    direction
  };
}

export function getDates(apiPath, apiType, apiBackGraphQl = 0) {
  return {
    type: GET_DATES_BY_PERSON_ID,
    apiPath,
    apiType,
    apiBackGraphQl
  };
}

export function getMockDates(dates) {
  const payload = [];

  dates.forEach((date, index) => {
    payload.push({
      id: index + 1,
      personId: 1,
      datetimes: `${date.substring(0, 10)}T00:00:00`
    });
  });

  return {
    type: DATES_LOAD_SUCCESS,
    payload
  };
}
