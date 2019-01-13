import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/route";
import hoopLogo from "../hoop-logo.png";

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
  backToActivityPage = () => {
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
        <img src={hoopLogo} alt="Hoop's logo" className="w-25" />
        <h1 className="my-5 text-center">Your activity is registered!</h1>
        <div className="px-5 text-center">
          <div className="mt-4 font-20 d-flex border border-danger p-2 rounded bg-light">
            <span className="font-weight-bold">Name: </span>
            <span className="ml-3">{activityName}</span>
          </div>

          <div className="mt-4 font-20 d-flex border border-primary p-2 rounded bg-light">
            <span className="font-weight-bold">Webpage:</span>{" "}
            <span className="ml-3">{activityWebpage}</span>
          </div>

          <div className="mt-4 font-20 d-flex border border-warning p-2 rounded bg-light">
            <span className="font-weight-bold">Phone number: </span>
            <span className="ml-3">{activityPhoneNumber}</span>
          </div>
          <div className="mt-4 font-20 d-flex border border-info p-2 rounded bg-light">
            <span className="font-weight-bold">Min. Recommended Age:</span>
            <span className="ml-3">{minRecommendedAge}</span>
          </div>
          <div className="mt-4 font-20 d-flex border  border-danger p-2 rounded bg-light">
            <span className="font-weight-bold">Max. Recommended Age:</span>
            <span className="ml-3">{maxRecommendedAge}</span>
          </div>
          <div className="mt-4 font-20 d-flex border border-primary p-2 rounded bg-light">
            <span className="font-weight-bold">Address:</span>
            <span className="ml-3 text-left">{address}</span>
          </div>
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
          <button
            type="button"
            id="edit-button"
            className="btn back-button"
            onClick={this.backToActivityPage}
          >
            Edit
          </button>
        </div>
      </main>
    );
  }
}

export default withRouter(Confirmation);
