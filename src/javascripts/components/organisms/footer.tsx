import styled from "@emotion/styled";
import * as React from "react";

import PlanetHolder from "../molecules/PlanetHolder";
import FooterActionBtnList from "../molecules/FooterActionBtnList";
import ConfirmModal from "./modals/ConfirmModal";
import FormModal from "./modals/FormModal";
import TutorialModal from "./modals/TutorialModal";

import "../../../stylesheets/destroy_animate.scss";

interface Props {
  currentUser: any;
  pathname: any;
  history: any;
}

const Footer: React.FC<Props> = ({ currentUser, pathname, history }) => {
  const rootPath = `/users/${currentUser.id}`;

  React.useEffect(() => {
    const planet_list: HTMLElement = document.getElementById("planet-list");
    planet_list.style.display = "none";
  }, []);

  function motionControll() {
    const orbitalMove: HTMLCollectionOf<Element>[] = [
      document.getElementsByClassName("primo-orbit-motion"),
      document.getElementsByClassName("secundus-orbit-motion"),
      document.getElementsByClassName("tertius-orbit-motion"),
      document.getElementsByClassName("satelite-orbit-motion")
    ];

    orbitalMove.forEach(target => {
      for (let i = 0; i < target.length; i++) {
        target[i].classList.toggle("pause-animation");
        target[i].classList.toggle("start-animation");
        (target[i].firstChild as HTMLElement).classList.toggle(
          "pause-animation"
        );
        (target[i].firstChild as HTMLElement).classList.toggle(
          "start-animation"
        );
      }
    });
  }

  return (
    <Root>
      <_PlanetHolder pathname={pathname} currentUser={currentUser} />
      <_FooterActionBtnList
        pathname={pathname}
        rootPath={rootPath}
        currentUser={currentUser}
        history={history}
        motionControll={() => motionControll()}
      />
      <_ConfirmModal motionControll={() => motionControll()} />
      <_FormModal pathname={pathname} />
      <_TutorialModal currentUser={currentUser} pathname={pathname} />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  z-index: 500;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const _PlanetHolder = styled(PlanetHolder)``;

const _FooterActionBtnList = styled(FooterActionBtnList)``;

const _ConfirmModal = styled(ConfirmModal)``;

const _FormModal = styled(FormModal)``;

const _TutorialModal = styled(TutorialModal)``;

export default Footer;
