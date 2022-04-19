import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & li {
    padding: 0.8rem;
  }

  &.lightMode a {
    color: #1b1f29;
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
