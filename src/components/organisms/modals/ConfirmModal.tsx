import styled from "@emotion/styled";
import * as React from "react";
import Modal from "react-modal";

import RawButton from "../../atoms/RawButton";

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
        <ConfirmBtn onClick={() => closeModal}>いいえ</ConfirmBtn>
        <ConfirmBtn onClick={() => igniteAction}>はい</ConfirmBtn>
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

const ConfirmBtn = styled(RawButton)`
  display: block;
  width: 100px;
  height: 25px;
  font-size: 14px;
  font-family: inherit;
  font-weight: lighter;
  line-height: 25px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: inherit;
  padding: 0 10px;
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
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

export default ConfirmModal;
