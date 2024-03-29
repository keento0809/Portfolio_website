import { useEffect } from "react";
import Header from "../components/templates/Header";
import ContainerWrapper from "../components/Wrapper/ContainerWrapper";
import TopHero from "../features/TopHero";
import AboutMe from "../features/AboutMe";
import Projects from "../features/Projects";
import ContactMe from "../features/ContactMe";
import Footer from "../components/templates/Footer";
import BackToTopButton from "../components/Button/BackToTopButton";
import classes from "../styles/base.module.css";
import useToggleModeContext from "../hooks/useToggleModeContext";
import useChangeLayoutContext from "../hooks/useChangeLayoutContext";

const Main = () => {
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
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isScrollingDown]);

  return (
    <div
      className={`${classes.global} ${isLightMode ? classes.lightMode : ""} ${
        classes.testingOpacity
      } ${isAsideShown ? classes.asideOpen : ""}`}
    >
      <Header />
      <ContainerWrapper>
        <TopHero />
        <Projects />
        <AboutMe />
        <ContactMe />
        <Footer />
        <BackToTopButton />
      </ContainerWrapper>
    </div>
  );
};

export default Main;
