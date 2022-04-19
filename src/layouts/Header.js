import { useState } from "react";
import Aside from "./Aside";
import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 24px;
  height: 80px;
  z-index: 11;
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
`;

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;

  & .header__nav__logo {
    font-size: 22px;
  }
`;

const HeaderLeftStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & ion-icon {
    padding-bottom: 1.6px;
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

  &.lightMode span {
    background-color: #19224e;
  }

  & span {
    text-align: right;
    display: inline-block;
    width: 30px;
    height: 3px;
    margin-bottom: 4px;
    border-radius: 4px;
    background-color: #fff;
  }
  & span:first-child {
    width: 40px;
  }
  & span:last-child {
    width: 20px;
  }
`;

const Header = (props) => {
  const [isAsideShown, setIsAsideShown] = useState(false);

  const handleToggleAside = () => {
    setIsAsideShown(!isAsideShown);
  };

  const handleToggleMode = () => {
    props.setIsLightMode(!props.isLightMode);
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
          className={props.isLightMode ? "lightMode" : ""}
          onClick={handleToggleAside}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButtonStyle>
      </NavStyle>
      <Aside isAsideShown={isAsideShown} isLightMode={props.isLightMode} />
    </HeaderStyle>
  );
};

export default Header;
