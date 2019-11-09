import * as React from "react";
import { withRouter } from "react-router-dom";
import GlobalStyle from "../common/GlobalStyle";

interface Props {
  currentUser: any;
  fetchCurrentUser: any;
}

class Main extends React.Component<Props, {}> {
  componentDidMount() {
    if (sessionStorage.getItem("jwt")) this.props.fetchCurrentUser();
  }
  render() {
    return (
      <>
        <GlobalStyle />

        {sessionStorage.getItem("jwt") && !this.props.currentUser ? (
          <div>Loading...</div>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

// Routeをネストした際に親要素も子要素もconnectを用いていると不具合が生じるため
// withrouterを用いてlocationを渡す
export default withRouter(Main);
