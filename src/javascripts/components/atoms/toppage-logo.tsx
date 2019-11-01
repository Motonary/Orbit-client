import * as React from "react";

const ImgLogo = `${process.env.PUBLIC_URL}/images/planets/star_1.png`;

const TopPageLogo = () => (
  <div className="logo-container">
    <img src={ImgLogo} className="top-page-logo" />
  </div>
);

export default TopPageLogo;
