import styled from "@emotion/styled";
import * as React from "react";

import HistoryCanvas from "../molecules/HistoryCanvas";
import StoredPlanetList from "../molecules/StoredPlanetList";

interface Props {
  history: any;
  match: any;
}

const HistoryPageMain: React.SFC<Props> = ({ history, match }) => (
  <Root>
    <HistoryCanvas history={history} match={match} />
    <StoredPlanetList />
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 400;
`;

export default HistoryPageMain;
