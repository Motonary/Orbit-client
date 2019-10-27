import * as React from "react";
import { connect } from "react-redux";

interface Props {
  history: any;
  expireCurrentUser: any;
}

class SignOutBtn extends React.Component<Props, {}> {
  render() {
    return (
      <button
        className="signout-btn"
        onClick={this.onClickSignOutButton.bind(this)}
      >
        SIGN OUT
      </button>
    );
  }
}

export default connect(
  null,
  { expireCurrentUser }
)(SignOutBtn);
