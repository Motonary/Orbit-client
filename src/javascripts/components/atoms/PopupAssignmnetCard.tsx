import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  assignment: any;
}

const PopupAssignmentCard: React.FC<Props> = ({ assignment }) => {
  if (!assignment) return;

  const deadline: any = assignment.deadline.split("T")[0].split("-");
  const { title, description }: any = assignment;

  return (
    <Root>
      <Title>{title}</Title>
      <Deadline>
        {deadline[0]}年{deadline[1]}月{deadline[2]}日
      </Deadline>
      <Desc>{description}</Desc>
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
  width: 280px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
`;

const Deadline = styled.div`
  margin: 0;
  width: 280px;
  height: 30px;
  line-height: 30px;
  text-align: right;
`;

const Desc = styled.div`
  margin: 2px 0;
  width: 280px;
  height: 70px;
`;

export default PopupAssignmentCard;
