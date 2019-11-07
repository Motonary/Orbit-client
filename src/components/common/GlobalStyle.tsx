import { css, Global } from "@emotion/core";
import * as React from "react";

import { Background } from "../../constants/ImagesUrl";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

const globalStyle = css`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #0d1935 url(${Background}) no-repeat center center;
    background-size: cover;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #stars {
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0px;
    left: 0px;
    background: transparent;
    z-index: -2000;

    #stars3 {
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: $shadows-big;
      animation: animStar 8s ease-in-out;

      &:after {
        content: " ";
        position: absolute;
        top: 100px;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: $shadows-big;
      }
    }
  }

  input {
    display: block;
    width: 100px;
    text-align: left;
    border: none;
    border-bottom: solid 1px #ddd;
    color: #fff;
    background-color: $bg-common-color;
    padding: 0 5px;

    &::placeholder {
      font-size: 13px;
      font-family: orator-std, monospace;
      font-weight: lighter;
      letter-spacing: 4px;
      color: #fff;
    }
    // IE
    &:-ms-input-placeholder {
      font-size: 14px;
      font-family: orator-std, monospace;
      font-weight: lighter;
      letter-spacing: 4px;
      color: #fff;
    }

    // Edge
    &::-ms-input-placeholder {
      font-size: 14px;
      font-family: orator-std, monospace;
      font-weight: lighter;
      letter-spacing: 4px;
      color: #fff;
    }

    //mozila
    &::-moz-placeholder {
      font-size: 14px;
      font-family: orator-std, monospace;
      font-weight: lighter;
      letter-spacing: 4px;
      color: #fff;
    }
  }

  @keyframes animStar {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(1000px, 200px);
    }
  }
`;

export default GlobalStyle;
