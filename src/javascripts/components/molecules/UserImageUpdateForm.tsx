import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";

import Img from "../atoms/Image";
import { updateUserImg } from "../../actions/users";

interface Props {
  currentUser: any;

  updateUserImg: any;
}

const UserImgUpdater: React.FC<Props> = ({ currentUser }) => {
  function onSelectUserImg(e: MouseEvent) {
    if (window.confirm("アイコンを本当に変更しますか？")) {
      updateUserImg(e.target.files[0]);
    }
  }

  return (
    <Root>
      <Container>
        <Avator src={currentUser.avatar.url} alt={currentUser.name} />
      </Container>
      <SelectButton>
        SELECT <br /> USER IMAGE
        <input
          className="display-none"
          name="avatar"
          accept="image/*"
          type="file"
          onChange={() => onSelectUserImg}
        />
      </SelectButton>
    </Root>
  );
};

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 0;
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const Avator = styled(Img)`
  margin: 10px auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const SelectButton = styled.label`
  display: block;
  width: 200px;
  margin: 20px auto 30px;
  padding: 1px 20px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  color: $bg-common-color;

  font-size: 14px;
  line-height: 1.5;
  font-family: sans-serif;
  font-style: normal;
  font-weight: lighter;
  letter-spacing: 4px;

  cursor: pointer;
`;

export default connect(
  null,
  { updateUserImg }
)(UserImgUpdater);
