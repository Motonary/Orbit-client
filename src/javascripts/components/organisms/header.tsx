import styled from "@emotion/styled";
import * as React from 'react'

import Img from "../atoms/Image";
import HeaderRightLinks from '../molecules/HeaderRightLinks'

interface Props extends React.Attributes {
  currentUser: any;
  history: any;
  pathname: any;
}

const Header:React.FC<Props> = ({ currentUser, history, pathname }) => {
  const rootPath = `/users/${currentUser.id}`
  const isLeftSideLinkShow = /^\/users\/[1-9]\d*\/projects$/.test(pathname) ||
  pathname === `${rootPath}/history` ||
  pathname === `${rootPath}/edit`

  function onLeftSideLinkClick() {
    history.push(rootPath);
  }

  return (
    <Root>
      <LeftSideLink onClick={onLeftSideLinkClick} isShow={isLeftSideLinkShow}>
        <UserImg><Img src={currentUser.avator.url} alt={currentUser.name} width="40px" height="40px" /></UserImg>
        <UserName>{currentUser.name}</UserName>
      </LeftSideLink>
      <HeaderRightLinks pathname={pathname} currentUser={currentUser} history={history} />
    </Root>
  )
}

const Root = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
`;

const LeftSideLink = styled.div<{isShow: boolean}>`
  display: ${(isShow) => isShow ? "flex" : "none"};
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 300px;
  color: #fff;
  cursor: pointer;

  position: fixed;
  top: 30px;
  left: 100px;

  &:hover {
    text-decoration: none;
  }
`;

const UserImg = styled.div`
  width: 50px;
  height: 50px;
  margin: 0;
  border: 1px solid #fff;
  border-radius: 50%;

  img {
    margin: 5px 0;
    border-radius: 50%;
  }
`;

const UserName = styled.div`
  margin-left: 10px;
  text-align: left;
  width: 100px;
  color: #fff;
  font-size: 18px;
  font-weight: lighter;
  letter-spacing: 5px;
`;

export default Header
