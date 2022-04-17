import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const ProjectDescription = (props) => {
  const pointsList = props.points.map((point, index) => {
    return (
      <li key={index}>
        <ion-icon name="checkmark-outline"></ion-icon>A: {point.text}
      </li>
    );
  });

  return (
    <ProjectSectionWrapper>
      <div className="MyProjectDescription-summary">
        <p>{props.summary}</p>
      </div>
      <div className="MyProjectDescription-body">
        <ul>{pointsList}</ul>
      </div>
    </ProjectSectionWrapper>
  );
};

export default ProjectDescription;
