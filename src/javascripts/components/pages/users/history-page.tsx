import * as React from "react";
import { connect } from "react-redux";

import { Root } from "./CommonStyleComponents";
import Header from "../../organisms/header";
import HistoryPageMain from "../../organisms/history-page-main";
import Footer from "../../organisms/footer";

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

export default connect(({ currentUser }: any) => ({ currentUser }))(
  HistoryPage
);
