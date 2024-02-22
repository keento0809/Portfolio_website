import styled from "styled-components";
import ProjectSectionWrapper from "../../../../components/Wrapper/ProjectSectionWrapper";
import { Tooltip } from "@mui/material";

const UlStyle = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s ease;

  & li {
    min-width: 57px;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a {
    transition: all 0.3s ease;
    overflow: unset;
  }

  &.lightMode a {
    color: #1b1f29;
  }

  & ion-icon,
  & i.devicon-github-original {
    transform: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  & ion-icon:hover,
  & i.devicon-github-original:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const LinkIconsDivStyle = styled.div`
  @media screen and (min-width: 1300px) {
    padding-left: 4rem;
  }
`;

const LinkIconsList = (props) => {
  return (
    <ProjectSectionWrapper>
      <LinkIconsDivStyle className="link-icons">
        <h3>Links</h3>
        <UlStyle className={props.isLightMode ? "lightMode" : ""}>
          <li>
            <Tooltip title="GitHub" arrow>
              <a
                href={`https://github.com/${props.gitHubUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="devicon-github-original"></i>
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Link" arrow>
              <a href={props.linkUrl} target="_blank" rel="noreferrer">
                <ion-icon name="link-outline"></ion-icon>
              </a>
            </Tooltip>
          </li>
        </UlStyle>
      </LinkIconsDivStyle>
    </ProjectSectionWrapper>
  );
};

export default LinkIconsList;
