import { Fragment } from "react";
import styled from "styled-components";

const ProjectSectionWrapperStyle = styled.div`
  padding: 0;
`;

const ProjectSectionWrapper = (props) => {
  return (
    <ProjectSectionWrapperStyle>{props.children}</ProjectSectionWrapperStyle>
  );
};

export default ProjectSectionWrapper;
