import styled from "@emotion/styled";
import * as React from "react";
import anime from "animejs";

import Img from "../atoms/Image";

interface Props {
  className?: string;
  icon: string;
  onClick: () => void;

  selectedAssignments: any;

  modalOpen: any;
  selectedDestroyAction: any;

  resetSelectedAssignment: any;
  restoreAssignment: any;
  resetDestroyAction: any;
}

class Revival extends React.Component<Props, {}> {
  componentDidUpdate() {
    if (this.props.selectedAssignments.length === 0) return;
    if (this.props.modalOpen !== "") return;
    if (this.props.selectedDestroyAction !== "Revival") return;
    this.iginiteRevivalAnimation();
  }

  iginiteRevivalAnimation() {
    Promise.resolve()
      .then(() => {
        this.props.selectedAssignments.forEach((assignment: string) => {
          this.removeImg(assignment);
          setTimeout(() => {
            this.props.restoreAssignment(assignment.split("-")[0]);
          }, 1000);
        });
      })
      .then(() => {
        this.props.resetDestroyAction();
        this.props.resetSelectedAssignment();
      });
  }
  removeImg(assignmentId: string) {
    anime({
      targets: `#planet-${assignmentId} .stored-planet`,
      rotate: {
        value: "6turn",
        duration: 1500,
        easing: "easeInExpo"
      },
      opacity: {
        value: [1, 0],
        duration: 1500,
        easing: "easeInExpo"
      }
    });
  }

  render() {
    const { className, icon, onClick } = this.props;
    const holderHeight = "100px";

    return (
      <Root className={className} onClick={onClick}>
        <Img src={icon} alt={icon} height={holderHeight} width={holderHeight} />
      </Root>
    );
  }
}

const Root = styled.li``;

export default Revival;
