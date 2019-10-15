import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import ConfirmBtn from "../../atoms/buttons/confirm-btn";

import { resetDestroyAction, resetModalStatus } from "../../../actions/common";

import "../../../../stylesheets/modal.scss";

interface Props {
  motionControll: () => void;

  modalOpen: string;
  resetDestroyAction: any;
  resetModalStatus: any;
}

const ConfirmModal: React.FC<Props> = ({ motionControll, modalOpen }) => {
  const confirmState = {
    destroy: "本当に選択タスクを破壊しますか？",
    restore: "本当に選択したタスクを元の場所に戻しますか？"
  };
  const actionTypes = ["Missile", "Meteorite", "BlackHole", "Revival"];

  function igniteAction() {
    resetModalStatus();
  }

  function closeModal(/*isDestroy*/) {
    resetDestroyAction();
    resetModalStatus();
    motionControll();
  }

  React.useEffect(() => {
    Modal.setAppElement("#app");
  }, []);

  return (
    <Modal
      isOpen={actionTypes.includes(modalOpen)}
      style={customStyles}
      contentLabel="Confirmation Modal"
    >
      <Warning>
        {modalOpen !== "Revival"
          ? confirmState["destroy"]
          : confirmState["restore"]}
      </Warning>
      <ConfirmButtons>
        <ConfirmBtn message="いいえ" onClick={() => closeModal} />
        <ConfirmBtn message="はい" onClick={() => igniteAction} />
      </ConfirmButtons>
    </Modal>
  );
};

const Warning = styled.div`
  width: 400px;
  margin: 10px auto;
  text-align: center;
  font-size: 14px;
  font-family: inherit;
  font-weight: lighter;
  letter-spacing: 2px;
`;

const ConfirmButtons = styled.div`
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
    width: "400px",
    height: "100px",
    backgroundColor: "rgba(13, 25, 36, 0.7)",
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
  ({ modalOpen }: any) => ({ modalOpen }),
  {
    resetDestroyAction,
    resetModalStatus
  }
)(ConfirmModal);
