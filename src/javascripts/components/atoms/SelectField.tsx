import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  className?: string;
  name: string;
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<Props> = ({
  className,
  name,
  value,
  onChange,
  onBlur
}) => {
  return (
    <Root className={className}>
      <select name={name} value={value} onChange={onChange} onBlur={onBlur}>
        <option value="">SIZE</option>
        <option value="large">large</option>
        <option value="medium">medium</option>
        <option value="small">small</option>
      </select>
    </Root>
  );
};

const Root = styled.div`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #0d171f;
  font-size: 12px;
  color: #fff;
`;

export default SelectField;
