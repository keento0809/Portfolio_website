import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import ContainerWrapper from "./UI/Wrapper/ContainerWrapper";
import Loader from "../layouts/Loader";
import TopHero from "./Contents/TopHero";
import AboutMe from "./Contents/AboutMe";
import MyProject from "./Contents/MyProject";
import ContactMe from "./Contents/ContactMe";
import Footer from "../layouts/Footer";
import classes from "../styles/base.module.css";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAsideShown, setIsAsideShown] = useState(false);

  let lastScrollY;
  let timeout;

  function handleScroll() {
    if (timeout) return;

    timeout = setTimeout(() => {
      timeout = 0;
      let currentScrollY = window.scrollY;
      console.log(currentScrollY);

      if (currentScrollY === 0) setIsScrollingDown(false);
      if (currentScrollY > lastScrollY) {
        console.log("Scrolling down !!");
        // original
        // setIsScrollingDown(!isScrollingDown);
        setIsScrollingDown(true);
      }
      if (currentScrollY < lastScrollY) {
        console.log("Scrolling Up !!");
        // original
        // setIsScrollingDown(!isScrollingDown);
        setIsScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    }, 800);
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2880);
  }, []);

  useEffect(() => {
    // original code
    window.addEventListener("scroll", handleScroll);
  }, [isScrollingDown]);

  return (
    <div
      className={`${classes.global} ${isLightMode ? classes.lightMode : ""}`}
    >
      {isLoading && <Loader />}
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        isScrollingDown={isScrollingDown}
        isAsideShown={isAsideShown}
        setIsAsideShown={setIsAsideShown}
      />
      <ContainerWrapper isAsideShown={isAsideShown}>
        <TopHero />
        <AboutMe isLightMode={isLightMode} />
        <MyProject isLightMode={isLightMode} />
        <ContactMe isLightMode={isLightMode} />
        <Footer isLightMode={isLightMode} />
      </ContainerWrapper>
    </div>
  );
};

export default Main;
