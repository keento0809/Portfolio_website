import { useState, useEffect } from "react";
import Header from "./templates/Header";
import ContainerWrapper from "./Wrapper/ContainerWrapper";
import Loader from "./templates/Loader";
import TopHero from "../Contents/TopHero";
import AboutMe from "../Contents/AboutMe";
import MyProject from "../Contents/MyProject";
import ContactMe from "../Contents/ContactMe";
import Footer from "./templates/Footer";
import BackToTopButton from "./Button/BackToTopButton";
import classes from "../styles/base.module.css";
import useToggleModeContext from "../hooks/useToggleModeContext";
import useChangeLayoutContext from "../hooks/useChangeLayoutContext";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLightMode } = useToggleModeContext();
  const {
    isScrollingDown,
    setIsScrollingDown,
    isAsideShown,
    isTopBtnActive,
    setIsTopBtnActive,
  } = useChangeLayoutContext();

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
      <Header />
      <ContainerWrapper>
        <TopHero />
        <MyProject />
        <AboutMe />
        <ContactMe />
        <Footer />
        <BackToTopButton />
      </ContainerWrapper>
    </div>
  );
};

export default Main;
