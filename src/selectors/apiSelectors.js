import { createSelector } from "reselect";

export const activitySelector = state => state.api.activity;

export const getActivity = createSelector(
  activitySelector,
  activity => activity && activity
);

export const getRegisteredAddresses = createSelector(
  activitySelector,
  activity => activity && activity.registeredAddresses
);

export const fetchingAddresses = createSelector(
  activitySelector,
  activity => activity && activity.fectchingAddresses
);
