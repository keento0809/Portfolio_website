import { Fragment } from "react";
import styled from "styled-components";
import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";
import ReactTooltip from "react-tooltip";

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
      <Fragment>
        <LanguageLiStyle key={index}>
          <i
            className={`devicon-${lan.name}-${
              lan.type === "original" ? "original" : "plain"
            }`}
            data-tip
            // data-event="click"
            data-event-off="mouseleave"
            data-for={`${lan.name}-${index}`}
          ></i>
        </LanguageLiStyle>
        <ReactTooltip
          // key={`${lan.name}-${index}`}
          id={`${lan.name}-${index}`}
          // ref={(el) => (this.tooltip = el)}
          // place="top"
          effect="solid"
          // eventOff="click"
          // scrollHide={true} this.tooltip.tooltipRef = null
          onMouseleave={() => {
            // this.tooltip.tooltipRef = null;
            ReactTooltip.hide();
          }}
        >
          <span>{`${lan.name}`}</span>
        </ReactTooltip>
      </Fragment>
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
