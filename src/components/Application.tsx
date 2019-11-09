import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Main from "./index/Main";
import UserOnly from "./index/UserOnly";
import GuestOnly from "./index/GuestOnly";

const Application: React.FC = () => (
  <Router>
    <Main>
      <Switch>
        <Route path="/guests" component={GuestOnly} />
        <Route path="/users" component={UserOnly} />
        <Route exact path="/" render={() => <Redirect to="/guests" />} />
        <Route render={() => <h2>404 Not Found</h2>} />
      </Switch>
    </Main>
  </Router>
);

export default Application;
