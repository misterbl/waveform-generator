import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/route";
import hoopLogo from "../assets/hoop-logo.png";
import { localStorageRemoveItem } from "../utils/localStorage";

export class Home extends React.Component {
  onClick = () => {
    localStorageRemoveItem("activityAddress");
    localStorageRemoveItem("activityData");
    this.props.history.push(ROUTES.ACTIVITY);
  };

  render() {
    return (
      <main className="bg-white form-container p-5">
        <img src={hoopLogo} alt="Hoop's logo" className="w-25" />
        <div className="text-center ">
          <h1 className="font-30 my-5">
            To register a new activity, click Next
          </h1>
          <button
            type="button"
            id="next-button"
            className="btn next-button ml-3"
            onClick={this.onClick}
          >
            Next
          </button>
        </div>
      </main>
    );
  }
}

export default withRouter(Home);
