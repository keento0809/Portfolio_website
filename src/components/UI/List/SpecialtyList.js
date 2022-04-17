import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const SpecialtyList = (props) => {
  // test
  const list = props.specialties.map((skill, index) => (
    <li key={index}>{skill.name}</li>
  ));

  return (
    <ProjectSectionWrapper className="">
      <h4>{props.title}</h4>
      <ul>{list}</ul>
    </ProjectSectionWrapper>
  );
};

export default SpecialtyList;
