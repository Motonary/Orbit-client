import styled from "@emotion/styled";
import * as React from "react";

import Planet from "./Planet";
import PopupBox from "../atoms/PopupBox";

interface StoredPlanetListProps {
  selectedAssignments: any;

  destroyedAssignments: any;
}

class StoredPlanetList extends React.Component<StoredPlanetListProps, {}> {
  renderList() {
    const contentList: any = [];
    const { destroyedAssignments } = this.props;

    function renderPlanetDays(dayDestroyedAssignments: any) {
      dayDestroyedAssignments.forEach((assignment: any) => {
        contentList.push(
          <StoredPlanetContainer
            key={assignment.id}
            id={`planet-${assignment.id}-${assignment.planet_type}`}
          >
            <PopupBox data={assignment} isProject={false} />
            <StoredPlanet planetType={assignment.planet_type} />
          </StoredPlanetContainer>
        );
      });
    }

    function renderPlanetYears(yearDestroyedAssignments: any) {
      const days: any = Object.keys(yearDestroyedAssignments); //
      days.forEach((day: any) => {
        contentList.push(
          <Date>
            <Day>{day}</Day>
          </Date>
        );
        renderPlanetDays(yearDestroyedAssignments[day]);
      });
    }

    function renderStoredPlanetList() {
      if (!destroyedAssignments) return;
      const years: any = Object.keys(destroyedAssignments); //
      years.forEach((year: any) => {
        contentList.push(
          <Date>
            <Year>{year}</Year>
          </Date>
        );
        renderPlanetYears(destroyedAssignments[year]);
      });
    }

    // ゴリ押しアルゴリズム
    function iterator(collection: any, howMany: number) {
      let count = 0;
      function next() {
        let index = howMany * count;
        let result = collection.slice(index, index + howMany);
        count += 1;
        return result;
      }
      function hasNext() {
        let index = howMany * count;
        return collection.slice(index, index + howMany).length > 0;
      }
      return { next: next, hasNext: hasNext };
    }

    renderStoredPlanetList();

    const itered = iterator(contentList, 6);
    const result: any = [];
    let count: number = 0;
    while (itered.hasNext()) {
      if (count % 2 === 0) {
        itered.next().forEach((assignment: any) => {
          result.push(assignment);
        });
      } else {
        let tmpList = itered.next().reverse();
        tmpList.forEach((assignment: any) => {
          result.push(assignment);
        });
      }
      count += 1;
    }

    return result;
  }

  render() {
    const { destroyedAssignments } = this.props;
    if (!destroyedAssignments) return <div>Loading....</div>;
    if (Object.keys(destroyedAssignments).length === 0) return <div />;

    const contentList = this.renderList();

    return (
      <Root>
        {contentList.forEach((content: any) => {
          return content;
        })}
      </Root>
    );
  }
}

const Root = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  color: #fff;

  position: absolute;
  top: 30px;
  left: 80px;

  max-width: 1000px;
  width: 900px;
  height: 600px;
  margin: 20px auto;
  padding: 100px;
  z-index: 200;
  overflow-y: scroll;
`;

const StoredPlanetContainer = styled.div`
  position: relative;
  display: block;
  width: 80px;
  height: 80px;
  margin: 10px 30px;
  border-radius: 50%;
  text-align: center;
`;

const StoredPlanet = styled(Planet)`
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
  }
`;

const Date = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  margin: 10px 30px;
  border-radius: 50%;
  text-align: center;
`;

const Year = styled.div`
  width: 70px;
  height: 70px;
  margin: 5px;
  padding: 0;
  line-height: 70px;
  font-size: 16px;
  border: solid 1px #fff;
  border-radius: 50%;
  background-color: #0d171f;

  &:nth-child(2n + 1) {
    align-content: flex-start;
  }

  &:nth-child(2n) {
    align-content: flex-end;
  }
`;

const Day = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px;
  padding: 0;
  line-height: 60px;
  border: solid 1px #fff;
  border-radius: 50%;
  background-color: #0d171f;
`;

export default StoredPlanetList;
