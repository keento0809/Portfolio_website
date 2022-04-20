import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";
import Project from "./Project";
import {
  dummyPointsArr,
  freshMarchePointsArr,
  reduxTodoPointsArr,
  my2048PointsArr,
  portfolioWebsitePointsArr,
  freshMarcheToolsArr,
  reduxTodoToolsArr,
  my2048ToolsArr,
  portfolioWebsiteToolsArr,
  spotifyReplicaToolsArr,
} from "../../data/data";

const MyProject = (props) => {
  return (
    <div id="myproject">
      <ContentWrapper>
        <section className="myProject section">
          <Title title="Project" />
          <ul>
            <Project
              isLightMode={props.isLightMode}
              projectTitle={"FreshMarche"}
              summary={
                "The E-commerce application for fresh groceries, including authentication form and dummy checkout section."
              }
              points={freshMarchePointsArr}
              languages={freshMarcheToolsArr}
              gitHubUrl={"freshmarche"}
              linkUrl={"https://devicon.dev/"}
            />
            <Project
              isLightMode={props.isLightMode}
              projectTitle={"ReduxTodo"}
              summary={
                "A simple Todo list to manage your task, using React, React-Redux (Redux-toolkit)."
              }
              points={reduxTodoPointsArr}
              languages={reduxTodoToolsArr}
              gitHubUrl={"ReduxTodo"}
              linkUrl={"https://redux-todo-i9cko6vjw-keento0809.vercel.app/"}
            />
            <Project
              isLightMode={props.isLightMode}
              projectTitle={"My2048"}
              summary={
                "The reproduction of 2048 game with my own styling (tailwind-css) and some additional features."
              }
              points={my2048PointsArr}
              languages={my2048ToolsArr}
              gitHubUrl={"my2048"}
              linkUrl={"https://my2048-keento0809.netlify.app/"}
            />
            <Project
              isLightMode={props.isLightMode}
              projectTitle={"Portfolio website"}
              summary={
                "Simple but user-friendly portfolio website created by react.js and styled-components."
              }
              points={portfolioWebsitePointsArr}
              languages={portfolioWebsiteToolsArr}
              gitHubUrl={"Portfolio_website"}
              linkUrl={
                "https://portfolio-website-9mtqqzzg9-keento0809.vercel.app/"
              }
            />
            <Project
              isLightMode={props.isLightMode}
              projectTitle={"Spotify Replica(Landing Page)"}
              summary={
                "Simple but user-friendly portfolio website created by react.js and styled-components."
              }
              points={dummyPointsArr}
              languages={spotifyReplicaToolsArr}
              gitHubUrl={"Spotify_replica"}
              linkUrl={"https://keento0809.github.io/Spotify_replica/"}
            />
          </ul>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default MyProject;
