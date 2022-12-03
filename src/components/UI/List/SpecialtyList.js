import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const LiStyle = styled.li`
  display: inline-block;
  padding: 0.6rem 1.5rem;
  margin: 0.4rem;
  border: 1px solid #8bfdfe;
  border-radius: 8px;

  &.lightMode {
    border-color: #19224e;
  }
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

const SpecialtyList = ({ specialties, isLightMode, title }) => {
  const list =
    specialties &&
    specialties.map((skill, index) => (
      <LiStyle className={isLightMode ? "lightMode" : ""} key={index}>
        {skill.name}
      </LiStyle>
    ));

  return (
    <ProjectSectionWrapper className="">
      <SpecialtyListTitleStyle className="">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <h3>{title}</h3>
      </SpecialtyListTitleStyle>
      <ul>{list}</ul>
    </ProjectSectionWrapper>
  );
};

export default SpecialtyList;
