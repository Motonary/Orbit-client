import * as React from "react";

import { Root } from "./CommonStyleComponents";
import Header from "../../organisms/Header";
import SettingPageMain from "../../organisms/SettingPageMain";
import Footer from "../../organisms/Footer";

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

export default SettingPage;
