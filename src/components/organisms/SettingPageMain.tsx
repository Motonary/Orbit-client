import styled from "@emotion/styled";
import * as React from "react";

import UserImgUpdateForm from "../molecules/UserImageUpdateForm";
import ProfileUpdateForm from "../molecules/Forms/ProfileUpdateForm";
import RawButton from "../atoms/RawButton";

interface Props {
  currentUser: any;
  history: any;

  expireCurrentUser: any;
}
const SettingPageMain: React.FC<Props> = ({
  currentUser,
  history,
  expireCurrentUser
}) => {
  function onSignOutButtonClick() {
    if (window.confirm("サインアウトしますか？")) {
      expireCurrentUser(() => history.push("/"));
    }
  }

  return (
    <Root>
      <UserImgUpdateForm currentUser={currentUser} />
      <ProfileUpdateForm history={history} />
      <SignOutBtn onClick={() => onSignOutButtonClick()}>SIGN OUT</SignOutBtn>
    </Root>
  );
};

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

const SignOutBtn = styled(RawButton)`
  display: block;
  width: 200px;
  margin: 20px auto 0;
  padding: 1px 20px;
  background-color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 20px;
  color: #fff;

  font-size: 14px;
  line-height: 1.5;
  font-family: sans-serif;
  font-style: normal;
  font-weight: lighter;
  letter-spacing: 4px;

  cursor: pointer;
`;

export default SettingPageMain;
