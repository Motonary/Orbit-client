import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  className?: string;
  children?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  type?: string;
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
    onClicke={() => onClick}
    type={type}
  >
    {children}
  </Root>
);

const Root = styled.button``;

export default RawButton;
