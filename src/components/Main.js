import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import ContainerWrapper from "./UI/Wrapper/ContainerWrapper";
import Loader from "../layouts/Loader";
import TopHero from "./Contents/TopHero";
import AboutMe from "./Contents/AboutMe";
import MyProject from "./Contents/MyProject";

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
    <div className={`${isLightMode ? "lightMode" : ""} global-main`}>
      {isLoading && <Loader />}
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <ContainerWrapper>
        <TopHero />
        <AboutMe />
        <MyProject />
      </ContainerWrapper>
    </div>
  );
};

export default Main;
