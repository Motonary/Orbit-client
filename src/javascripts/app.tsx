import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import promise from "redux-promise";
import reducers from "./reducers";
import Main from "./components/index/Main";
import UserOnly from "./components/index/UserOnly";
import GuestOnly from "./components/index/GuestOnly";

const createStoreWithMiddleware: any = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
  </Provider>,
  document.getElementById("app")
);
