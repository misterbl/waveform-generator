import { makeActionCreator } from "../../utils/actionCreator";

export const saveRegisteredAddresses = makeActionCreator(
  "SAVE_REGISTERED_ADDRESSES",
  "registeredAddresses"
);

export const saveActivityData = makeActionCreator(
  "SAVE_ACTIVITY_DATA",
  "activityData"
);

export const saveActivityAddress = makeActionCreator(
  "SAVE_ACTIVITY_ADDRESS",
  "activityAddress"
);

export const fetchingAddresses = makeActionCreator(
  "FETCHING_ADDRESSES",
  "fectchingAddresses"
);
