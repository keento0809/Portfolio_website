import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import useToggleModeContext from "../../hooks/useToggleModeContext";
import { useDataContext } from "../../context/dataContext";
import useContentful from "../../hooks/useContentful";
import useChangeLayoutContext from "../../hooks/useChangeLayoutContext";

const AsideStyle = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100svh;
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
  min-height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  & .aside-container__title {
    padding-bottom: 56px;
  }
  & h4 {
    font-size: 24px;
  }
  & li {
    padding-bottom: 32px;
  }
  & a {
    font-size: 20px;
  }
`;

const LiStyle = styled.li`
  & a {
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
  }
`;

const ResumeDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 20px;
  & ion-icon {
    font-size: 20px;
    margin-right: 1rem;
  }
  &.lightMode a {
    color: #19224e;
  }
`;

const Aside = () => {
  const { isLightMode } = useToggleModeContext();
  const { resumeUrl, setResumeUrl } = useDataContext();
  const { isAsideShown, setIsAsideShown } = useChangeLayoutContext();
  const { getResume } = useContentful();
  const handleLinkClick = () => {
    setIsAsideShown(false);
  };
  useEffect(() => {
    if (isAsideShown) {
      document.body.className = "over";
      return () => {
        document.body.className = "";
      };
    }
<<<<<<< HEAD:src/layouts/Aside.js
  }, [props.isAsideShown]);
=======
  }, [isAsideShown]);
  useEffect(() => {
    getResume()
      .then((res) => setResumeUrl(res))
      .catch((err) => console.log(err));
  }, []);
>>>>>>> 1c884c4076a7a5e8c843eda41d8a84658055fc79:src/components/templates/Aside.js
  return (
    <AsideStyle
      className={`${isAsideShown ? "show" : ""} ${
        isLightMode ? "lightMode" : ""
      }`}
    >
      <AsideContainerStyle className="aside-container">
        <div>
          <div className="aside-container__title">
            <h4>Menu</h4>
          </div>
          <ul className="aside-container__menuList">
            <LiStyle className="menuBtns">
              <AnchorLink
                className={isLightMode ? "lightMode" : ""}
                href="#home"
                onClick={handleLinkClick}
              >
                <ion-icon name="home-outline"></ion-icon>
                <span>Home</span>
              </AnchorLink>
            </LiStyle>
            <LiStyle className="menuBtns">
              <AnchorLink
                className={isLightMode ? "lightMode" : ""}
                href="#myproject"
                onClick={handleLinkClick}
              >
                <ion-icon name="folder-outline"></ion-icon>
                <span>Project</span>
              </AnchorLink>
            </LiStyle>
            <LiStyle className="menuBtns">
              <AnchorLink
                className={isLightMode ? "lightMode" : ""}
                href="#aboutme"
                onClick={handleLinkClick}
              >
                <ion-icon name="person-outline"></ion-icon>
                <span>About Me</span>
              </AnchorLink>
            </LiStyle>
            <LiStyle className="menuBtns">
              <AnchorLink
                className={isLightMode ? "lightMode" : ""}
                href="#contactme"
                onClick={handleLinkClick}
              >
                <ion-icon name="send-outline"></ion-icon>
                <span>Contact</span>
              </AnchorLink>
            </LiStyle>
          </ul>
        </div>
        <ResumeDivStyle className={isLightMode ? "lightMode" : ""}>
          <ion-icon name="document-text-outline"></ion-icon>
          <a
            // href={resumePath}
            href={resumeUrl && resumeUrl}
            className="resumeLink"
            target="_blank"
          >
            Resume
          </a>
        </ResumeDivStyle>
      </AsideContainerStyle>
    </AsideStyle>
  );
};

export default Aside;
