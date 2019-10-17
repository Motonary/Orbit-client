import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";

import Planet from "./Planet";

import { setSelectedStar, resetSelectedStar } from "../../actions/common";

interface Props {
  planetType: string;

  selectedStar: any;

  setSelectedStar: any;
  resetSelectedStar: any;
}

class PlanetList extends React.Component<Props, {}> {
  componentDidMount() {
    this.setDragnDrop();
  }

  setDragnDrop() {
    // Draggable Element
    const target = document.getElementById(this.props.planetType);

    // Start of dragging
    target.addEventListener(
      "dragstart",
      () => {
        this.props.setSelectedStar(this.props.planetType);
      },
      false
    );
  }

  render() {
    const { planetType } = this.props;

    return (
      <Root id={planetType} className="planet" draggable={true}>
        <_Planet planetType={planetType} />
      </Root>
    );
  }
}

const Root = styled.li`
  list-style: none;
  color: #fff;
  width: $available-planet-size;
  height: $available-planet-size;
  margin-right: 10px;
  border-radius: 50%;
`;

const _Planet = styled(Planet)`
  width: $available-planet-size;
  height: $available-planet-size;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: $available-planet-size;
    height: $available-planet-size;
  }
`;

export default connect(
  ({ selectedStar }: any) => ({ selectedStar }),
  { setSelectedStar, resetSelectedStar }
)(PlanetList);
