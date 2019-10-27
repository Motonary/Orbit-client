// -----------------------------------------------------------------------------
// import
// -----------------------------------------------------------------------------

// HeaderIcons
const ImgHistoryIcon = `${
  process.env.PUBLIC_URL
}/images/header/history_icon.png`;
const ImgSettingIcon = `${
  process.env.PUBLIC_URL
}/images/header/setting_icon.png`;
const ImgBackIcon = `${process.env.PUBLIC_URL}/images/header/back_icon.png`;
const SignInButton = `${
  process.env.PUBLIC_URL
}/images/header/sign_in_button.png`;
const SignUpButton = `${
  process.env.PUBLIC_URL
}/images/header/sign_up_button.png`;

// planet images
const ImgStar1 = `${process.env.PUBLIC_URL}/images/planets/star_1.png`;
const ImgStar2 = `${process.env.PUBLIC_URL}/images/planets/star_2.png`;
const ImgStar3 = `${process.env.PUBLIC_URL}/images/planets/star_3.png`;
const ImgStar4 = `${process.env.PUBLIC_URL}/images/planets/star_4.png`;
const ImgStar5 = `${process.env.PUBLIC_URL}/images/planets/star_5.png`;
const ImgStar6 = `${process.env.PUBLIC_URL}/images/planets/star_6.png`;
const ImgStar7 = `${process.env.PUBLIC_URL}/images/planets/star_7.png`;
const ImgStar8 = `${process.env.PUBLIC_URL}/images/planets/star_8.png`;
const ImgStar9 = `${process.env.PUBLIC_URL}/images/planets/star_9.png`;
const ImgStar10 = `${process.env.PUBLIC_URL}/images/planets/star_10.png`;
const ImgStar11 = `${process.env.PUBLIC_URL}/images/planets/star_11.png`;
const ImgStar12 = `${process.env.PUBLIC_URL}/images/planets/star_12.png`;
const ImgStar13 = `${process.env.PUBLIC_URL}/images/planets/star_13.png`;
const ImgStar14 = `${process.env.PUBLIC_URL}/images/planets/star_14.png`;
const ImgStar15 = `${process.env.PUBLIC_URL}/images/planets/star_15.png`;

// delete icons
const DeleteIcon1 = `${process.env.PUBLIC_URL}/images/footer/delete_btn_1.png`;
const DeleteIcon2 = `${process.env.PUBLIC_URL}/images/footer/delete_btn_2.png`;
const DeleteIcon3 = `${process.env.PUBLIC_URL}/images/footer/delete_btn_3.png`;

// revival icons
const RevivalIcon = `${process.env.PUBLIC_URL}/images/footer/revival_btn.png`;

// delete action
const MeteoriteImg = `${process.env.PUBLIC_URL}/images/main/metor.png`;
const MissileImg = `${process.env.PUBLIC_URL}/images/main/missile.png`;
const BlackHoleImg = `${process.env.PUBLIC_URL}/images/main/blackhole.png`;

// Starholder
const ImgHolderOpenImg = `${
  process.env.PUBLIC_URL
}/images/footer/planet_holder_btn.png`;

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
  signUp: SignUpButton
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
