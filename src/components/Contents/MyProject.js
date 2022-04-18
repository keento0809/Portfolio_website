import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";
import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";
import LanguageList from "../UI/List/LanguageList";
import LinkIconsList from "../UI/List/LinkIconsList";
import ContainerWrapper from "../UI/Wrapper/ContainerWrapper";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";

const ListStyle = styled.li`
  margin-bottom: 16px;
`;

const dummyPointsArr = [
  { text: "Great UI" },
  { text: "Great UX" },
  { text: "Great Feature" },
  { text: "Great something" },
];

const dummyLanguagesArr = [
  { name: "javascript" },
  { name: "react", type: "original" },
  { name: "firebase" },
  { name: "materialui" },
];

const MyProject = () => {
  return (
    <ContentWrapper>
      <section id="myproject" className="myProject section">
        <h4 className={`${classes.flux} section-title`}>My Projects</h4>
        <ul>
          <ListStyle>
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <ProjectDescription
                summary="Description Summary is here."
                points={dummyPointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={dummyLanguagesArr} />
              <LinkIconsList
                gitHubUrl="freshmarche"
                linkUrl="https://devicon.dev/"
              />
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <ProjectDescription
                summary="Description Summary is here."
                points={dummyPointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={dummyLanguagesArr} />
              <LinkIconsList
                gitHubUrl="freshmarche"
                linkUrl="https://devicon.dev/"
              />
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer>
              <div className="project-title">
                <h3>FreshMarche</h3>
              </div>
              <ProjectDescription
                summary="Description Summary is here."
                points={dummyPointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={dummyLanguagesArr} />
              <LinkIconsList
                gitHubUrl="freshmarche"
                linkUrl="https://devicon.dev/"
              />
            </MyProjectContainer>
          </ListStyle>
        </ul>
      </section>
    </ContentWrapper>
  );
};

export default MyProject;
