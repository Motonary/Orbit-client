import { LocationProvider } from "@reach/router";
import * as React from "react";

import AuthenticateSessionRouter from "./common/AuthenticateSessionRouter";
import SignedInRouter from "./common/SignedInRouter";
import SignedOutRouter from "./common/SignedOutRouter";

import GlobalStyle from "./common/GlobalStyle";
import TopPage from "./pages/TopPage";

const Application: React.FC = () => (
  <>
    <GlobalStyle />

    <LocationProvider>
      <AuthenticateSessionRouter
        renderSignedIn={() => <SignedInRouter />}
        renderSignedOut={() => <SignedOutRouter renderPage={() => <TopPage />}/>}
      />
    </LocationProvider>
  </>
);

export default Application;
