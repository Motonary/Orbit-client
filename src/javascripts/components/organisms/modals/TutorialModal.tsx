import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import RawButton from "../../atoms/RawButton";
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
      <TutorialContainer>
        {isFirstMyPage && !isFirstProjectPage ? (
          <Tutorial>
            <li>回っている恒星をクリックしてProjectPageへ遷移してみよう！</li>
          </Tutorial>
        ) : (
          <Tutorial>
            <label>リストの削除</label>
            <li>軌道上の惑星を１つクリックしてチェックマークを付けよう！</li>
            <li>
              そのまま右下の3つのボタンから好きなものをクリックしてみよう！
            </li>
            <br />
            <label>リストの追加</label>
            <li>左下のプラスボタンを押してみよう！</li>
            <li>出てきた惑星をドラッグ＆ドロップして軌道上に追加しよう！</li>
          </Tutorial>
        )}
      </TutorialContainer>
      <ConfirmButton>
        <ConfirmBtn onClick={() => closeModal}>閉じる</ConfirmBtn>
      </ConfirmButton>
    </Modal>
  );
};

const TutorialContainer = styled.div`
  margin: 10px auto;
`;

const Tutorial = styled.ul`
  label {
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
`;

const ConfirmButton = styled.div`
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
