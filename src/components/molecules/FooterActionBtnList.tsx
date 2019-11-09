import styled from "@emotion/styled";
import * as React from "react";

import Revival from "./Revival";
import Meteorite from "./Meteorite";
import Missle from "./Missle";
import BlackHole from "./BlackHole";
import { ActionIcons } from "../../constants/ImagesUrl";

interface Props {
  pathname: any;
  rootPath: any;
  history: any;
  currentUser: any;
  motionControll: () => void;

  modalOpen: string;
  selectedProject: any;

  setModalStatus: any;
  setDestroyAction: any;
}

class FooterActionBtnList extends React.Component<Props, {}> {
  onClickOpenModal(actionType: string) {
    this.props.setDestroyAction(actionType);
    this.props.setModalStatus(actionType);
    this.props.motionControll();
  }

  render() {
    const {
      pathname,
      rootPath,
      currentUser,
      history,
      selectedProject
    } = this.props;
    const actionType = Object.keys(ActionIcons);

    return (
      <Root id="action-button-list">
        <_Revival
          icon={ActionIcons[actionType[0]]}
          onClick={() => {
            this.onClickOpenModal(actionType[0]);
          }}
          isShow={pathname === `${rootPath}/history`}
        />
        <_Meteorite
          icon={ActionIcons[actionType[1]]}
          history={history}
          currentUser={currentUser}
          motionControll={() => this.props.motionControll()}
          onClick={() => {
            this.onClickOpenModal(actionType[1]);
          }}
          isShow={
            pathname === `${rootPath}` ||
            /^\/users\/[1-9]\d*\/projects$/.test(pathname)
          }
        />
        <_Missle
          icon={ActionIcons[actionType[2]]}
          history={history}
          currentUser={currentUser}
          motionControll={() => this.props.motionControll()}
          onClick={() => {
            this.onClickOpenModal(actionType[2]);
          }}
          isShow={
            pathname === `${rootPath}` ||
            /^\/users\/[1-9]\d*\/projects$/.test(pathname)
          }
        />
        <_BlackHole
          icon={ActionIcons[actionType[3]]}
          motionControll={() => this.props.motionControll()}
          onClick={() => {
            this.onClickOpenModal(actionType[3]);
          }}
          isShow={
            pathname === `${rootPath}` ||
            /^\/users\/[1-9]\d*\/projects$/.test(pathname)
          }
          transform={selectedProject.length !== 0}
        />
      </Root>
    );
  }
}

const Root = styled.ul`
  height: $holder-height;
  margin: 0 10px;
  padding: 0;
  display: flex;
`;

function BaseActionButtonStyle(isShow: boolean) {
  const display = isShow ? "flex" : "none";

  return `
    display: ${display};
    list-style: none;
    width: $holder-height;
    height: $holder-height;
    margin-right: 10px;
    cursor: pointer;
  `;
}

interface BaseActionProps {
  isShow: boolean;
}

const _Revival = styled(Revival)<BaseActionProps>`
  ${({ isShow }: BaseActionProps) => BaseActionButtonStyle(isShow)}
`;

const _Missle = styled(Missle)<BaseActionProps>`
  ${({ isShow }: BaseActionProps) => BaseActionButtonStyle(isShow)}
`;

const _Meteorite = styled(Meteorite)<BaseActionProps>`
  ${({ isShow }: BaseActionProps) => BaseActionButtonStyle(isShow)}
`;

const _BlackHole = styled(BlackHole)<{ isShow: boolean; transform: boolean }>`
  ${({ transform }) =>
    transform
      ? `
    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 0;
      content: "";
      display: block;
      width: 100px;
      border-top: 1px solid #C00;
    }
    &::before {
      transform: skewY(-45deg);
    }
    &::after {
      transform: skewY(45deg);
    }
  `
      : ""}
`;

export default FooterActionBtnList;
