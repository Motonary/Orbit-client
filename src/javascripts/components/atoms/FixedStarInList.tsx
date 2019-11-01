import styled from "@emotion/styled";
import * as React from "react";

import Img from "../atoms/Image";
import { PlanetImgs } from "../../constants/ImagesUrl";

interface Props {
  className?: string;
  project: any;
  onClick: React.MouseEventHandler;
}

const FixedStarInList: React.FC<Props> = ({ project, className, onClick }) => (
  <Root className={className} onClick={onClick}>
    <Img
      src={PlanetImgs[project.fixed_star_type]}
      alt={project.fixed_star_type}
    />
  </Root>
);

const Root = styled.li``;

export default FixedStarInList;
