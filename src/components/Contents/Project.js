import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";
import LanguageList from "../UI/List/LanguageList";
import LinkIconsList from "../UI/List/LinkIconsList";
import styled from "styled-components";

const ListStyle = styled.li`
  margin-bottom: 24px;
  /* min-height: 900px; */
  background-color: #1b1f29;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  border-radius: 8px;

  &.lightMode {
    background-color: #e7edff;
  }

  @media screen and (min-width: 768px) {
    /* min-height: 800px; */
  }
`;

const ProjectTitleStyle = styled.div`
  & h2 {
    font-size: 1.7rem;
  }
`;

const Project = (props) => {
  return (
    <ListStyle className={props.isLightMode ? "lightMode" : ""}>
      <MyProjectContainer isLightMode={props.isLightMode}>
        <ProjectTitleStyle className="project-title">
          <h2>{props.projectTitle}</h2>
        </ProjectTitleStyle>
        <ProjectDescription
          summary={props.summary}
          isLightMode={props.isLightMode}
          points={props.points}
          imageUrl={props.imageUrl}
        />
        <LanguageList languages={props.languages} />
        <LinkIconsList
          isLightMode={props.isLightMode}
          gitHubUrl={props.gitHubUrl}
          linkUrl={props.linkUrl}
        />
      </MyProjectContainer>
    </ListStyle>
  );
};

export default Project;
