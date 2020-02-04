import { CHANGE_TEST, GET_ATHLETE_BY_ID, REPLACE_TEST } from './constants';
export function getAthleteById(id) {
  return {
    type: GET_ATHLETE_BY_ID,
    id
  };
}

export function changeTest(key) {
  return {
    type: CHANGE_TEST,
    key
  };
}

export function replaceTest(key) {
  return {
    type: REPLACE_TEST,
    key
  };
}
