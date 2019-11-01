import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import ConfirmBtn from "../atoms/buttons/confirm-btn";

storiesOf("Atoms/ConfirmBtn", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const message = text("message", "message");

    return <ConfirmBtn message={message} onClick={action} />;
  });
