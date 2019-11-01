import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";

import PopupBox from "../atoms/PopupBox";
import Planet from "./Planet";
import { top, right, left, bottom } from "../common/Position";
import { rotate, shiver } from "../common/Keyframes";

import {
  setSelectedStar,
  resetSelectedStar,
  setModalStatus
} from "../../actions/common";

interface Props {
  orbit: any;

  modalOpen: any;
  selectedStar: any;
  revolvingAssignments: any;
  selectedAssignments: any;

  setSelectedStar: any;
  resetSelectedStar: any;
  setModalStatus: any;
}

interface State {
  haveShadow: boolean;
  warningPlanets: string[];
}

class CircleOrbit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      haveShadow: false,
      warningPlanets: []
    };
  }

  componentDidMount() {
    this.setOrbitDrop();
    this.setPlanetDrop();
  }

  componentDidUpdate() {
    this.addWarningAnimation();
  }

  setPlanetDrop() {
    const { revolvingAssignments, modalOpen, orbit } = this.props;

    if (!revolvingAssignments) return;
    // Droppable area
    revolvingAssignments[orbit].forEach((assignment: any) => {
      const targetName = `planet-${assignment.id}-${assignment.planet_type}`;
      const target: HTMLElement = document.getElementById(
        `planet-${assignment.id}-${assignment.planet_type}`
      );

      target.addEventListener(
        "dragenter",
        () => {
          if (!this.state.warningPlanets.includes(targetName)) {
            this.setState({
              warningPlanets: [...this.state.warningPlanets, targetName]
            });
          }
        },
        false
      );

      // Entering into the droppable area
      target.addEventListener(
        "dragenter",
        () => {
          if (!this.state.warningPlanets.includes(targetName)) {
            this.setState({
              warningPlanets: [...this.state.warningPlanets, targetName]
            });
          }
        },
        false
      );

      // Leaving from the droppable area
      target.addEventListener(
        "dragleave",
        () => {
          if (this.state.warningPlanets.includes(targetName)) {
            this.setState({
              warningPlanets: this.state.warningPlanets.filter(
                name => name === targetName
              )
            });
          }
        },
        false
      );

      // Drop
      target.addEventListener(
        "drop",
        (e: MouseEvent) => {
          e.preventDefault();

          if (this.state.warningPlanets.includes(targetName)) {
            this.setState({
              warningPlanets: this.state.warningPlanets.filter(
                name => name === targetName
              )
            });
          }
          if (modalOpen !== "") {
            this.props.setModalStatus(`form-satelite-${assignment.id}`);
          }
        },
        false
      );
    });
  }

  setOrbitDrop() {
    const { modalOpen, orbit } = this.props;
    // Droppable area
    const target = document.getElementById(`circle-${orbit}`);

    // Entering into the droppable area
    target.addEventListener(
      "dragenter",
      () => {
        this.setState({ haveShadow: !this.state.haveShadow });
      },
      false
    );

    // Leaving from the droppable area
    target.addEventListener(
      "dragleave",
      () => {
        this.setState({ warningPlanets: [] });
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

        this.setState({ warningPlanets: [] });
        if (!modalOpen) {
          this.props.setModalStatus(`form-${orbit}`);
        }
      },
      false
    );
  }

  addWarningAnimation() {
    const { revolvingAssignments, orbit } = this.props;
    if (!revolvingAssignments) return;

    const today: number = new Date().getTime();
    const msPerDay = 24 * 60 * 60 * 1000;
    revolvingAssignments[orbit].forEach((assignment: any) => {
      if (!assignment || !assignment.deadline) return;
      const deadline: number = new Date(
        assignment.deadline.replace(/-/g, "/").replace(/T/g, " ")
      ).getTime();

      const warningPlanets = [];
      if ((deadline - today) / msPerDay < 3) {
        warningPlanets.push(
          `planet-${assignment.id}-${assignment.planet_type}`
        );
        this.setState({ warningPlanets: warningPlanets });
      }
    });
  }

  render() {
    const { revolvingAssignments, orbit } = this.props;
    if (!revolvingAssignments) {
      return (
        <OrbitCircle
          id={`circle-${orbit}`}
          orbit={orbit}
          shadow={this.state.haveShadow}
        />
      );
    }

    const pos = ["top", "right", "left", "bottom"];
    const assignmentsOnEachOrbit = revolvingAssignments[orbit];

    if (assignmentsOnEachOrbit && assignmentsOnEachOrbit.length === 0) {
      return (
        <OrbitCircle
          id={`circle-${orbit}`}
          orbit={orbit}
          shadow={this.state.haveShadow}
        />
      );
    }

    return (
      <OrbitCircle
        id={`circle-${orbit}`}
        orbit={orbit}
        shadow={this.state.haveShadow}
      >
        {assignmentsOnEachOrbit &&
          assignmentsOnEachOrbit.map((assignmentInfo: any, index: number) => {
            return (
              <PlanetContainer
                key={assignmentInfo.id}
                pos={pos[index % 4]}
                orbit={assignmentInfo.orbit_pos}
              >
                <PlanetWrapper
                  id={`planet-${assignmentInfo.id}-${
                    assignmentInfo.planet_type
                  }`}
                  orbit={assignmentInfo.orbit_pos}
                  size={assignmentInfo.planet_type}
                  warning={this.state.warningPlanets.includes(
                    `planet-${assignmentInfo.id}-${assignmentInfo.planet_type}`
                  )}
                >
                  <PopupBox data={assignmentInfo} isProject={false} />
                  <_Planet
                    planetType={assignmentInfo.planet_type}
                    warning={this.state.warningPlanets.includes(
                      `planet-${assignmentInfo.id}-${
                        assignmentInfo.planet_type
                      }`
                    )}
                  />
                  <DestroyCanvas
                    id={`${assignmentInfo.id}-${assignmentInfo.planet_type}`}
                  />
                </PlanetWrapper>
              </PlanetContainer>
            );
          })}
      </OrbitCircle>
    );
  }
}

const OrbitCircle = styled.div<{ orbit: string; shadow: boolean }>`
  margin: 0 auto;
  border: 1px #fff;
  border-style: solid;
  border-radius: 50%;

  ${({ orbit }) => {
    switch (orbit) {
      case "primo":
        return `
        width: $primo-orbit;
        height: $primo-orbit;
        position: absolute;
        top: $primo-orbit-position-top;
        left: $primo-orbit-position-left;
        z-index: 90;
      `;
      case "secundus":
        return `
        width: $secundus-orbit;
        height: $secundus-orbit;
        position: absolute;
        top: $secundus-orbit-position-top;
        left: $secundus-orbit-position-left;
        z-index: 80;
      `;
      case "tertius":
        return `
        width: $tertius-orbit;
        height: $tertius-orbit;
        position: absolute;
        top: $tertius-orbit-position-top;
        left: $tertius-orbit-position-left;
        z-index: 70;
      `;
    }
  }}

  ${({ shadow }) => {
    return shadow
      ? "box-shadow: 0px 0px 10px 10px rgba(220,220,220,0.7), 0px 0px 10px -2px rgba(220,220,220,0.7) inset;"
      : "";
  }}
`;

const PlanetContainer = styled.div<{ pos: string; orbit: string }>`
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: 25%;
  text-align: center;
  z-index: -100;

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

  animation-play-state: running;
  ${({ orbit }) => {
    switch (orbit) {
      case "primo":
        return `animation: ${rotate} $primo-orbit-speed linear infinite;`;
      case "secundus":
        return `animation: ${rotate} $secundus-orbit-speed linear infinite;`;
      case "tertius":
        return `animation: ${rotate} $tertius-orbit-speed linear infinite;`;
      case "satelite":
        return `animation: ${rotate} $satelite-orbit-speed linear infinite;`;
    }
  }}
`;

const PlanetWrapper = styled.div<{
  orbit: string;
  size: string;
  warning: boolean;
}>`
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  word-wrap: break-word;
  animation-play-state: running;

  ${({ warning }) => {
    return warning
      ? `
      width: percentage($warning-orbit-planet-size) !important;
      height: percentage($warning-orbit-planet-size) !important;
    `
      : "";
  }}

  ${({ orbit, size }) => {
    switch (orbit) {
      case "primo":
        switch (size) {
          case "small":
            return `
              width: percentage($primo-orbit-small-planet);
              height: percentage($primo-orbit-small-planet);
              animation: ${rotate} $primo-orbit-speed linear reverse infinite;
            `;
          case "medium":
            return `
              width: percentage($primo-orbit-medium-planet);
              height: percentage($primo-orbit-medium-planet);
              animation: ${rotate} $primo-orbit-speed linear reverse infinite;
            `;
          case "large":
            return `
              width: percentage($primo-orbit-large-planet);
              height: percentage($primo-orbit-large-planet);
              animation: ${rotate} $primo-orbit-speed linear reverse infinite;
            `;
        }
        break;
      case "secundus":
        switch (size) {
          case "small":
            return `
              width: percentage($secundus-orbit-small-planet);
              height: percentage($secundus-orbit-small-planet);
              animation: ${rotate} $secundus-orbit-speed linear reverse infinite;
            `;
          case "medium":
            return `
              width: percentage($secundus-orbit-medium-planet);
              height: percentage($secundus-orbit-medium-planet);
              animation: ${rotate} $secundus-orbit-speed linear reverse infinite;
            `;
          case "large":
            return `
              width: percentage($secundus-orbit-large-planet);
              height: percentage($secundus-orbit-large-planet);
              animation: ${rotate} $secundus-orbit-speed linear reverse infinite;
            `;
        }
        break;
      case "tertius":
        switch (size) {
          case "small":
            return `
              width: percentage($tertius-orbit-small-planet);
              height: percentage($tertius-orbit-small-planet);
              animation: ${rotate} $tertius-orbit-speed linear reverse infinite;
            `;
          case "medium":
            return `
              width: percentage($tertius-orbit-medium-planet);
              height: percentage($tertius-orbit-medium-planet);
              animation: ${rotate} $tertius-orbit-speed linear reverse infinite;
            `;
          case "large":
            return `
              width: percentage($tertius-orbit-large-planet);
              height: percentage($tertius-orbit-large-planet);
              animation: ${rotate} $tertius-orbit-speed linear reverse infinite;
            `;
        }
        break;
    }
  }}
`;

const _Planet = styled(Planet)<{ warning: boolean }>`
  ${({ warning }) => {
    return warning
      ? `
      box-shadow:0px 0px 30px 5px #e02727;
      border:1px solid #e02727;
      border-radius:50%;
      animation: ${shiver} .1s infinite;
    `
      : "";
  }}
`;

const DestroyCanvas = styled.canvas`
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
`;

export default connect(
  ({
    revolvingAssignments,
    selectedAssignments,
    selectedStar,
    modalOpen
  }: any) => ({
    revolvingAssignments,
    selectedAssignments,
    selectedStar,
    modalOpen
  }),
  {
    setSelectedStar,
    resetSelectedStar,
    setModalStatus
  }
)(CircleOrbit);
