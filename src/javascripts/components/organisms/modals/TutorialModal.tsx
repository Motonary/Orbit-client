import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import MyPageTutorial from "../../atoms/mypage-tutorial";
import ProjectPageTutorial from "../../atoms/projectpage-tutorial";
import ConfirmBtn from "../../atoms/buttons/confirm-btn";

import { removeFirstVisitFlag } from "../../../actions/users";
import { resetModalStatus, resetSelectedStar } from "../../../actions/common";

interface Props {
  currentUser: any;
  pathname: any;

  removeFirstVisitFlag: any;
  resetSelectedStar: any;
  resetModalStatus: any;
}

const TutorialModal: React.FC<Props> = ({ currentUser, pathname }) => {
  const [isFirstProjectPage, setFirstProjectPage] = React.useState(
    currentUser.first_visit_flag && pathname.includes("projects")
  );
  const [isFirstMyPage, setFirstMyPage] = React.useState(
    currentUser.first_visit_flag && pathname === `/users/${currentUser.id}`
  );

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

  function closeModal() {
    setFirstMyPage(false);
    if (isFirstProjectPage) {
      removeFirstVisitFlag(currentUser);
      setFirstProjectPage(false);
    }
  }

  return (
    <Modal
      isOpen={isFirstMyPage || isFirstProjectPage}
      style={customStyles}
      contentLabel="Tutorial Modal"
    >
      <Tutorial>
        {isFirstMyPage && !isFirstProjectPage ? (
          <MyPageTutorial />
        ) : (
          <ProjectPageTutorial />
        )}
      </Tutorial>
      <ConfirmButton>
        <ConfirmBtn message="閉じる" onClick={() => closeModal} />
      </ConfirmButton>
    </Modal>
  );
};

const Tutorial = styled.div`
  margin: 10px auto;

  ul.tutorial-list {
    .label {
      display: inline-block;
      font-family: orator-std, monospace;
      font-size: 18px;
      font-weight: 300;
      text-align: left;
      border-bottom: 1px solid #ddd;
      margin-bottom: 5px;
    }

    li {
      font-family: orator-std, monospace;
      font-size: 16px;
      font-weight: 300;
      list-style-type: circle;
    }
  }
`;

const ConfirmButton = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;

const customStyles = {
  overlay: {
    zIndex: "1000",
    backgroundColor: "rgba(13, 25, 36, 0)"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "550px",
    backgroundColor: "rgba(13, 25, 36, 0.9)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "10px",
    marginRight: "-50%",
    color: "#fff",
    transform: "translate(-50%, -50%)"
  }
};

export default connect(
  null,
  {
    removeFirstVisitFlag,
    resetSelectedStar,
    resetModalStatus
  }
)(TutorialModal);
