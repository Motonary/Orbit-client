import styled from "@emotion/styled";
import * as React from "react";

import Planet from "./Planet";

interface Props {
  project: any;
}

const FixedStar: React.FC<Props> = ({ project }) => {
  const { id, fixed_star_type } = project;

  return (
    <Root>
      <div id={`project-${id}-${fixed_star_type}`}>
        <Planet planetType={fixed_star_type} />
        <DestroyCanvas id={`${id}-${fixed_star_type}`} />
      </div>
    </Root>
  );
};

const Root = styled.div`
  width: $fixed-star-scale;
  height: $fixed-star-scale;
  margin: 0 auto;
  position: absolute;
  top: $fixed-star-position-top;
  left: $fixed-star-position-left;
  z-index: 100;

  img {
    width: $fixed-star-scale;
    height: $fixed-star-scale;
    z-index: 100;
  }
`;

const DestroyCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 1vw;
  height: 1vh;
`;

export default FixedStar;
