import { useState, useEffect } from "react";
import Aside from "./Aside";
import styled from "styled-components";

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
`;

const LogoStyle = styled.span`
  display: inline-block;
  padding-right: 20px;
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
  // test
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
    transition: all 0.5s ease;
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
    transition: all 0.5s ease;
  }

  & li.active a {
    border: 1px solid #8bfdfe;
    border-radius: 8px;
  }

  &.lightMode li.active a {
    border-color: #19224e;
  }
`;

// styled-components end up here.
//
//
//
//

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);

  const [isHome, setIsHome] = useState(false);
  const [isAboutMe, setIsAboutMe] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isResume, setIsResume] = useState(false);

  const handleToggleAside = () => {
    props.setIsAsideShown(!props.isAsideShown);
  };

  const handleToggleMode = () => {
    props.setIsLightMode(!props.isLightMode);
  };

  const handleMouseOVer = (e) => {
    const target = e.target.innerText;
    if (target === "Home") setIsHome(true);
    if (target === "About Me") setIsAboutMe(true);
    if (target === "Project") setIsProject(true);
    if (target === "Contact") setIsContact(true);
    if (target === "Resume") setIsResume(true);
  };

  const handleMouseOut = () => {
    // test
    setIsHome(false);
    setIsAboutMe(false);
    setIsProject(false);
    setIsContact(false);
    setIsResume(false);
  };

  return (
    <HeaderStyle
      className={`${props.isScrollingDown ? "hidden" : ""} ${
        props.isLightMode ? "lightMode" : ""
      }`}
    >
      <NavStyle className="header__nav">
        <div className="header__nav__left">
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
              LOGO
            </LogoStyle>
            <ion-icon
              name="contrast-outline"
              onClick={handleToggleMode}
            ></ion-icon>
          </HeaderLeftStyle>
        </div>
        <MenuButtonStyle
          id="menuBtn"
          className={`${props.isLightMode ? "lightMode" : ""} ${
            props.isAsideShown ? "active" : ""
          }`}
          onClick={handleToggleAside}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButtonStyle>
        <NavMenuStyle className="header-nav">
          <NavUlStyle className={props.isLightMode ? "lightMode" : ""}>
            <li
              className={isHome ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={isAboutMe ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <a href="#aboutme">About Me</a>
            </li>
            <li
              className={isProject ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <a href="#myproject">Project</a>
            </li>
            <li
              className={isContact ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <a href="#contactme">Contact</a>
            </li>
            <li
              className={isResume ? "active" : ""}
              onMouseOver={handleMouseOVer}
              onMouseOut={handleMouseOut}
            >
              <a href="">Resume</a>
            </li>
          </NavUlStyle>
        </NavMenuStyle>
      </NavStyle>
      <Aside
        isAsideShown={props.isAsideShown}
        setIsAsideShown={props.setIsAsideShown}
        setIsScrollingDown={props.setIsScrollingDown}
        isLightMode={props.isLightMode}
      />
    </HeaderStyle>
  );
};

export default Header;
