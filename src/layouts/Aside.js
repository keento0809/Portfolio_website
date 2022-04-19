import { Fragment } from "react";
import styled from "styled-components";

const AsideStyle = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(68vw, 400px);
  background-color: #0e1b35;
  transform: translateX(100%);
  transition: all 0.3s ease;
  z-index: 8;

  &.show {
    transform: none;
    transition: all 0.3s ease;
  }

  &.lightMode {
    background-color: #e5ebff;
  }
`;

const AsideContainerStyle = styled.div`
  min-height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & .aside-container__title {
    padding-bottom: 56px;
  }

  & h4 {
    font-size: 24px;
    padding-left: 20px;
  }

  & li {
    padding-bottom: 32px;
  }

  & a {
    font-size: 20px;
  }
`;

const AtagStyle = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 20px;

  & ion-icon {
    font-size: 20px;
    margin-right: 1rem;
  }

  & span {
    padding-bottom: 1px;
  }

  & .resume {
    width: 100%;
    text-align: center;
  }

  &.lightMode {
    color: #19224e;
  }
`;

const ResumeDivStyle = styled.div`
  padding-left: 20px;

  &.lightMode a {
    color: #19224e;
  }
`;

const Aside = (props) => {
  const handleLinkClick = () => {
    props.setIsAsideShown(false);
  };
  // const shown = props.isAsideShown ? "show" : "";
  return (
    <AsideStyle
      className={`${props.isAsideShown ? "show" : ""} ${
        props.isLightMode ? "lightMode" : ""
      }`}
    >
      <AsideContainerStyle className="aside-container">
        {/* test */}
        <div className="">
          <div className="aside-container__title">
            <h4>Menu</h4>
          </div>
          <ul className="aside-container__menuList">
            <li className="menuBtns">
              <AtagStyle
                className={props.isLightMode ? "lightMode" : ""}
                href="#home"
                onClick={handleLinkClick}
              >
                <ion-icon name="home-outline"></ion-icon>
                <span>Home</span>
              </AtagStyle>
            </li>
            <li className="menuBtns">
              <AtagStyle
                className={props.isLightMode ? "lightMode" : ""}
                href="#aboutme"
                onClick={handleLinkClick}
              >
                <ion-icon name="person-outline"></ion-icon>
                {/* <ion-icon name="help-outline"></ion-icon> */}
                <span>About me</span>
              </AtagStyle>
            </li>
            <li className="menuBtns">
              <AtagStyle
                className={props.isLightMode ? "lightMode" : ""}
                href="#myproject"
                onClick={handleLinkClick}
              >
                <ion-icon name="folder-outline"></ion-icon>
                <span>My project</span>
              </AtagStyle>
            </li>
            <li className="menuBtns">
              <AtagStyle
                className={props.isLightMode ? "lightMode" : ""}
                href="#contactme"
                onClick={handleLinkClick}
              >
                <ion-icon name="send-outline"></ion-icon>
                <span>Contact</span>
              </AtagStyle>
            </li>
          </ul>
        </div>
        <ResumeDivStyle className={props.isLightMode ? "lightMode" : ""}>
          <a href="" className="resumeLink">
            Resume
          </a>
        </ResumeDivStyle>
      </AsideContainerStyle>
    </AsideStyle>
  );
};

export default Aside;
