import * as React from "react";
import { connect } from "react-redux";

import { Root } from "./CommonStyleComponents";
import Header from "../../organisms/header";
import SettingPageMain from "../../organisms/setting-page-main";
import Footer from "../../organisms/footer";

interface Props {
  currentUser: any;
  location: any;
  history: any;
}

const SettingPage: React.FC<Props> = ({ currentUser, location, history }) => (
  <Root>
    <Header currentUser={currentUser} history={history} pathname={location} />
    <SettingPageMain currentUser={currentUser} history={history} />
    <Footer currentUser={currentUser} pathname={location} history={history} />
  </Root>
);

export default connect(({ currentUser }: any) => ({ currentUser }))(
  SettingPage
);
