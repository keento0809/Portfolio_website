import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";
import { Tooltip } from "@mui/material";

const SkillIconsStyle = styled.div`
  color: #fff;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem 0;

  & i {
    padding: 1rem;
    color: #fff;
  }

  &.lightMode i {
    color: #19224e;
  }
`;

const SkillSetList = (props) => {
  return (
    <ProjectSectionWrapper>
      <h2>SKILL SETS</h2>
      <SkillIconsStyle
        className={`${
          props.isLightMode ? "lightMode" : ""
        } aboutMe__skillicons`}
      >
        <i className="devicon-html5-plain"></i>
        <i className="devicon-css3-plain"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-typescript-plain"></i>
        <i className="devicon-react-original"></i>
        <i className="devicon-redux-original"></i>
        <i className="devicon-nextjs-plain"></i>
        <i className="devicon-jquery-plain"></i>
        <i className="devicon-bootstrap-plain"></i>
        <i className="devicon-sass-original"></i>
        <i className="devicon-materialui-plain"></i>
        <i className="devicon-tailwindcss-plain"></i>
        <i className="devicon-nodejs-plain"></i>
        <i className="devicon-express-original"></i>
        <i className="devicon-mongodb-plain"></i>
        <i className="devicon-firebase-plain"></i>
        <i className="devicon-jest-plain"></i>
        <i className="devicon-heroku-plain"></i>
        <i className="devicon-git-plain"></i>
        <i className="devicon-figma-plain"></i>
      </SkillIconsStyle>
    </ProjectSectionWrapper>
  );
};

export default SkillSetList;
