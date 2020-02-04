import { createSelector } from 'reselect';

const selectLocation = state => state.router?.location;

export const makeSelectLocation = () =>
  createSelector(
    selectLocation,
    location => location
  );
