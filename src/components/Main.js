import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import Loader from "../layouts/Loader";
import TopHero from "./Contents/TopHero";
import AboutMe from "./Contents/AboutMe";

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
      <TopHero />
      <AboutMe />
    </Fragment>
  );
};

export default Main;
