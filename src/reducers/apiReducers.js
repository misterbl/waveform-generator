export const activity = (
  state = null,
  {
    type,
    registeredAddresses,
    activityData,
    activityAddress,
    fectchingAddresses
  }
) => {
  switch (type) {
    case "SAVE_REGISTERED_ADDRESSES":
      return {
        ...state,
        registeredAddresses
      };
    case "SAVE_ACTIVITY_DATA":
      return {
        ...state,
        activityData
      };
    case "SAVE_ACTIVITY_ADDRESS":
      return {
        ...state,
        activityAddress
      };
    case "FETCHING_ADDRESSES":
      return {
        ...state,
        fectchingAddresses
      };
    default:
      return state;
  }
};
