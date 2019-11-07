// -----------------------------------------------------------------------------
// import
// -----------------------------------------------------------------------------
import { CLOUD_FRONT_ASSETS_ROOT } from "./RootUrl";

// HeaderIcons
const ImgHistoryIcon = `${CLOUD_FRONT_ASSETS_ROOT}/header/history_icon.png`;
const ImgSettingIcon = `${CLOUD_FRONT_ASSETS_ROOT}/header/setting_icon.png`;
const ImgBackIcon = `${CLOUD_FRONT_ASSETS_ROOT}/header/back_icon.png`;
const SignInButton = `${CLOUD_FRONT_ASSETS_ROOT}/header/sign_in_button.png`;
const SignUpButton = `${CLOUD_FRONT_ASSETS_ROOT}/header/sign_up_button.png`;

// planet images
const ImgStar1 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_1.png`;
const ImgStar2 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_2.png`;
const ImgStar3 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_3.png`;
const ImgStar4 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_4.png`;
const ImgStar5 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_5.png`;
const ImgStar6 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_6.png`;
const ImgStar7 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_7.png`;
const ImgStar8 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_8.png`;
const ImgStar9 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_9.png`;
const ImgStar10 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_10.png`;
const ImgStar11 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_11.png`;
const ImgStar12 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_12.png`;
const ImgStar13 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_13.png`;
const ImgStar14 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_14.png`;
const ImgStar15 = `${CLOUD_FRONT_ASSETS_ROOT}/planets/star_15.png`;

// delete icons
const DeleteIcon1 = `${CLOUD_FRONT_ASSETS_ROOT}/footer/delete_btn_1.png`;
const DeleteIcon2 = `${CLOUD_FRONT_ASSETS_ROOT}/footer/delete_btn_2.png`;
const DeleteIcon3 = `${CLOUD_FRONT_ASSETS_ROOT}/footer/delete_btn_3.png`;

// revival icons
const RevivalIcon = `${CLOUD_FRONT_ASSETS_ROOT}/footer/revival_btn.png`;

// delete action
const MeteoriteImg = `${CLOUD_FRONT_ASSETS_ROOT}/main/metor.png`;
const MissileImg = `${CLOUD_FRONT_ASSETS_ROOT}/main/missile.png`;
const BlackHoleImg = `${CLOUD_FRONT_ASSETS_ROOT}/main/blackhole.png`;

// Starholder
const ImgHolderOpenImg = `${CLOUD_FRONT_ASSETS_ROOT}/footer/planet_holder_btn.png`;

// index
export const Logo = `${CLOUD_FRONT_ASSETS_ROOT}/index/logo.png`;
export const TopEarthImg = `${CLOUD_FRONT_ASSETS_ROOT}/index/top_earth.png`;

// backgroud
export const Background = `${CLOUD_FRONT_ASSETS_ROOT}/universe.png`;

// -----------------------------------------------------------------------------
// export
// -----------------------------------------------------------------------------

export const HeaderIcons = {
  HISTORY: ImgHistoryIcon,
  SETTING: ImgSettingIcon,
  BACK: ImgBackIcon
};

export const TopPageImgs = {
  signIn: SignInButton,
  signUp: SignUpButton,
  logo: Logo,
  planet: TopEarthImg
};

export const FixedStarImgs = {
  Sun: ImgStar11,
  Venus: ImgStar12,
  Takoyaki: ImgStar13,
  Ball: ImgStar14
};

export const NormalPlanetImgs = {
  Uranus: ImgStar1,
  Mercury: ImgStar2,
  Pluto: ImgStar3,
  Jupitar: ImgStar4,
  Earth: ImgStar5,
  Moon: ImgStar6,
  Love: ImgStar7,
  Mars: ImgStar8,
  Neputune: ImgStar9,
  Sirius: ImgStar10,
  Egg: ImgStar15
};

export const PlanetImgs = {
  Uranus: ImgStar1,
  Mercury: ImgStar2,
  Pluto: ImgStar3,
  Jupitar: ImgStar4,
  Earth: ImgStar5,
  Moon: ImgStar6,
  Love: ImgStar7,
  Mars: ImgStar8,
  Neputune: ImgStar9,
  Sirius: ImgStar10,
  Sun: ImgStar11,
  Venus: ImgStar12,
  Takoyaki: ImgStar13,
  Ball: ImgStar14,
  Egg: ImgStar15
};

export const ActionIcons = {
  Revival: RevivalIcon,
  Meteorite: DeleteIcon1,
  Missile: DeleteIcon2,
  BlackHole: DeleteIcon3
};

export const DeleteActions = {
  Meteorite: MeteoriteImg,
  Missile: MissileImg,
  BlackHole: BlackHoleImg
};

export const ImgHolderOpen = ImgHolderOpenImg;
