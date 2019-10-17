import styled from "@emotion/styled";
import * as React from "react";

import PlanetList from "./PlanetList";
import PlanetHolderOpener from "../atoms/PlanetHolderOpener";

import { FixedStarImgs, NormalPlanetImgs } from "../../constants/images";

interface Props {
  pathname: any;
  currentUser: any;
}

const PlanetHolder: React.FC<Props> = ({ pathname, currentUser }) => {
  const PlanetImgs = pathname.includes("projects")
    ? NormalPlanetImgs
    : FixedStarImgs;

  const planetList = Object.keys(PlanetImgs).map((key: string) => {
    return <PlanetList key={key} planetType={key} />;
  });

  return (
    <Root id="planet-holder">
      <PlanetHolderOpener currentUser={currentUser} pathname={pathname} />
      <PlanetListContainer id="planet-list">{planetList}</PlanetListContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 410px;
  height: $holder-height;
  margin: 0 10px;
  padding: 0 10px;
  vertical-align: middle;
`;

const PlanetListContainer = styled.ul`
  display: flex;
  align-items: center;
  overflow: scroll;
  margin: 0;
  padding: 0;
  width: 0;
  transition: 1000ms linear;
`;

export default PlanetHolder;
