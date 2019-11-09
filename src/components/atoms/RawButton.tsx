import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  className?: string;
  children?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  type?: "button" | "reset" | "submit";
}

const RawButton: React.FC<Props> = ({
  className,
  children,
  disabled,
  onClick,
  type
}) => (
  <Root
    className={className}
    disabled={disabled}
    onClick={() => onClick}
    type={type}
  >
    {children}
  </Root>
);

const Root = styled.button``;

export default RawButton;
