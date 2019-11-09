import styled from "@emotion/styled";
import * as React from "react";

import ProjectPageLink from "./ProjectPageLink";

interface Props {
  history: any;
  match: any;

  destroyedAssignments: any;

  fetchDestroyedAssignments: any;
}

class HistoryCanvas extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchDestroyedAssignments();
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas: any = document.getElementById("background-liner");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    this.drawLiner(context);
  }

  drawLiner(context: any) {
    if (!context) return;
    context.strokeStyle = "rgb(255, 255, 255)";

    const initialHeight = 50;
    const leftEnd = 100;
    const rightEnd = 800;
    const radius = 50;

    context.beginPath();
    context.moveTo(leftEnd, initialHeight);

    context.beginPath();
    context.moveTo(50, 100);
    // 座標を指定してラインを引いていく
    context.lineTo(rightEnd, 100);
    context.arc(
      rightEnd,
      150,
      radius,
      (-90 / 180) * Math.PI,
      (90 / 180) * Math.PI,
      false
    );
    context.moveTo(rightEnd, 200);
    context.lineTo(leftEnd, 200);
    context.arc(
      leftEnd,
      250,
      radius,
      (-90 / 180) * Math.PI,
      (90 / 180) * Math.PI,
      true
    );
    context.moveTo(leftEnd, 300);
    context.lineTo(rightEnd, 300);
    context.arc(
      rightEnd,
      350,
      radius,
      (-90 / 180) * Math.PI,
      (90 / 180) * Math.PI,
      false
    );
    context.moveTo(rightEnd, 400);
    context.lineTo(leftEnd, 400);
    context.arc(
      leftEnd,
      450,
      radius,
      (-90 / 180) * Math.PI,
      (90 / 180) * Math.PI,
      true
    );
    context.moveTo(leftEnd, 500);
    context.lineTo(rightEnd, 500);
    context.arc(
      rightEnd,
      550,
      radius,
      (-90 / 180) * Math.PI,
      (90 / 180) * Math.PI,
      false
    );
    context.moveTo(rightEnd, 600);
    context.lineTo(leftEnd, 600);
    context.arc(
      leftEnd,
      650,
      radius,
      (-90 / 180) * Math.PI,
      (90 / 180) * Math.PI,
      true
    );
    context.moveTo(leftEnd, 700);
    context.lineTo(rightEnd, 700);
    // 現在のパスを輪郭表示する
    context.stroke();
  }

  render() {
    const { destroyedAssignments } = this.props;
    if (
      !destroyedAssignments ||
      Object.keys(destroyedAssignments).length === 0
    ) {
      return (
        <NoneDisplayedContainer>
          <Title>ProjectPageから星を消してみよう！</Title>
          <ProjectPageLink
            history={this.props.history}
            match={this.props.match}
          />
        </NoneDisplayedContainer>
      );
    }
    return (
      <Root>
        <BackgourndCanvas id="background-liner" width="900" height="750" />
      </Root>
    );
  }
}

const Root = styled.div`
  display: block;
  position: absolute;
  top: 100px;
  left: 150px;
  padding: 0;
  width: 1000px;
  height: 600px;
  overflow-y: scroll;
`;

const BackgourndCanvas = styled.canvas`
  margin: 0;
  padding: 0;
  max-width: 1000px;
  z-index: -100;
`;

const NoneDisplayedContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 30%;
  z-index: 1000;
`;

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export default HistoryCanvas;
