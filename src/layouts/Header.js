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

const MenuButtonStyle = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 20;

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

const Header = () => {
  const [isAsideShown, setIsAsideShown] = useState(false);

  const handleToggleAside = () => {
    setIsAsideShown(!isAsideShown);
  };

  return (
    <HeaderStyle>
      <NavStyle className="header__nav">
        <div className="header__nav__left">
          <span id="logoBtn" className="header__nav__logo">
            LOGO
          </span>
        </div>
        <MenuButtonStyle
          id="menuBtn"
          className="header__nav__right menuButton"
          onClick={handleToggleAside}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButtonStyle>
      </NavStyle>
      <Aside isAsideShown={isAsideShown} />
    </HeaderStyle>
  );
};

export default Header;
