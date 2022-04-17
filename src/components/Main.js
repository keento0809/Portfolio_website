import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import ContainerWrapper from "./UI/Wrapper/ContainerWrapper";
import Loader from "../layouts/Loader";
import TopHero from "./Contents/TopHero";
import AboutMe from "./Contents/AboutMe";
import MyProject from "./Contents/MyProject";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2880);
  }, []);

  return (
    <Fragment>
      {isLoading && <Loader />}
      <Header />
      <ContainerWrapper>
        <TopHero />
        <AboutMe />
        <MyProject />
      </ContainerWrapper>
    </Fragment>
  );
};

export default Main;
