import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const ProjectSummaryWrapper = styled.div`
  padding-bottom: 2rem;
`;

const LiStyle = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.5rem;

  & ion-icon {
    padding-right: 0.5rem;
  }

  & span {
    font-size: 20px;
  }
`;

const ProjectDescription = (props) => {
  const pointsList = props.points.map((point, index) => {
    return (
      <LiStyle key={index}>
        <ion-icon name="checkmark-outline"></ion-icon>
        <span>{point.text}</span>
      </LiStyle>
    );
  });

  return (
    <ProjectSectionWrapper>
      <div className="">
        <ProjectSummaryWrapper className="MyProjectDescription-summary">
          <p>{props.summary}</p>
        </ProjectSummaryWrapper>
        <div className="MyProjectDescription-body">
          <ul>{pointsList}</ul>
        </div>
      </div>
    </ProjectSectionWrapper>
  );
};

export default ProjectDescription;
