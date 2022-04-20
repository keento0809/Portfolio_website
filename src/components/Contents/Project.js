import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";
import LanguageList from "../UI/List/LanguageList";
import LinkIconsList from "../UI/List/LinkIconsList";
import styled from "styled-components";

const ListStyle = styled.li`
  margin-bottom: 24px;
`;

const Project = (props) => {
  return (
    <ListStyle>
      <MyProjectContainer isLightMode={props.isLightMode}>
        <div className="project-title">
          <h2>{props.projectTitle}</h2>
        </div>
        <ProjectDescription
          summary={props.summary}
          isLightMode={props.isLightMode}
          points={props.points}
        />
        <div className="project-image">
          <img src={props.imageUrl} alt="" />
        </div>
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
