import * as React from "react";

import { browserHistory, IndexRoute, Route, Router } from "react-router";

import { App } from "./app";
import { Planner } from "../views/planner";
import { Dashboard } from "../views/dashboard";

export class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="/planner" component={Planner} />
        </Route>
      </Router>
    );
  }
}
