import * as React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Main from "./components/index/Main";
import UserOnly from "./components/index/UserOnly";
import GuestOnly from "./components/index/GuestOnly";

ReactDOM.render(
  <Router>
    <Main>
      <Switch>
        <Route path="/guests" component={GuestOnly} />
        <Route path="/users" component={UserOnly} />
        <Route exact path="/" render={() => <Redirect to="/guests" />} />
        <Route render={() => <h2>404 Not Found</h2>} />
      </Switch>
    </Main>
  </Router>,
  document.getElementById("app")
);
