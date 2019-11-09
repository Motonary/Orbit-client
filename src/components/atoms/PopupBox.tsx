import styled from "@emotion/styled";
import * as React from "react";

import PopupAssignmentCard from "./PopupAssignmnetCard";
import PopupProjectCard from "./PopupProjectCard";

interface Props {
  className?: string;
  data: any;
  isProject: boolean;
}

const PopupBox: React.FC<Props> = ({ className, data, isProject }) => (
  <Root className={className} isProject={isProject}>
    {isProject ? (
      <PopupProjectCard project={data} />
    ) : (
      <PopupAssignmentCard assignment={data} />
    )}
  </Root>
);

const Root = styled.div<{ isProject: boolean }>`
  position: absolute;
  top: ${({ isProject }) => (isProject ? "-100px" : "-200px")} !important;
  right: ${({ isProject }) => (isProject ? "30px" : "-125px")} !important;
  z-index: 1000;
  ${({ isProject }) =>
    isProject ? "transform: skewX(15deg) skewY(8deg);" : ""}

  display: none;
  margin: 1.5em auto;
  padding: 7px 10px;
  width: ${({ isProject }) => (isProject ? "300px" : "280px")};
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

export default PopupBox;
