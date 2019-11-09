import * as React from "react";
import ReactDOM from "react-dom";
import Application from "./components/Application";

async function main() {
  const root = document.createElement("div");

  document.body.append(root);

  function render() {
    const renderFunction = 
      root.childElementCount === 0 ? ReactDOM.render : ReactDOM.hydrate;

    renderFunction(React.createElement(Application), root);
  }

  render();
}

document.addEventListener("DOMContentLoaded", main);
