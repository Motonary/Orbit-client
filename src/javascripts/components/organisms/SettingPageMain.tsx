import styled from "@emotion/styled";
import * as React from "react";
import Alert from "react-s-alert";

import UserImgUpdater from "../molecules/user-img-updater";
import ProfileUpdateForm from "../molecules/forms/profile-update-form";
import SignOutBtn from "../atoms/buttons/sign-out-btn";

interface SettingPageMainProps {
  currentUser: any;
  history: any;
}
const SettingPageMain: React.SFC<SettingPageMainProps> = ({
  currentUser,
  history
}) => (
  <Root>
    <UserImgUpdater currentUser={currentUser} />
    <ProfileUpdateForm history={history} />
    <SignOutBtn history={history} />
    <Alert />
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
  margin: 10px auto 0;
  text-align: center;
`;

export default SettingPageMain;
