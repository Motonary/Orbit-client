import styled from "@emotion/styled";
import { Match } from "@reach/router";
import * as React from "react";

import MyPage from "../pages/MyPage";
import ProjectPage from "../pages/ProjectPage";
import HistoryPage from "../pages/HistroyPage";
import SettingPage from "../pages/SettingPage";
import TopPage from "../pages/TopPage";

function SignedInRouter(): React.ReactElement {
  return (
    <Root>
      <Content>
        <Match path="/"><TopPage /></Match>
        <Match path="/users/:userId/projects"><ProjectPage /></Match>
        <Match path="/users/:userId/history"><HistoryPage /></Match>
        <Match path="/users/:userId/edit"><SettingPage /></Match>
        <Match path="/users/:userId"><MyPage /></Match>
      </Content>
    </Root>
  );
}

const Root = styled.div``;

const Content = styled.div``;

export default SignedInRouter;
