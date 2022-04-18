import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const LiStyle = styled.li`
  display: inline-block;
  padding: 0.6rem 1.7rem;
  margin: 0.4rem;
  border: 1px solid #8bfdfe;
  border-radius: 8px;
`;

const SpecialtyListTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & ion-icon {
    padding-right: 0.5rem;
  }
`;

const SpecialtyList = (props) => {
  // test
  const list = props.specialties.map((skill, index) => (
    <LiStyle key={index}>{skill.name}</LiStyle>
  ));

  return (
    <ProjectSectionWrapper className="">
      <SpecialtyListTitleStyle className="">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <h3>{props.title}</h3>
      </SpecialtyListTitleStyle>
      <ul>{list}</ul>
    </ProjectSectionWrapper>
  );
};

export default SpecialtyList;
