import styled from "@emotion/styled";
import * as React from "react";

import Img from "./Image";
import { ImgHolderOpen } from "../../constants/ImagesUrl";

interface Props {
  className?: string;
  currentUser: any;
  pathname: any;
}

class PlanetHolderOpener extends React.Component<Props, {}> {
  onClickOpenPlanetHolder() {
    const target_class: any = document.getElementsByClassName(
      "open-planet-holder"
    );
    const planet_list: any = document.getElementById("planet-list");
    // const planet_holder = document.getElementById("planet-holder")

    // メニュー表示/非表示
    if (target_class[0].classList.contains("click-rotate")) {
      target_class[0].classList.remove("click-rotate");
      planet_list.classList.remove("is-show");
      planet_list.style.display = "none";
      // planet_holder.classList.remove('holder-border');
    } else {
      target_class[0].classList.add("click-rotate");
      planet_list.classList.add("is-show");
      planet_list.style.display = "";
      planet_list.style.width = "300px";
      // planet_holder.classList.add('holder-border');
    }
  }

  render() {
    const { className, currentUser, pathname } = this.props;
    // 一箇所でしか使ってないけど他のコンポーネントと記法統一して見やすく
    const rootPath = `/users/${currentUser.id}`;

    return (
      <Root
        className={className}
        onClick={this.onClickOpenPlanetHolder.bind(this)}
        isShow={
          pathname === `${rootPath}` ||
          /^\/users\/[1-9]\d*\/projects$/.test(pathname)
        }
      >
        <_Img
          src={ImgHolderOpen}
          alt={ImgHolderOpen}
          height="100px"
          width="100px"
        />
      </Root>
    );
  }
}

const Root = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
`;

const _Img = styled(Img)`
  cursor: pointer;
`;

export default PlanetHolderOpener;
