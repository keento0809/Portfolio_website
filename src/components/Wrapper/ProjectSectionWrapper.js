import styled from "styled-components";

const ProjectSectionWrapperStyle = styled.div`
  padding: 0;
  padding: 0.5rem 0;
`;

const ProjectSectionWrapper = (props) => {
  return (
    <ProjectSectionWrapperStyle>{props.children}</ProjectSectionWrapperStyle>
  );
};

export default ProjectSectionWrapper;
