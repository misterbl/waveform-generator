const generateAppState = () => ({
  api: {
    activity: {
      activityData: {
        activityName: "activityName",
        minRecommendedAge: "No Min. Age",
        maxRecommendedAge: "No Max. Age",
        activitWebpage: "activitWebpage",
        activityPhoneNumber: "123433",
        activityWebpage: "www.swimming.com"
      },
      fectchingAddresses: false,
      registeredAddresses: [
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
      ],
      activityAddress: {
        buildingUnit: "500",
        buildingName: "Watermans House",
        streetNumber: "21",
        streetName: "New Village Agenue",
        town: "London",
        postcode: "E140GL"
      }
    }
  }
});

export default generateAppState;
