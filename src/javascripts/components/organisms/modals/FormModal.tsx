import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import AssignmentForm from "../../molecules/forms/assignment-form";
import SubAssignmentForm from "../../molecules/forms/subassignmnet-form";
import ProjectForm from "../../molecules/forms/project-form";

import { resetModalStatus, resetSelectedStar } from "../../../actions/common";

import "../../../../stylesheets/modal.scss";
import "../../../../stylesheets/form_on_modal.scss";

interface Props {
  pathname: any;

  selectedStar: any;
  modalOpen: string;

  resetSelectedStar: any;
  resetModalStatus: any;
}

const FormModal: React.FC<Props> = ({ pathname, selectedStar, modalOpen }) => {
  const orbit: string = modalOpen.includes("form")
    ? modalOpen.split("-")[1]
    : "";

  const assignmentId: string = modalOpen.includes("satelite")
    ? modalOpen.split("-")[2]
    : "";

  React.useEffect(() => {
    Modal.setAppElement("#app");

    document.addEventListener("click", (e: any) => {
      const isOverlayArea = e.target.classList.contains("ReactModal__Overlay");
      if (isOverlayArea) {
        resetSelectedStar();
        resetModalStatus();
      }
    });
  }, []);

  function renderForm(orbit: string, assignmentId: string) {
    if (pathname.includes("project")) {
      return orbit !== "" ? (
        <AssignmentForm orbit={orbit} />
      ) : (
        <SubAssignmentForm assignmentId={assignmentId} />
      );
    } else {
      return <ProjectForm />;
    }
  }

  return (
    <Modal
      isOpen={orbit !== "" || assignmentId !== ""}
      style={customStyles}
      contentLabel="Assignment Form Modal"
    >
      {renderForm(orbit, assignmentId)}
    </Modal>
  );
};

const customStyles = {
  overlay: {
    zIndex: "500",
    backgroundColor: "rgba(13, 25, 36, 0)"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "400px",
    height: "240px",
    backgroundColor: "rgba(13, 25, 36)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "10px",
    marginRight: "-50%",
    color: "#fff",
    transform: "translate(-50%, -50%)",
    zIndex: "1000"
  }
};

export default connect(
  ({ selectedStar, modalOpen }: any) => ({ selectedStar, modalOpen }),
  { resetModalStatus, resetSelectedStar }
)(FormModal);
