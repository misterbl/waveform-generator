import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/route";
import hoopLogo from "../assets/hoop-logo.png";
import {
  localStorageRemoveItem,
  localStorageGetItem
} from "../utils/localStorage";
import kidsPlaying from "../assets/kids-playing.jpg";
export class Confirmation extends React.Component {
  state = {
    activityAddress: localStorageGetItem("activityAddress"), //TODO set the state to this in ComponentWillMount if getActivityData and getActivityAddress return null(
    activityData: localStorageGetItem("activityData")
  };

  pushToPage = route => {
    this.props.history.push(route);
  };

  onClick = async () => {
    await localStorageRemoveItem("activityAddress");
    await localStorageRemoveItem("activityData");
    this.pushToPage(ROUTES.ACTIVITY);
  };
  backToActivityPage = () => {
    this.pushToPage(ROUTES.ACTIVITY);
  };
  render() {
    if (this.state.activityAddress && this.state.activityData) {
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
          <div className="border">
            <div className="overflow-hidden mb-3">
              <img src={kidsPlaying} alt="kids playing" />
            </div>
            <p className="px-5 font-weight-bold text-center">{activityName}</p>
            <p className="px-5 ">{activityWebpage}</p>
            <p className="px-5 ">
              <span>{`From ${minRecommendedAge} to ${maxRecommendedAge}`}</span>
            </p>
            <p className="px-5 ">{activityPhoneNumber}</p>
            <p className="px-5 ">{address}</p>
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
    return (
      <div className="text-center pt-5 mt-5">
        <button
          type="button"
          id="next-button"
          className="btn next-button"
          onClick={this.onClick}
        >
          Register an activity
        </button>
      </div>
    );
  }
}

export default withRouter(Confirmation);
