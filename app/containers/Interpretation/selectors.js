import { createSelector } from 'reselect';

import { STATE_KEY } from './constants';
import { initialState } from './reducer';

const selectInterpretationData = state =>
  state[STATE_KEY.MAIN]?.[STATE_KEY.DATA] || initialState[STATE_KEY.DATA];

export const makeSelectInterpretationComments = () =>
  createSelector(
    selectInterpretationData,
    interpretationData => interpretationData?.comments
  );

export const makeSelectInterpretationId = () =>
  createSelector(
    selectInterpretationData,
    interpretationData => interpretationData?.id ?? null
  );
