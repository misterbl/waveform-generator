import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/route";

export class Confirmation extends React.Component {
  state = {
    activityAddress: JSON.parse(localStorage.getItem("activityAddress")),
    activityData: JSON.parse(localStorage.getItem("activityData"))
  };
  onClick = async () => {
    await localStorage.removeItem("activityAddress");
    await localStorage.removeItem("activityData");
    this.props.history.push(ROUTES.ACTIVITY);
  };
  render() {
    const {
      activityAddress: {
        buildingName,
        buildingUnit,
        streetName,
        streetNumber,
        town
      },
      activityData: {
        activityWebpage,
        activityName,
        activityPhoneNumber,
        maxRecommendedAge,
        minRecommendedAge
      }
    } = this.state;
    const address = `${buildingName ? `${buildingName}, ` : ""}${
      buildingUnit ? `${buildingUnit}, ` : ""
    }${streetName ? `${streetName}, ` : ""}${
      streetNumber ? `${streetNumber}, ` : ""
    }${town ? town : ""}`;
    return (
      <main className="bg-white form-container p-5">
        <h1 className="mb-5 text-center">Your activity is registered!</h1>
        <div className="text-center">
          <div className="mt-4 font-20">Activity Name: </div>
          <span>{activityName}</span>
          <div className="mt-4 font-20">Activity Webpage: </div>
          <span>{activityWebpage}</span>
          <div className="mt-4 font-20">Activity Phone Nymber: </div>
          <span>{activityPhoneNumber}</span>
          <div className="mt-4 font-20">Activity Min. Recommended Age: </div>
          <span>{minRecommendedAge}</span>
          <div className="mt-4 font-20">Activity Max. Recommended Age: </div>
          <span>{maxRecommendedAge}</span>
          <div className="mt-4 font-20">Address: </div>
          <span>{address}</span>
        </div>
        <div className="d-flex flex-row-reverse py-5">
          <button
            type="button"
            id="next-button"
            className="btn next-button ml-3"
            onClick={this.onClick}
          >
            Register another activity
          </button>
        </div>
      </main>
    );
  }
}

export default withRouter(Confirmation);
