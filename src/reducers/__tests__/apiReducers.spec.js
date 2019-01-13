import * as apiReducers from "../apiReducers";
import {
  saveRegisteredAddresses,
  saveActivityData
} from "../../actions/actionCreators/apiActions";
import generateAppState from "../../testMocks/appState.mock";

describe("apiReducers", () => {
  const state = generateAppState();

  describe("activity", () => {
    it(`when called with ${"SAVE_REGISTERED_ADDRESSES"} it should update the regustered addresses list`, () => {
      const registeredAddresses = state.api.activity.registeredAddresses;
      const action = saveRegisteredAddresses(registeredAddresses);
      expect(apiReducers.activity(registeredAddresses, action)).toEqual({
        "0": {
          buildingName: "London House",
          buildingUnit: "4",
          postcode: "N63GH",
          streetName: "London street",
          streetNumber: "2133",
          town: "London"
        },
        "1": {
          buildingName: "Waterloo House",
          buildingUnit: "6",
          postcode: "W37HY",
          streetName: "Waterloo street",
          streetNumber: "231",
          town: "Waterloo"
        },
        registeredAddresses: [
          {
            buildingName: "London House",
            buildingUnit: "4",
            postcode: "N63GH",
            streetName: "London street",
            streetNumber: "2133",
            town: "London"
          },
          {
            buildingName: "Waterloo House",
            buildingUnit: "6",
            postcode: "W37HY",
            streetName: "Waterloo street",
            streetNumber: "231",
            town: "Waterloo"
          }
        ]
      });
    });
    it(`when called with ${"SAVE_ACTIVITY_DATA"} it should update the isShortNameValid to null`, () => {
      const activityData = state.api.activity.activityData;
      const action = saveActivityData(activityData);
      expect(apiReducers.activity(activityData, action)).toEqual({
        activitWebpage: "activitWebpage",
        activityData: {
          activitWebpage: "activitWebpage",
          activityName: "activityName",
          activityPhoneNumber: "123433",
          activityWebpage: "www.swimming.com",
          maxRecommendedAge: "No Max. Age",
          minRecommendedAge: "No Min. Age"
        },
        activityName: "activityName",
        activityPhoneNumber: "123433",
        activityWebpage: "www.swimming.com",
        maxRecommendedAge: "No Max. Age",
        minRecommendedAge: "No Min. Age"
      });
    });
    it("should return the state when called with an UNKNOWN action", () => {
      const action = { type: "UNKNOWN" };
      expect(apiReducers.activity(true, action)).toBe(true);
    });
  });
});
