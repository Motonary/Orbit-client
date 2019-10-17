import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";

import Img from "../atoms/Image";
import { shiver } from "../common/keyframes";

import {
  setCurrentProject,
  fetchRevolvingProjects
} from "../../actions/projects";

import { PlanetImgs } from "../../constants/images";

interface Props {
  history: any;
  match: any;

  revolvingProjects: any;

  setCurrentProject: any;
  fetchRevolvingProjects: any;
}

class ProjectPageLink extends React.Component<Props, {}> {
  componentDidMount() {
    if (!this.props.revolvingProjects) {
      this.props.fetchRevolvingProjects();
    }
  }
  onClickProjectPlanet(projectId: string) {
    const url = this.props.match.url.replace(/\/history/, "");
    this.props.setCurrentProject(
      this.props.revolvingProjects[projectId],
      () => {
        this.props.history.push(`${url}/projects`);
      }
    );
  }

  render() {
    return (
      <Root>
        {this.props.revolvingProjects.map((project: any) => {
          return (
            <Planet
              key={project.id}
              onClick={() => this.onClickProjectPlanet(project.id)}
            >
              <Img
                src={PlanetImgs[project.fixed_star_type]}
                alt={project.fixed_star_type}
                width="80px"
                height="80px"
              />
            </Planet>
          );
        })}
      </Root>
    );
  }
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Planet = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 50%;
  animation: ${shiver} 1s infinite;
  cursor: pointer;
`;

export default connect(
  ({ revolvingProjects }: any) => ({ revolvingProjects }),
  { setCurrentProject, fetchRevolvingProjects }
)(ProjectPageLink);
