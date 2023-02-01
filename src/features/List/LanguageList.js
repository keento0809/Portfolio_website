import styled from "styled-components";
import ProjectSectionWrapper from "../../components/Wrapper/ProjectSectionWrapper";
import { Tooltip } from "@mui/material";

const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.8rem;

  & li {
    padding: 0.8rem;
  }
`;

const LanguageLiStyle = styled.li`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    display: block;
    padding-top: 1rem;
    font-size: 12px;
  }
`;

const LanguageList = (props) => {
  const languageList = props.languages.map((lan, index) => {
    return (
      <LanguageLiStyle key={index}>
        <Tooltip title={`${lan.name}`}>
          <i
            className={`devicon-${lan.name}-${
              lan.type === "original" ? "original" : "plain"
            }`}
          ></i>
        </Tooltip>
      </LanguageLiStyle>
    );
  });

  return (
    <ProjectSectionWrapper>
      <div className="languages">
        <h3>Tools</h3>
        <UlStyle className="skill-icons">{languageList}</UlStyle>
      </div>
    </ProjectSectionWrapper>
  );
};

export default LanguageList;
