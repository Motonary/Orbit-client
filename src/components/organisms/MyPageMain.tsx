import styled from "@emotion/styled";
import * as React from "react";
import Alert from "react-s-alert";

import MypageUserInfo from "../molecules/UserInfo";
import MypageOrbit from "../molecules/MypageOrbit";

interface MyPageMainProps {
  currentUser: any;
  match: any;
  history: any;
}

const MyPageMain: React.SFC<MyPageMainProps> = ({
  currentUser,
  match,
  history
}) => {
  if (!currentUser) return <div>Loading....</div>;

  if (currentUser.id !== parseInt(match.params.userId, 10)) {
    return <Redirect to={`/users/${currentUser.id}`} />;
  }

  return (
    <Root>
      <MypageUserInfo currentUser={currentUser} />
      <MypageOrbit history={history} match={match} />
      <Alert />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px auto;
  position: relative;
`;

export default MyPageMain;
