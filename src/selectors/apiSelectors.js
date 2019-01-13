import { createSelector } from "reselect";

export const activitySelector = state => state.api.activity;

export const getRegisteredAddresses = createSelector(
  activitySelector,
  activity => activity && activity.registeredAddresses
);
