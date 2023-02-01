import { Fragment } from "react";
import styled from "styled-components";

const ProjectSectionWrapperStyle = styled.div`
  padding: 0;
  // test
  padding: 0.5rem 0;
`;

const ProjectSectionWrapper = (props) => {
  return (
    <ProjectSectionWrapperStyle>{props.children}</ProjectSectionWrapperStyle>
  );
};

export default ProjectSectionWrapper;
