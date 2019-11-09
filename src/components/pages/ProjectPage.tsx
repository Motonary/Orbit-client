import * as React from "react";

import { Root } from "./CommonStyleComponents";
import Header from "../organisms/Header";
import ProjectPageMain from "../organisms/ProjectPageMain";
import Footer from "../organisms/Footer";

interface Props {
  currentUser: any;
  currentProject: any;
  history: any;
  match: any;
  location: any;
  revolvingProjects: any;
  fetchRevolvingAssignments: any;
  fetchRevolvingProjects: any;
  setDefaultProject: any;
}

class ProjectPage extends React.Component<Props, {}> {
  componentDidMount() {
    const { currentProject, revolvingProjects } = this.props;
    // TODO: リファクタリング
    if (currentProject) {
      this.props.fetchRevolvingAssignments(currentProject.id);
    } else if (revolvingProjects) {
      this.props.setDefaultProject(
        revolvingProjects[Object.keys(revolvingProjects)[0]]
      );
    } else {
      this.props.fetchRevolvingProjects().then(() => {
        const { revolvingProjects } = this.props;
        if (revolvingProjects) {
          this.props.setDefaultProject(
            revolvingProjects[Object.keys(revolvingProjects)[0]],
            (defaultProjectId: any) =>
              this.props.fetchRevolvingAssignments(defaultProjectId)
          );
        }
      });
    }
  }

  render() {
    const {
      currentUser,
      currentProject,
      history,
      match,
      location: { pathname }
    } = this.props;

    if (!currentUser) return <div>Loading....</div>;

    if (currentUser.id !== parseInt(match.params.userId, 10)) {
      const correctPath = `/users/${currentUser.id}`;
      return <Redirect to={correctPath} />;
    }

    if (!currentProject) return <div>Loading....</div>;

    return (
      <Root>
        <Header
          currentUser={currentUser}
          history={history}
          pathname={pathname}
        />
        <ProjectPageMain currentProject={currentProject} />
        <Footer
          currentUser={currentUser}
          pathname={pathname}
          history={history}
        />
      </Root>
    );
  }
}

export default ProjectPage;
