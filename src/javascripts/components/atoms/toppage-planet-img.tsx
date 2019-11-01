import * as React from "react";

const ImgPlanet = `${process.env.PUBLIC_URL}/images/index/top_earth.png`;

const TopPagePlanet = () => (
  <div className="planet-img-container">
    <img src={ImgPlanet} className="top-page-planet" />
  </div>
);

export default TopPagePlanet;
