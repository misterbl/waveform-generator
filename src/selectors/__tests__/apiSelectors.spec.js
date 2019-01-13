import generateAppState from "../../testMocks/appState.mock";
import * as apiSelectors from "../apiSelectors";

describe("apiSelectors", () => {
  const state = generateAppState();

  describe("getActivity", () => {
    it("should return the activity", () => {
      const actual = apiSelectors.getActivity(state);
      expect(actual).toEqual(state.api.activity);
    });
  });

  describe("getRegisteredAddresses", () => {
    it("should return the registered addresses", () => {
      const actual = apiSelectors.getRegisteredAddresses(state);
      expect(actual).toEqual([
        {
          buildingUnit: "4",
          buildingName: "London House",
          streetNumber: "2133",
          streetName: "London street",
          town: "London",
          postcode: "N63GH"
        },
        {
          buildingUnit: "6",
          buildingName: "Waterloo House",
          streetNumber: "231",
          streetName: "Waterloo street",
          town: "Waterloo",
          postcode: "W37HY"
        }
      ]);
    });
  });

  describe("fetchingAddresses", () => {
    it("should return the false", () => {
      const actual = apiSelectors.fetchingAddresses(state);
      expect(actual).toEqual(false);
    });
  });
});
