import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/route";

export class Home extends React.Component {
  onClick = () => {
    this.props.history.push(ROUTES.ACTIVITY);
  };

  render() {
    return (
      <main className="mt-5 p-5 text-center">
        <h1 className="font-30 text-center mb-5">
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
      </main>
    );
  }
}

export default withRouter(Home);
