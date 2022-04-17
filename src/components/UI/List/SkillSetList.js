import { Fragment } from "react";
import styled from "styled-components";

const SkillSetListWrapper = styled.div`
  padding: 20px 0;
`;

const SkillIconsStyle = styled.div`
  color: #fff;
  font-size: 24px;
`;

const SkillSetList = () => {
  return (
    <SkillSetListWrapper>
      <h4>SKILL SET</h4>
      <SkillIconsStyle className="aboutMe__skillicons">
        <i className="devicon-html5-plain"></i>
        <i className="devicon-css3-plain"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-git-plain"></i>
        <i className="devicon-nodejs-plain"></i>
        <i className="devicon-react-original"></i>
        <i className="devicon-redux-original"></i>
        <i className="devicon-sass-original"></i>
        <i className="devicon-express-original"></i>
        <i className="devicon-firebase-plain"></i>
        <i className="devicon-materialui-plain"></i>
        <i className="devicon-figma-plain"></i>
        <i className="devicon-tailwindcss-plain"></i>
      </SkillIconsStyle>
    </SkillSetListWrapper>
  );
};

export default SkillSetList;
