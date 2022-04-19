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

const freshMarchePointsArr = [
  { text: "Including the basic CRUD operations" },
  { text: "React's ContextAPI to manage app-wide states" },
  { text: "Authentications with Firebase Auth REST API" },
  { text: "Dummy checkout feature with stripe checkout-form" },
];

const reduxTodoPointsArr = [
  { text: "Good-looking design with Material-UI" },
  { text: "CRUD functions operated by Redux-toolkit " },
];

const my2048PointsArr = [
  { text: "Created by Vanilla Javascript only, no JS plugins" },
  { text: "Sophisticated styling powered by Tailwind-css" },
  { text: "Enable to switch lightMode and DarkMode" },
  { text: "Adopting YouTube Player API as adding BGM" },
];

const portfolioWebsitePointsArr = [
  { text: "Optimize components to minimize workloads" },
  { text: "Designed by styled-components, no css-frameworks" },
  { text: "Enable to switch lightMode and DarkMode" },
];

const freshMarcheToolsArr = [
  { name: "javascript" },
  { name: "react", type: "original" },
  { name: "firebase" },
  { name: "materialui" },
];

const reduxTodoToolsArr = [
  { name: "react", type: "original" },
  { name: "redux" },
  { name: "materialui" },
];

const my2048ToolsArr = [{ name: "javascript" }, { name: "tailwindcss" }];

const portfolioWebsiteToolsArr = [
  { name: "react", type: "original" },
  { name: "css3" },
];

const MyProject = (props) => {
  return (
    <ContentWrapper>
      <section id="myproject" className="myProject section">
        <Title title="My Project" />
        <ul>
          <ListStyle>
            <MyProjectContainer isLightMode={props.isLightMode}>
              <div className="project-title">
                <h2>FreshMarche</h2>
              </div>
              <ProjectDescription
                summary="The E-commerce application for fresh groceries, including authentication form and dummy checkout section."
                points={freshMarchePointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={freshMarcheToolsArr} />
              <LinkIconsList
                isLightMode={props.isLightMode}
                gitHubUrl="freshmarche"
                linkUrl="https://devicon.dev/"
              />
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer isLightMode={props.isLightMode}>
              <div className="project-title">
                <h2>ReduxTodo</h2>
              </div>
              <ProjectDescription
                summary="A simple Todo list to manage your task, using React, React-Redux (Redux-toolkit)."
                isLightMode={props.isLightMode}
                points={reduxTodoPointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={reduxTodoToolsArr} />
              <LinkIconsList
                isLightMode={props.isLightMode}
                gitHubUrl="ReduxTodo"
                linkUrl="https://redux-todo-i9cko6vjw-keento0809.vercel.app/"
              />
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer isLightMode={props.isLightMode}>
              <div className="project-title">
                <h2>My2048</h2>
              </div>
              <ProjectDescription
                summary="The reproduction of 2048 game with my own styling (tailwind-css) and some additional features."
                isLightMode={props.isLightMode}
                points={my2048PointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={my2048ToolsArr} />
              <LinkIconsList
                isLightMode={props.isLightMode}
                gitHubUrl="my2048"
                linkUrl="https://my2048-keento0809.netlify.app/"
              />
            </MyProjectContainer>
          </ListStyle>
          <ListStyle>
            <MyProjectContainer isLightMode={props.isLightMode}>
              <div className="project-title">
                <h2>Portfolio website</h2>
              </div>
              <ProjectDescription
                summary="Simple but user-friendly portfolio website created by react.js and styled-components."
                isLightMode={props.isLightMode}
                points={portfolioWebsitePointsArr}
              />
              <div className="project-image">
                <img src="" alt="" />
              </div>
              <LanguageList languages={portfolioWebsiteToolsArr} />
              <LinkIconsList
                isLightMode={props.isLightMode}
                gitHubUrl="Portfolio_website"
                linkUrl="https://portfolio-website-9mtqqzzg9-keento0809.vercel.app/"
              />
            </MyProjectContainer>
          </ListStyle>
        </ul>
      </section>
    </ContentWrapper>
  );
};

export default MyProject;
