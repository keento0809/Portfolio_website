import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";
import SkillSetList from "../UI/AboutMe/SkillSetList";
import SpecialtyList from "../UI/AboutMe/SpecialtyList";

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 0;
`;

const AboutMe = () => {
  const specialtiesArr = [
    { name: "React.js" },
    { name: "Javascript(ES6)" },
    { name: "Redux" },
  ];
  const frontEndLibrariesArr = [
    { name: "HTML5/CSS3" },
    { name: "Javascript(ES6)" },
    { name: "React.js" },
    { name: "Redux" },
    { name: "SCSS/SASS" },
    { name: "Material-UI" },
    { name: "Tailwind-css" },
    { name: "Responsible-Design" },
  ];
  const othersArr = [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Git/CLI" },
    { name: "Firebase" },
    { name: "RESTfulAPI" },
    { name: "Figma" },
  ];

  return (
    <ContentContainer>
      <section id="aboutme" className="aboutMe section">
        <h4 className={classes.flux}>About Me</h4>
        <div className="aboutMe__picture">
          <img src="" alt="" />
        </div>
        <div className="aboutMe__description">
          <p>I'll add descriptions here.</p>
        </div>
        <div className="">
          <SkillSetList />
        </div>
        <div className="specialties">
          <SpecialtyList specialties={specialtiesArr} title="Specialties" />
        </div>
        <div className="specialties">
          <SpecialtyList
            specialties={frontEndLibrariesArr}
            title="Front-End Libraries"
          />
        </div>
        <div className="specialties">
          <SpecialtyList specialties={othersArr} title="Others" />
        </div>
      </section>
    </ContentContainer>
  );
};

export default AboutMe;
