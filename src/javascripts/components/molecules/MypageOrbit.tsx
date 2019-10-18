import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";

import PopupProjectCard from "../atoms/popup-project-card";
import Planet from "./Planet";
import { top, right, left, bottom } from "../common/position";
import { rotate } from "../common/keyframes";

import {
  setCurrentProject,
  fetchRevolvingProjects
} from "../../actions/projects";
import { setModalStatus } from "../../actions/common";

interface Props {
  history: any;
  match: any;

  modalOpen: any;
  revolvingProjects: any;

  setModalStatus: any;
  setCurrentProject: any;
  fetchRevolvingProjects: any;
}

interface State {
  haveShadow: boolean;
}

class MypageOrbit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      haveShadow: false
    };
  }

  componentDidMount() {
    this.setDrop();
    if (!this.props.revolvingProjects) this.props.fetchRevolvingProjects();
  }

  setDrop() {
    // Droppable area
    const target = document.getElementById("mypage-circle");

    // Entering into the droppable area
    target.addEventListener(
      "dragenter",
      () => {
        if (!this.state.haveShadow) {
          this.setState({ haveShadow: !this.state.haveShadow });
        }
      },
      false
    );

    // Leaving from the droppable area
    target.addEventListener(
      "dragleave",
      () => {
        if (this.state.haveShadow) {
          this.setState({ haveShadow: !this.state.haveShadow });
        }
      },
      false
    );

    // Over the droppable area
    target.addEventListener(
      "dragover",
      (e: MouseEvent) => {
        e.preventDefault();
      },
      false
    );

    // Drop
    target.addEventListener(
      "drop",
      (e: MouseEvent) => {
        e.preventDefault();
        if (this.state.haveShadow) {
          this.setState({ haveShadow: !this.state.haveShadow });
        }
        if (!this.props.modalOpen) {
          this.props.setModalStatus("form-project");
        }
      },
      false
    );
  }

  onClickProjectPlanet(projectId: string) {
    // TODO: プロジェクトページへ遷移する前になんらかのアニメーション追加(Fadeoutとか)
    this.props.setCurrentProject(
      this.props.revolvingProjects[projectId],
      () => {
        this.props.history.push(`${this.props.match.url}/projects`);
      }
    );
  }

  render() {
    const { revolvingProjects }: any = this.props;
    if (!revolvingProjects) {
      return (
        <Root id="mypage-orbit">
          <Circle id="mypage-circle" shadow={this.state.haveShadow} />
        </Root>
      );
    }

    const pos: any = ["top", "right", "left", "bottom"];
    const projectList: any = revolvingProjects.map(
      (project: any, index: number) => {
        return (
          <CommonOrbit key={project.id} pos={pos[index % 4]}>
            <PlanetContainer>
              id={`planet-${project.id}-${project.fixed_star_type}`}
              onClick={this.onClickProjectPlanet.bind(this, project.id)}>
              <PopupBox>
                <PopupProjectCard project={project} />
              </PopupBox>
              <_Planet
                className="planet-img-container"
                planetType={project.fixed_star_type}
              />
            </PlanetContainer>
          </CommonOrbit>
        );
      }
    );

    return (
      <Root id="mypage-orbit">
        <Circle id="mypage-circle" shadow={this.state.haveShadow}>
          {projectList}
        </Circle>
      </Root>
    );
  }
}

const Root = styled.div`
  width: 900px;
  height: 800px;
  position: relative;
  overflow: cover;
  margin: 20px auto;
  z-index: 400;
  transform: skewX(-15deg) skewY(-8deg);
`;

const Circle = styled.div<{ shadow: boolean }>`
  width: $mypage-orbit !important;
  height: $mypage-orbit !important;
  position: absolute;
  top: 100px;
  left: 200px;

  margin: 0 auto;
  border: solid 1px #fff;
  border-radius: 50%;
  z-index: 400;

  ${({ shadow }) => {
    return shadow
      ? "box-shadow: 0px 0px 10px 10px rgba(220,220,220,0.7), 0px 0px 10px -2px rgba(220,220,220,0.7) inset;"
      : "";
  }}
`;

const CommonOrbit = styled.div<{ pos: string }>`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
  text-align: center;
  z-index: -100;

  animation: rotate $secundus-orbit-speed linear infinite !important;

  animation-play-state: running;

  ${({ pos }) => {
    switch (pos) {
      case "top":
        return top;
      case "right":
        return right;
      case "left":
        return left;
      case "bottom":
        return bottom;
    }
  }}
`;

const PlanetContainer = styled.div`
  display: block;
  width: 100% !important;
  height: 100% !important;
  border-radius: 50%;
  position: relative !important;
  animation: ${rotate} $secundus-orbit-speed linear reverse infinite;
`;

const PopupBox = styled.div`
  position: absolute;
  top: -100px !important;
  right: 30px !important;
  z-index: 1000;
  transform: skewX(15deg) skewY(8deg);

  display: none;
  margin: 1.5em auto;
  padding: 7px 10px;
  width: 300px;
  height: 130px;
  border: solid 3px #fff;
  box-sizing: border-box;
  opacity: 1;
  background-color: rgba(23, 34, 49, 0.8);

  &:before {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-top: 12px solid #000;
    z-index: 1000;
    opacity: 1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-top: 14px solid #fff;
  }
`;

const _Planet = styled(Planet)`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 75px;
  left: 75px;
  cursor: pointer;

  img {
    width: 120px;
    height: 120px;
    z-index: 500;
    transform: skewX(15deg) skewY(8deg);
  }
`;

export default connect(
  ({ revolvingProjects, modalOpen }: any) => ({ revolvingProjects, modalOpen }),
  { setModalStatus, setCurrentProject, fetchRevolvingProjects }
)(MypageOrbit);
