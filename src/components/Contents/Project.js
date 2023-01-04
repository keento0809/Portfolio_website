import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";
import LanguageList from "../UI/List/LanguageList";
import LinkIconsList from "../UI/List/LinkIconsList";
import styled from "styled-components";
import useToggleModeContext from "../../hooks/useToggleModeContext";

const ListStyle = styled.li`
  margin-bottom: 24px;
  background-color: #1b1f29;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  border-radius: 8px;
  &.lightMode {
    background-color: #e7edff;
  }
`;

const ProjectTitleStyle = styled.div`
  & h2 {
    font-size: 1.7rem;
  }
`;

const IconsDivStyle = styled.div`
  @media screen and (min-width: 1023px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Project = (props) => {
  const { isLightMode } = useToggleModeContext();
  return (
    <ListStyle className={isLightMode ? "lightMode" : ""}>
      <MyProjectContainer isLightMode={isLightMode}>
        <ProjectTitleStyle className="project-title">
          <h2>{props.projectTitle}</h2>
        </ProjectTitleStyle>
        <ProjectDescription
          summary={props.summary}
          isLightMode={isLightMode}
          points={props.points}
          imageUrl={props.imageUrl}
        />
        <IconsDivStyle>
          <LanguageList languages={props.languages} />
          <LinkIconsList
            isLightMode={isLightMode}
            gitHubUrl={props.gitHubUrl}
            linkUrl={props.linkUrl}
          />
        </IconsDivStyle>
      </MyProjectContainer>
    </ListStyle>
  );
};

export default Project;
