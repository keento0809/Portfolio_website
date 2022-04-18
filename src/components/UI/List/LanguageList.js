import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const LanguageList = (props) => {
  const languageList = props.languages.map((lan, index) => {
    return (
      <li key={index}>
        <i
          className={`devicon-${lan.name}-${
            lan.type === "original" ? "original" : "plain"
          }`}
        ></i>
      </li>
    );
  });

  return (
    <ProjectSectionWrapper>
      <div className="languages">
        <h4>Languages</h4>
        <UlStyle className="skill-icons">{languageList}</UlStyle>
      </div>
    </ProjectSectionWrapper>
  );
};

export default LanguageList;
