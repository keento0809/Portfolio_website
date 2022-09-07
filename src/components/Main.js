import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import ContainerWrapper from "./UI/Wrapper/ContainerWrapper";
import Loader from "../layouts/Loader";
import TopHero from "./Contents/TopHero";
import AboutMe from "./Contents/AboutMe";
import MyProject from "./Contents/MyProject";
import ContactMe from "./Contents/ContactMe";
import Footer from "../layouts/Footer";
import BackToTopButton from "./UI/Button/BackToTopButton";
import classes from "../styles/base.module.css";
import useToggleModeContext from "../hooks/useToggleModeContext";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAsideShown, setIsAsideShown] = useState(false);
  const [isTopBtnActive, setIsTopBtnActive] = useState(false);

  const { isLightMode, setIsLightMode } = useToggleModeContext();

  let lastScrollY;
  let timeout;

  function handleScroll() {
    if (timeout) return;

    timeout = setTimeout(() => {
      timeout = 0;
      let currentScrollY = window.scrollY;

      if (window.innerWidth > 1023 && currentScrollY > 900) {
        if (!isTopBtnActive) setIsTopBtnActive(true);
      } else setIsTopBtnActive(false);

      if (currentScrollY === 0) setIsScrollingDown(false);
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      }
      if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    }, 800);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3280);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isScrollingDown]);

  return (
    <div
      className={`${classes.global} ${isLightMode ? classes.lightMode : ""} ${
        !isLoading && classes.testingOpacity
      } ${isAsideShown ? classes.asideOpen : ""}`}
    >
      {isLoading && <Loader />}
      <Header
        isScrollingDown={isScrollingDown}
        setIsScrollingDown={setIsScrollingDown}
        isAsideShown={isAsideShown}
        setIsAsideShown={setIsAsideShown}
      />
      <ContainerWrapper
        isAsideShown={isAsideShown}
        setIsAsideShown={setIsAsideShown}
      >
        <TopHero isLightMode={isLightMode} />
        <MyProject isLightMode={isLightMode} />
        <AboutMe isLightMode={isLightMode} />
        <ContactMe isLightMode={isLightMode} />
        <Footer isLightMode={isLightMode} />
        <BackToTopButton
          isLightMode={isLightMode}
          isTopBtnActive={isTopBtnActive}
        />
      </ContainerWrapper>
    </div>
  );
};

export default Main;
