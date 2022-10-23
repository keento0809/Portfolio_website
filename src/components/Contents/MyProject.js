import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";
import Project from "./Project";
import {
  doctorAppointmentPointsArr,
  shoppingListMernPointsArr,
  studyLogPointsArr,
  pokeAppPointsArr,
  countryBeenPointsArr,
  freshMarchePointsArr,
  reduxTodoPointsArr,
  my2048PointsArr,
  portfolioWebsitePointsArr,
  doctorAppointmentToolsArr,
  ShoppingListMernToolsArr,
  studyLogToolsArr,
  pokeAppToolsArr,
  countryBeenToolsArr,
  freshMarcheToolsArr,
  reduxTodoToolsArr,
  my2048ToolsArr,
  portfolioWebsiteToolsArr,
  spotifyReplicaToolsArr,
  spotifyReplicaPointsArr,
} from "../../data/data";
import doctorAppointmentImageUrl from "../../assets/images/doctor-appintment-lp.png";
import shoppingListImageUrl from "../../assets/images/shoppingList-mern-lp.png";
import studyLogImageUrl from "../../assets/images/studylog-lp.png";
import pokeAppImageUrl from "../../assets/images/pokeApp-lp-revised.png";
import countryBeenImageUrl from "../../assets/images/countryBeen-lp-revised.png";
import freshMarcheImageUrl from "../../assets/images/freshMarche-lp.png";
import reduxTodoImageUrl from "../../assets/images/reduxTodo-lp.png";
import my2048ImageUrl from "../../assets/images/my2048-lp.png";
import portfolioImageUrl from "../../assets/images/portfolio-website-lp-revised.png";
import spotifyReplicaUrl from "../../assets/images/spotify-replica-lp.png";
import useToggleModeContext from "../../hooks/useToggleModeContext";

const MyProject = () => {
  return (
    <div id="myproject">
      <ContentWrapper>
        <section className="myProject section">
          <Title title="Project" />
          <ul>
            <Project
              projectTitle={"ShoppingList-Mern-App"}
              summary={
                "The shopping list application built by MERN stack tools."
              }
              points={shoppingListMernPointsArr}
              languages={ShoppingListMernToolsArr}
              gitHubUrl={"shoppingList-mern-app"}
              linkUrl={"https://shopping-list-mern-app.vercel.app/"}
              imageUrl={`${shoppingListImageUrl}`}
            />
            <Project
              projectTitle={"StudyLog"}
              summary={
                "A simple web application that records the data about the daily study histories of users."
              }
              points={studyLogPointsArr}
              languages={studyLogToolsArr}
              gitHubUrl={"studylog"}
              linkUrl={"https://studylog-three.vercel.app/"}
              imageUrl={`${studyLogImageUrl}`}
            />
            <Project
              projectTitle={"CountryBeen"}
              summary={
                "The web application recording countries where you've ever been to and analyze them visually."
              }
              points={countryBeenPointsArr}
              languages={countryBeenToolsArr}
              gitHubUrl={"CountryBeen"}
              linkUrl={"https://country-been.vercel.app/"}
              imageUrl={`${countryBeenImageUrl}`}
            />
            <Project
              projectTitle={"Doctor Appointment"}
              summary={
                "A group project booking doctor appointments easily with CRUD operation and authentication both users and doctors"
              }
              points={doctorAppointmentPointsArr}
              languages={doctorAppointmentToolsArr}
              gitHubUrl={"https://github.com/kubilaycakmak/doctor-appointment"}
              linkUrl={"https://easydoctorappointment.netlify.app/"}
              imageUrl={`${doctorAppointmentImageUrl}`}
            />
            <Project
              projectTitle={"FreshMarche"}
              summary={
                "The E-commerce application for fresh groceries, including authentication form and dummy checkout section."
              }
              points={freshMarchePointsArr}
              languages={freshMarcheToolsArr}
              gitHubUrl={"freshmarche"}
              linkUrl={"https://freshmarche.vercel.app/home"}
              imageUrl={`${freshMarcheImageUrl}`}
            />
            <Project
              projectTitle={"PokeApp"}
              summary={
                "The simple web application introducing Poke REST API discovering your favorite pokemon."
              }
              points={pokeAppPointsArr}
              languages={pokeAppToolsArr}
              gitHubUrl={"poke-app"}
              linkUrl={"https://poke-app-three-mu.vercel.app/"}
              imageUrl={`${pokeAppImageUrl}`}
            />
            <Project
              projectTitle={"ReduxTodo"}
              summary={
                "A simple Todo list to manage your task, using React, React-Redux (Redux-toolkit)."
              }
              points={reduxTodoPointsArr}
              languages={reduxTodoToolsArr}
              gitHubUrl={"ReduxTodo"}
              linkUrl={"https://redux-todo-kappa.vercel.app/"}
              imageUrl={`${reduxTodoImageUrl}`}
            />
            {/* <Project
              projectTitle={"My2048"}
              summary={
                "The reproduction of 2048 game with my own styling (tailwind-css) and some additional features."
              }
              points={my2048PointsArr}
              languages={my2048ToolsArr}
              gitHubUrl={"my2048"}
              linkUrl={"https://my2048-keento0809.netlify.app/"}
              imageUrl={`${my2048ImageUrl}`}
            /> */}
            <Project
              projectTitle={"Portfolio website"}
              summary={
                "Simple but user-friendly portfolio website created by react.js and styled-components."
              }
              points={portfolioWebsitePointsArr}
              languages={portfolioWebsiteToolsArr}
              gitHubUrl={"Portfolio_website"}
              linkUrl={"https://portfolio-website-zeta-five.vercel.app/"}
              imageUrl={`${portfolioImageUrl}`}
            />
            <Project
              projectTitle={"Spotify Replica(Landing Page)"}
              summary={
                "Simple but user-friendly portfolio website created by react.js and styled-components."
              }
              points={spotifyReplicaPointsArr}
              languages={spotifyReplicaToolsArr}
              gitHubUrl={"Spotify_replica"}
              linkUrl={"https://keento0809.github.io/Spotify_replica/"}
              imageUrl={`${spotifyReplicaUrl}`}
            />
          </ul>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default MyProject;
