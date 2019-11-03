import * as React from "react";

const UserImg = ({ user }: any) => (
  <div className="user-img-container">
    <img src={user.avatar} className="user-img" />
  </div>
);

export default UserImg;
