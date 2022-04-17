import { Fragment } from "react";
import styled from "styled-components";

const ProjectDescriptionWrapperStyle = styled.div`
  padding: 20px 0;
`;

const ProjectSectionWrapper = (props) => {
  return (
    <ProjectDescriptionWrapperStyle>
      {props.children}
    </ProjectDescriptionWrapperStyle>
  );
};

export default ProjectSectionWrapper;
