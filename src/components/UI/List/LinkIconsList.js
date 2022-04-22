import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s ease;

  & li {
    padding: 0.8rem;
  }

  &.lightMode a {
    color: #1b1f29;
  }

  & ion-icon,
  & i.devicon-github-original {
    transform: none;
    transition: all 0.5s ease;
    display: inline-block;
  }

  & ion-icon:hover,
  & i.devicon-github-original:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;

const LinkIconsList = (props) => {
  return (
    <ProjectSectionWrapper>
      <div className="link-icons">
        <h3>Links</h3>
        <UlStyle className={props.isLightMode ? "lightMode" : ""}>
          <li>
            <a href={`https://github.com/keento0809/${props.gitHubUrl}`}>
              <i className="devicon-github-original"></i>
            </a>
          </li>
          <li>
            <a href={props.linkUrl}>
              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>
        </UlStyle>
      </div>
    </ProjectSectionWrapper>
  );
};

export default LinkIconsList;
