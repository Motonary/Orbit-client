import styled from "@emotion/styled";
import * as React from "react";

import Alert from "react-s-alert";
import Button from "../../atoms/Button";
import Img from "../../atoms/Image";

import { TopPageImgs } from "../../../constants/images";
import TopLogo from "../../../images/index/logo.png";
import Planet from "../../../images/index/top_earth.png";

import SignInForm from "../../molecules/forms/signin-form";
import SignUpForm from "../../molecules/forms/signup-form";

interface Props extends React.Attributes {
  currentUser: any;
  pathname: any;
  history: any;
}

const TopPage: React.FC<Props> = ({ currentUser, pathname, history }) => {
  const [isSignIn, setSignIn] = React.useState<boolean>(true);

  function onTopPageButtonClick() {
    setSignIn(!isSignIn);
  }

  return (
    <Root>
      <_Button onClick={onTopPageButtonClick}>
        {isSignIn ? (
          <Img alt="sign-up" width="170px" src={TopPageImgs["signUp"]} />
        ) : (
          <Img alt="sign-in" width="170px" src={TopPageImgs["signIn"]} />
        )}
      </_Button>
      <Alert />
      <Logo>
        <Img src={TopLogo} alt="logo" />
      </Logo>
      <SignForm>
        {isSignIn ? (
          <SignInForm history={history} />
        ) : (
          <SignUpForm history={history} />
        )}
      </SignForm>
      <TopPlanet>
        <Img src={Planet} alt="top page planet" />
      </TopPlanet>
    </Root>
  );
};

const Root = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const _Button = styled(Button)`
  display: block;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
`;

const Logo = styled.div`
  margin: 10px auto;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 505px;

  img {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
  }
`;

const SignForm = styled.div`
  margin: 0 auto;
  width: 100%;
  position: absolute;
  bottom: 365px;
`;

const TopPlanet = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;

  img {
    margin: auto;
    max-width: 900px;
    width: 90%;
  }
`;

export default TopPage;
