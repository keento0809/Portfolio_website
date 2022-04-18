import { Fragment } from "react";
import styled from "styled-components";
import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";
import LanguageList from "../UI/List/LanguageList";
import LinkIconsList from "../UI/List/LinkIconsList";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";

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
        <Title title="My Project" />
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
