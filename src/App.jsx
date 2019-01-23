import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ROUTES from "./const/route";
import { Home } from "./containers/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Home} />
          {/* <Route path={ROUTES.ACTIVITY} component={Activity} />
          <Route path={ROUTES.ADDRESS} component={Address} />
          <Route path={ROUTES.CONFIRMATION} component={Confirmation} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null)(App));
