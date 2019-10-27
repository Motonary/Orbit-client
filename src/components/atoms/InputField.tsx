import styled from "@emotion/styled";
import * as React from "react";

interface InputFieldProps {
  className?: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onBlur: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const InputField: React.SFC<InputFieldProps> = ({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur
}) => (
  <Root className={className}>
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </Root>
);

const Root = styled.div<{ type: string }>`
  width: 320px;
  margin: 10px 20px 10px 5px;
  color: #fff;
  background-color: #0d171f;
  font-family: orator-std, monospace;
  font-style: normal;
  font-weight: 300;

  ${({ type }: { type: string }) => {
    switch (type) {
      case "title":
        return `
        width: 100px !important;
        height: 30px !important;
      `;
      case "description":
        return `
        width: 250px !important;
        height: 40px !important;
      `;
      case "deadline":
        return `
        width: 130px !important;
        height: 30px !important;
      `;
      case "username":
        return `
        margin: 10px auto;
        width: 200px !important;
        height: 20px !important;
      `;
      case "email":
        return `
        margin: 10px auto;
        width: 200px !important;
        height: 20px !important;
      `;
      case "password" || "confirmation":
        return `
        margin: 10px auto;
        width: 200px !important;
        height: 20px !important;
      `;
      default:
        return `
        width: 100px !important;
        height: 30px !important;
      `;
    }
  }}
`;

const Input = styled.input<{ type: string }>`
  ${({ type }: { type: string }) => {
    switch (type) {
      case "title":
        return `
        width: 100px !important;
        height: 30px !important;
      `;
      case "description":
        return `
        width: 250px !important;
        height: 40px !important;
      `;
      case "deadline":
        return `
        width: 130px !important;
        height: 30px !important;
      `;
      case "username":
        return `
        border-radius: 20px;
        text-align: center
        margin: 10px auto;
        width: 200px !important;
        height: 20px !important;
      `;
      case "email":
        return `
        border-radius: 20px;
        text-align: center
        margin: 10px auto;
        width: 200px !important;
        height: 20px !important;
      `;
      case "password" || "confirmation":
        return `
        border-radius: 20px;
        text-align: center
        margin: 10px auto;
        width: 200px !important;
        height: 20px !important;
      `;
      default:
        return `
        width: 100px !important;
        height: 30px !important;
      `;
    }
  }}
`;

export default InputField;
