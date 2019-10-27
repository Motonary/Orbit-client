import styled from "@emotion/styled";
import * as React from "react";

interface PopupProjectCardProps {
  project: any;
}

const PopupProjectCard: React.SFC<PopupProjectCardProps> = ({
  project
}: any) => {
  const { title, description }: any = project;

  return (
    <Root>
      <Title>{title}</Title>
      <Title>{description}</Title>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  color: #fff;
`;

const Title = styled.div`
  margin: 0;
  width: 300px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
`;

export default PopupProjectCard;
