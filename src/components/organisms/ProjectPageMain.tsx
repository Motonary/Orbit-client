import styled from "@emotion/styled";
import * as React from "react";

import FixedStar from "../molecules/FixedStar";
import CircleOrbit from "../molecules/CircleOrbit";
import ProjectBar from "../molecules/ProjectBar";

interface Props {
  currentProject: any;
}

const ProjectPageMain: React.SFC<Props> = ({ currentProject }) => (
  <Root>
    <ProjectOrits>
      <FixedStar project={currentProject} />
      <CircleOrbit orbit="primo" />
      <CircleOrbit orbit="secundus" />
      <CircleOrbit orbit="tertius" />
    </ProjectOrits>
    <ProjectBar currentProject={currentProject} />
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px auto;
`;

const ProjectOrits = styled.div`
  max-width: 1000px;
  height: 100%;
  position: relative;
  overflow: scroll;
  margin: 40px auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ProjectPageMain;
