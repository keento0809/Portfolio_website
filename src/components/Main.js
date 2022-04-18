import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import ContainerWrapper from "./UI/Wrapper/ContainerWrapper";
import Loader from "../layouts/Loader";
import TopHero from "./Contents/TopHero";
import AboutMe from "./Contents/AboutMe";
import MyProject from "./Contents/MyProject";
import ContactMe from "./Contents/ContactMe";
import classes from "../styles/base.module.css";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2880);
  }, []);

  return (
    <div
      className={`${classes.global} ${isLightMode ? classes.lightMode : ""}`}
    >
      {isLoading && <Loader />}
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <ContainerWrapper>
        <TopHero />
        <AboutMe />
        <MyProject />
        <ContactMe />
      </ContainerWrapper>
    </div>
  );
};

export default Main;
