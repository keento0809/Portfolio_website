import { useEffect, useState } from "react";
import Aside from "./Aside";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import iconUrlDark from "../../assets/images/icon-32x32.png";
import iconUrlLight from "../../assets/images/icon-32x32-light.png";
import "../../styles/navBorder.css";
import useToggleModeContext from "../../hooks/useToggleModeContext";
import { useDataContext } from "../../context/dataContext";
import useContentful from "../../hooks/useContentful";
import useChangeLayoutContext from "../../hooks/useChangeLayoutContext";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 24px;
  height: 80px;
  z-index: 10;
  opacity: 1;
  transform: none;
  transition: all 0.3s ease;
  background-color: #050710;
  &.hidden {
    transform: translateY(-100%);
    transition: all 0.3s ease;
  }
  &.lightMode {
    background-color: #eff3ff;
  }
  @media screen and (min-width: 767px) {
    padding: 0 56px;
  }
`;

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
  height: 80px;
  & .header__nav__left {
    transform: translateX(-100px);
    opacity: 0;
    transition: all 0.6s ease;
    &.leftMove {
      transform: none;
      opacity: 1;
    }
  }
  & .header__nav__logo {
    font-size: 24px;
  }
`;

const HeaderLeftStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  & ion-icon {
    padding-bottom: 1.6px;
    cursor: pointer;
  }
  @media screen and (min-width: 1023px) {
    & ion-icon {
      font-size: 20px;
    }
  }
`;

const LogoStyle = styled.div`
  display: inline-block;
  padding-right: 20px;
  cursor: pointer;
  & a {
    display: block;
  }
  & img {
    display: block;
  }

  @media screen and (min-width: 1023px) {
    & img {
      width: 28px;
      height: 28px;
    }
  }
`;

const MenuButtonStyle = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 20;
  padding-bottom: 2px;
  cursor: pointer;
  transform: translateX(-100px);
  opacity: 0;
  transition: all 0.6s ease;
  &.rightMove {
    transform: none;
    opacity: 1;
  }

  &.lightMode span {
    background-color: #19224e;
  }

  & span {
    text-align: right;
    display: inline-block;
    height: 3px;
    margin-bottom: 4px;
    border-radius: 4px;
    background-color: #fff;
    transition: all 0.3s ease;
  }
  & span:nth-of-type(1) {
    width: 40px;
  }
  & span:nth-of-type(2) {
    width: 30px;
  }
  & span:nth-of-type(3) {
    width: 20px;
  }

  &.active span:nth-of-type(3) {
    transform: translateY(-4px) rotate(45deg);
    width: 30px;
  }
  &.active span:nth-of-type(1) {
    transform: translateY(10px) rotate(-45deg);
    width: 30px;
  }
  &.active span:nth-of-type(2) {
    left: 200%;
    opacity: 0;
    transform: translateY(10px);
    animation: active-menu06-bar02 0.8s forwards;
  }

  @media screen and (min-width: 1023px) {
    display: none;
  }
`;

const NavMenuStyle = styled.nav`
  display: none;
  min-width: 450px;

  @media screen and (min-width: 1023px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-100px);
    opacity: 0;
    transition: all 0.6s ease;
    &.rightMove {
      transform: none;
      opacity: 1;
    }
  }
`;

const NavUlStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & li {
    font-size: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  & li a {
    padding: 0.5rem 1.3rem;
  }

  &.lightMode li a {
    color: #19224e;
  }

  & li.active {
    font-size: 18px;
    border-color: #8bfdfe;
    transition: all 0.3s ease;
  }

  & li.active a {
    border-radius: 8px;
  }

  &.lightMode li.active a {
    border-color: #19224e;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [targetValue, setTargetValue] = useState("");
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const { isLightMode, setIsLightMode } = useToggleModeContext();
  const { resumeUrl, setResumeUrl } = useDataContext();
  const { isScrollingDown, isAsideShown, setIsAsideShown } =
    useChangeLayoutContext();
  const { getResume } = useContentful();

  const handleToggleAside = () => {
    setIsAsideShown(!isAsideShown);
  };

  const handleToggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const handleMouseOVer = (e) => {
    const target = e.target.innerText;

    if (target === "Home") {
      setIsActive(true);
      setTargetValue("Home");
    }
    if (target === "About Me") {
      setIsActive(true);
      setTargetValue("About Me");
    }
    if (target === "Project") {
      setIsActive(true);
      setTargetValue("Project");
    }
    if (target === "Contact") {
      setIsActive(true);
      setTargetValue("Contact");
    }
    if (target === "Resume") {
      setIsActive(true);
      setTargetValue("Resume");
    }
  };

  const handleMouseOut = () => {
    setIsActive(false);
    setTargetValue("");
  };

  useEffect(() => {
    getResume()
      .then((res) => setResumeUrl(res))
      .catch((err) => console.log(err));
    setTimeout(() => {
      setLeft(true);
    }, 850);
    setTimeout(() => {
      setRight(true);
    }, 950);
  }, []);

  return (
    <HeaderStyle
      className={`${isScrollingDown ? "hidden" : ""} ${
        isLightMode ? "lightMode" : ""
      }`}
    >
      <NavStyle className="header__nav">
        <div className={`header__nav__left ${left ? "leftMove" : ""}`}>
          <HeaderLeftStyle
            className="test"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <LogoStyle id="logoBtn" className="header__nav__logo">
              <AnchorLink href="#home">
                <img
                  src={isLightMode ? `${iconUrlLight}` : `${iconUrlDark}`}
                  alt=""
                />
              </AnchorLink>
            </LogoStyle>
            <ion-icon
              name="contrast-outline"
              onClick={handleToggleMode}
            ></ion-icon>
          </HeaderLeftStyle>
        </div>
        <MenuButtonStyle
          id="menuBtn"
          className={`${right ? "rightMove" : ""} ${
            isLightMode ? "lightMode" : ""
          } ${isAsideShown ? "active" : ""}`}
          onClick={handleToggleAside}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButtonStyle>
        <NavMenuStyle className={`header-nav ${right ? "rightMove" : ""}`}>
          <NavUlStyle className={isLightMode ? "lightMode" : ""}>
            <li
              className={isActive && targetValue === "Home" ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <AnchorLink href="#home">
                <span className="text">Home</span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnBefore`}
                ></span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnAfter`}
                ></span>
              </AnchorLink>
            </li>
            <li
              className={isActive && targetValue === "Project" ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <AnchorLink href="#myproject">
                <span className="text">Project</span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnBefore`}
                ></span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnAfter`}
                ></span>
              </AnchorLink>
            </li>
            <li
              className={isActive && targetValue === "About Me" ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <AnchorLink href="#aboutme">
                <span className="text">About Me</span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnBefore`}
                ></span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnAfter`}
                ></span>
              </AnchorLink>
            </li>
            <li
              className={isActive && targetValue === "Contact" ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <AnchorLink href="#contactme">
                <span className="text">Contact</span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnBefore`}
                ></span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnAfter`}
                ></span>
              </AnchorLink>
            </li>
            <li
              className={isActive && targetValue === "Resume" ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <a href={resumeUrl && resumeUrl} target="_blank">
                <span className="text">Resume</span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnBefore`}
                ></span>
                <span
                  className={`${isLightMode ? "lightMode" : ""} btnAfter`}
                ></span>
              </a>
            </li>
          </NavUlStyle>
        </NavMenuStyle>
      </NavStyle>
      <Aside />
    </HeaderStyle>
  );
};

export default Header;
