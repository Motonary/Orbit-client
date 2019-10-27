import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";

import FixedStarInList from "../atoms/FixedStarInList";
import { fetchRevolvingAssignments } from "../../actions/assignments";
import { changeCurrentProject } from "../../actions/projects";

interface Props {
  currentProject: any;

  changeCurrentProject: any;
  revolvingProjects: any;
  fetchRevolvingAssignments: any;
}

const ProjectBar: React.FC<Props> = ({ currentProject, revolvingProjects }) => {
  function onClickFixedStarOnBar(nextProjectId: any) {
    changeCurrentProject(revolvingProjects[nextProjectId], () => {
      fetchRevolvingAssignments(nextProjectId);
    });
  }

  const ProjectList: any = revolvingProjects.map((project: any) => {
    if (project.id !== currentProject.id) {
      return (
        <_FixedStarInList
          key={project.id}
          project={project}
          onClick={() => onClickFixedStarOnBar(project.id)}
        />
      );
    }
  });

  return (
    <Root>
      <ProjectList>{ProjectList}</ProjectList>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  top: 25%;
  right: 40px;
  z-index: 500;

  img {
    width: 40px;
    height: 40px;
  }
`;

const ProjectList = styled.ul`
  width: 60px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin: 0;
  padding: 0 5px;
`;

const _FixedStarInList = styled(FixedStarInList)`
  list-style: none;
  width: $available-planet-size;
  height: $available-planet-size;
  margin: 5px auto;
  cursor: pointer;
`;

export default connect(
  ({ revolvingProjects }: any) => ({ revolvingProjects }),
  { changeCurrentProject, fetchRevolvingAssignments }
)(ProjectBar);
