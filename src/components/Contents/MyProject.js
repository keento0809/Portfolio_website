import { Fragment } from "react";
import styled from "styled-components";
import MyProjectContainer from "../UI/Container/MyProjectContainer";
import ProjectDescription from "../UI/Description/ProjectDescription";
import LanguageList from "../UI/List/LanguageList";
import LinkIconsList from "../UI/List/LinkIconsList";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";

const ListStyle = styled.li`
  margin-bottom: 24px;
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
                <h2>FreshMarche</h2>
              </div>
              <ProjectDescription
                summary="The E-commerce application for fresh groceries, including authentication form and dummy checkout section."
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
                <h2>ReduxTodo</h2>
              </div>
              <ProjectDescription
                summary="A simple Todo list to manage your task, using React, React-Redux (Redux-toolkit)."
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
                <h2>My2048</h2>
              </div>
              <ProjectDescription
                summary="The reproduction of 2048 (game) with my own styling and some additional features."
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
