import styled from "@emotion/styled";
import { Match } from "@reach/router";
import * as React from "react";

interface Props {
  renderPage: () => React.ReactElement;
}

const SignedOutRouter: React.FC<Props> = ({renderPage}) => (
  <Root>
    <Content>
      <Match path="/">{() => renderPage()}</Match>
    </Content>
  </Root>
);

const Root = styled.div``;

const Content = styled.div``;

export default SignedOutRouter;
