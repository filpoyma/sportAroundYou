import { createSelector } from 'reselect';

import { toPrecision } from '@/utils/formatData';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

const selectCurrentTest = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.CURRENT_TEST] || initialState[STATE_KEY.CURRENT_TEST];
const selectNextTest = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.NEXT_TEST] || initialState[STATE_KEY.NEXT_TEST];
const selectOrganization = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.ORGANIZATION] || initialState[STATE_KEY.ORGANIZATION];
export const selectPerson = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.PERSON] || initialState[STATE_KEY.PERSON];
const selectSport = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.SPORT] || initialState[STATE_KEY.SPORT];
const selectStatus = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.STATUS] || initialState[STATE_KEY.STATUS];

const getMockedAvatarUrlById = id => {
  switch (id) {
    case 26:
      return 'http://167.71.43.7:8085/images/irina.jpg';
    case 516:
      return 'http://167.71.43.7:8085/images/misha.jpg';
    case 796:
      return 'http://167.71.43.7:8085/images/sergey.jpg';
    case 1334:
    default:
      return 'http://167.71.43.7:8085/images/denis.jpg';
  }
};

export const makeSelectOrganization = () =>
  createSelector(
    selectOrganization,
    organization => ({
      name: organization?.name
    })
  );
export const makeSelectPerson = () =>
  createSelector(
    selectPerson,
    person => ({
      age: person?.age ?? '-',
      avatarUrl: getMockedAvatarUrlById(person.id),
      gender: person?.gender,
      email: person?.email,
      height: toPrecision(person?.height, 1) ?? '-',
      name: person?.name,
      phone: person?.phone !== 'NaN' ? person?.phone : undefined,
      weight: toPrecision(person?.weight, 1) ?? '-'
    })
  );

export const makeSelectPersonId = () =>
  createSelector(
    selectPerson,
    person => person?.id
  );

export const makeSelectPersonGender = () =>
  createSelector(
    selectPerson,
    person => person?.gender
  );

export const makeSelectSport = () =>
  createSelector(
    selectSport,
    sport => ({
      name: sport?.name
    })
  );

export const makeSelectStatus = () =>
  createSelector(
    selectStatus,
    status => status
  );

export const makeSelectCurrentTestKey = () =>
  createSelector(
    selectCurrentTest,
    currentTest => currentTest
  );

export const makeSelectNextTestKey = () =>
  createSelector(
    selectNextTest,
    nextTest => nextTest
  );
