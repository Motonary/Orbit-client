import * as React from "react";

interface Props {
  renderSignedIn: () => React.ReactElement;
  renderSignedOut: () => React.ReactElement;
}

function AuthenticateSessionRouter({ renderSignedIn, renderSignedOut }: Props) {
  return window.localStorage.getItem("key").length === 0 ? renderSignedOut :renderSignedIn;
}

export default AuthenticateSessionRouter;
