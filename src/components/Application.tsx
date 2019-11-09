import * as React from "react";

import GlobalStyle from "./common/GlobalStyle";
import UserOnly from "./routes/SignedInRouter";
import GuestOnly from "./routes/SignedOutRouter";

const Application: React.FC = () => (
  <>
    <GlobalStyle />

    <Router>
      <Switch>
        <Route path="/guests" component={GuestOnly} />
        <Route path="/users" component={UserOnly} />
        <Route exact path="/" render={() => <Redirect to="/guests" />} />
        <Route render={() => <h2>404 Not Found</h2>} />
      </Switch>
    </Router>
  </>
);

export default Application;
