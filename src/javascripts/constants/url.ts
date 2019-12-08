export const ROOT_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.the-orbit-app.com"
    : "http://localhost:3000";

const CLOUD_FRONT_PROD_ROOT = "https://d111fnfgjqj6t5.cloudfront.net";
export const CLOUD_FRONT_ASSETS_ROOT = `${CLOUD_FRONT_PROD_ROOT}/assets_for_orbit_system`;
