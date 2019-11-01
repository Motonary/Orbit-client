import { keyframes } from "@emotion/core";

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const shiver = keyframes`
  0% {transform: translate(0px, 0px) rotateZ(0deg)}
  25% {transform: translate(2px, 2px) rotateZ(1deg)}
  50% {transform: translate(0px, 2px) rotateZ(0deg)}
  75% {transform: translate(2px, 0px) rotateZ(-1deg)}
  100% {transform: translate(0px, 0px) rotateZ(0deg)}
`;
