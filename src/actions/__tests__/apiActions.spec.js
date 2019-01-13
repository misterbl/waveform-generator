import * as apiActions from "../actionCreators/apiActions";

describe("apiActions", () => {
  describe("saveRegisteredAddresses", () => {
    it("should return the registered addresses", () => {
      const actual = apiActions.saveRegisteredAddresses("registeredAddresses");
      expect(actual).toEqual({
        type: "SAVE_REGISTERED_ADDRESSES",
        registeredAddresses: "registeredAddresses"
      });
    });
  });
  describe("saveActivityData", () => {
    it("should return the activity Data", () => {
      const actual = apiActions.saveActivityData("activityData");
      expect(actual).toEqual({
        type: "SAVE_ACTIVITY_DATA",
        activityData: "activityData"
      });
    });
  });
  describe("saveActivityAddress", () => {
    it("should return the activity Data", () => {
      const actual = apiActions.saveActivityAddress("activityAddress");
      expect(actual).toEqual({
        type: "SAVE_ACTIVITY_ADDRESS",
        activityAddress: "activityAddress"
      });
    });
  });
  describe("fetchingAddresses", () => {
    it("should return the activity Data", () => {
      const actual = apiActions.fetchingAddresses("fectchingAddresses");
      expect(actual).toEqual({
        type: "FETCHING_ADDRESSES",
        fectchingAddresses: "fectchingAddresses"
      });
    });
  });
});
