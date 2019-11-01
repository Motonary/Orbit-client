/* 恒星系の配置　*/
const PositionMoveDistanceTop = 50;
const PositionMoveDistanceLeft = 100;

const FixedStarPositionTop = 300 + PositionMoveDistanceTop;
const PrimoOrbitPositionTop = 210 + PositionMoveDistanceTop;
const SecundusOrbitPositionTop = 100 + PositionMoveDistanceTop;
const TertiusOrbitPositionTop = 0 + PositionMoveDistanceTop;

const FixedStarPositionLeft = 300 + PositionMoveDistanceLeft;
const PrimoOrbitPositionLeft = 210 + PositionMoveDistanceLeft;
const SecundusOrbitPositionLeft = 100 + PositionMoveDistanceLeft;
const TertiusOrbitPositionLeft = 0 + PositionMoveDistanceLeft;

/*　恒星の大きさ　：　基準値　*/
const FixedStarScale = 150;

/* 各軌道の恒星比 */
const PrimoOrbitRatio = 2.2; // 330px
const SecundusOrbitRatio = 3.67; // 550px
const TertiusOrbitRatio = 5; // 750px

/* 惑星の恒星比 */
const LargePlanetRatio = 0.75;
const MediumPlanetRatio = 0.65;
const SmallPlanetRatio = 0.55;
const warningPlanetRatio = 0.8;

/* 各軌道の大きさ */
const PrimoOrbit = FixedStarScale * PrimoOrbitRatio;
const SecundusOrbit = FixedStarScale * SecundusOrbitRatio;
const TertiusOrbit = FixedStarScale * TertiusOrbitRatio;

/* 各軌道における周回速度 */
const PrimoOrbitspeed = "40s";
const SecundusOrbitspeed = "60s";
const TertiusOrbitspeed = "80s";
const SateliteOrbitspeed = "60s";

/* 各軌道における各惑星（大・中・小）の大きさ */
const PrimoOrbitLargePlanet = LargePlanetRatio / PrimoOrbitRatio;
const PrimoOrbitMediumPlanet = MediumPlanetRatio / PrimoOrbitRatio;
const PrimoOrbitSmallPlanet = SmallPlanetRatio / PrimoOrbitRatio;
const SecundusOrbitLargePlanet = LargePlanetRatio / SecundusOrbitRatio;
const SecundusOrbitMediumPlanet = MediumPlanetRatio / SecundusOrbitRatio;
const SecundusOrbitSmallPlanet = SmallPlanetRatio / SecundusOrbitRatio;
const TertiusOrbitLargePlanet = LargePlanetRatio / TertiusOrbitRatio;
const TertiusOrbitMediumPlanet = MediumPlanetRatio / TertiusOrbitRatio;
const TertiusOrbitSmallPlanet = SmallPlanetRatio / TertiusOrbitRatio;
const warningOrbitPlanetsize = warningPlanetRatio / PrimoOrbitRatio;

/* 衛星の恒星比 */
const SateliteStarRatio = 0.07;

/* 衛星軌道の大きさ */
const SateliteOrbitScale = 1.5;

/* 衛星の大きさ */
const SateliteScale = 0.5;
