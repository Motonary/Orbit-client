import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import Alert from "react-s-alert";

import Img from "../atoms/Image";
import {
  selectAssignment,
  disselectAssignment
} from "../../actions/assignments";
import { selectProject, disselectProject } from "../../actions/projects";

import { PlanetImgs } from "../../constants/ImagesUrl";

interface Props {
  className?: string;
  planetType: string;

  selectedProject: any;
  selectedAssignments: any;

  selectAssignment: any;
  disselectAssignment: any;
  selectProject: any;
  disselectProject: any;
}

const Planet: React.FC<Props> = ({
  className,
  planetType,
  selectedProject,
  selectedAssignments,
  ...props
}) => {
  function onMouseOver(e: MouseEvent) {
    const targetPlanet = (e.target as HTMLElement).parentNode.parentNode
      .firstChild; // e.g. div.detail-ballon
    const firstClass = (targetPlanet as HTMLElement).classList[0];

    if (firstClass && firstClass.includes("popup")) {
      (targetPlanet as HTMLElement).style.display = "block";
    }
  }

  function onMouseOut(e: MouseEvent) {
    const targetPlanet: any = (e.target as HTMLElement).parentNode.parentNode
      .firstChild;
    const firstClass = targetPlanet.classList[0];

    if (firstClass && firstClass.includes("popup")) {
      targetPlanet.style.display = "none";
    }
  }

  function showErrorFlash(errorMessage: string) {
    Alert.error(errorMessage, {
      position: "top-right",
      effect: "jelly",
      timeout: 3000,
      offset: 80
    });
  }

  function onSelected(e: MouseEvent) {
    // TODO: ifがネストしているなど可読性が低いので要リファクタリング
    // この条件分岐は仕様的にリファクタは厳しいと思います
    const target: any = e.target.parentNode.children[1]; // e.target = .planet-img-container -> div.mark-container
    const targetPlanet: any = e.target.parentNode.parentNode; // id #planet-2-Earth
    const selectedPlanet: string = targetPlanet.id.split("-"); // Array(planet, 2, Earth)

    if (target.style === "undefined") return;

    if (target.style.display === "block") {
      target.style.display = "none";
      if (selectedPlanet[0] === "planet") {
        disselectAssignment(`${selectedPlanet[1]}-${selectedPlanet[2]}`);
      } else {
        disselectProject(`${selectedPlanet[1]}-${selectedPlanet[2]}`);
      }
    } else if (target.style.display === "" || target.style.display === "none") {
      if (selectedPlanet[0] === "planet") {
        if (selectedProject.length === 0) {
          target.style.display = "block";
          selectAssignment(`${selectedPlanet[1]}-${selectedPlanet[2]}`);
        } else {
          showErrorFlash(
            "Unable to select both fixed star and planets at the same time..."
          );
        }
      } else {
        if (selectedAssignments.length === 0) {
          target.style.display = "block";
          selectProject(`${selectedPlanet[1]}-${selectedPlanet[2]}`);
        } else {
          showErrorFlash(
            "Unable to select both fixed star and planets at the same time..."
          );
        }
      }
    }
  }

  return (
    <Root
      className={className}
      onClick={() => onSelected}
      onMouseOver={() => onMouseOver}
      onMouseOut={() => onMouseOut}
    >
      <Img src={PlanetImgs[planetType]} alt={planetType} />
      <MarkContainer>
        <CheckMark />
      </MarkContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    z-index: 200;
  }
`;

const MarkContainer = styled.div`
  display: none;
  position: absolute;
  top: 40%;
  left: 35%;
  width: 100%;
  height: 100%;
`;

const CheckMark = styled.div`
  width: 20px;
  height: 30px;
  border: solid 3px #000;
  border-left: 0;
  border-top: 0;
  transform: translateY(-50%) rotate(45deg);
`;

export default connect(
  ({ selectedProject, selectedAssignments }: any) => ({
    selectedProject,
    selectedAssignments
  }),
  { selectAssignment, disselectAssignment, selectProject, disselectProject }
)(Planet);
