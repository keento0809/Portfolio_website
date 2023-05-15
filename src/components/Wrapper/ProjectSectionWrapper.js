import styled from "styled-components";

const ProjectWrapperStyle = styled.div`
  padding: 0;
  padding: 0.5rem 0;
`;

const ProjectWrapper = (props) => {
  return <ProjectWrapperStyle>{props.children}</ProjectWrapperStyle>;
};

export default ProjectWrapper;
