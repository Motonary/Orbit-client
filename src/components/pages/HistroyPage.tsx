import * as React from "react";

import { Root } from "./CommonStyleComponents";
import Header from "../organisms/Header";
import HistoryPageMain from "../organisms/HistoryPageMain";
import Footer from "../organisms/Footer";

interface Props {
  currentUser: any;
  location: any;
  history: any;
  match: any;
}

const HistoryPage: React.FC<Props> = ({
  currentUser,
  location,
  history,
  match
}) => (
  <Root>
    <Header currentUser={currentUser} history={history} pathname={location} />
    <HistoryPageMain history={history} match={match} />
    <Footer currentUser={currentUser} pathname={location} history={history} />
  </Root>
);

export default HistoryPage;
