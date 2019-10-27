import styled from "@emotion/styled";
import * as React from "react";

import Img from "../atoms/Image";

interface Props {
  currentUser?: any;
}

// なんかもう少しいいコンポーネント名ないかな
// currentUserの実態がわかるdefault定義をしたい
const MypageUserInfo: React.FC<Props> = ({ currentUser = null }) => (
  <Root>
    <Container>
      <Avator src={currentUser.avatar.url} alt={currentUser.name} />
    </Container>
    <WelcomeUser>
      <span>WELCOME</span>
      <br />
      {currentUser.name}
    </WelcomeUser>
  </Root>
);

const Root = styled.div`
  margin: 0 auto;
  width: 450px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  top: 40%;
  left: 37%;
`;

const Container = styled.div`
  margin: 0;
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const Avator = styled(Img)`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const WelcomeUser = styled.div`
  margin-left: 40px;
  text-align: left;
  width: 250px;
  color: #fff;
  line-height: 40px;
  font-weight: lighter;
  letter-spacing: 5px;
`;

export default MypageUserInfo;
