import styled from "@emotion/styled";
import * as React from "react";

import * as Size from "../../constants/Size";
import Button from "../atoms/Button";
import Img from "../atoms/Image";
import { HeaderIcons } from "../../constants/images";

interface Props {
  currentUser: any;
  pathname: any;
  history: any;
}

const HeaderRightLinks: React.FC<Props> = ({
  currentUser,
  history,
  pathname
}) => {
  function onLinkButtonClick(path: string): void {
    history.push(path);
  }

  function onBackButtonClick() {
    history.goBack();
  }

  const rootPath = `/users/${currentUser.id}`;
  // mypage, project-page, setting-pageのみで表示(show-right: true)
  const isHistoryButtonShow =
    pathname === `${rootPath}` ||
    /^\/users\/[1-9]\d*\/projects$/.test(pathname) ||
    pathname === `${rootPath}/edit`;

  // mypage, project-page, history-pageのみで表示(show-right: true)
  const isSettingButtonShow =
    pathname === `${rootPath}` ||
    /^\/users\/[1-9]\d*\/projects$/.test(pathname) ||
    pathname === `${rootPath}/history`;

  // setting-page, history-pageのみで表示(show-right: true)
  const isBackButtonShow =
    pathname === `${rootPath}/history` || pathname === `${rootPath}/edit`;

  return (
    <Root>
      <_Link
        onClick={() => onLinkButtonClick(`${rootPath}/history`)}
        isShow={isHistoryButtonShow}
      >
        HISTORY
        <Icon
          src={HeaderIcons["HISTORY"]}
          alt="history"
          height="50px"
          width="50px"
        />
      </_Link>
      <_Link
        onClick={() => onLinkButtonClick(`${rootPath}/edit`)}
        isShow={isSettingButtonShow}
      >
        SETTING
        <Icon
          src={HeaderIcons["SETTING"]}
          alt="setting"
          height="50px"
          width="50px"
        />
      </_Link>
      <_Link onClick={() => onBackButtonClick} isShow={isBackButtonShow}>
        BACK
        <Icon src={HeaderIcons["BACK"]} alt="back" height="50px" width="50px" />
      </_Link>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: ${Size.HeaderContainerHeight};
  cursor: pointer;

  position: fixed;
  top: 20px;
  right: 30px;
`;

const _Link = styled(Button)<{ isShow: boolean }>`
  display: ${isShow => (isShow ? "flex" : "none")};
  justify-content: flex-end;
  align-content: center;
  width: ${Size.HeaderContainerWidth};
  color: #fff;
  line-height: ${Size.HeaderContainerHeight};

  &:link {
    text-decoration: none;
  }
`;

const Icon = styled(Img)`
  display: block;
  margin: 5px 0;
`;

export default HeaderRightLinks;
