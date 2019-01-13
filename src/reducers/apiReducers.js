export const activity = (
  state = null,
  { type, registeredAddresses, activityData, activityAddress }
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
    default:
      return state;
  }
};
