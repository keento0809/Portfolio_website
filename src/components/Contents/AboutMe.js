import { Fragment } from "react";
import styled from "styled-components";
import AboutMeDescription from "../UI/Description/AboutMeDescription";
import SkillSetList from "../UI/List/SkillSetList";
import SpecialtyList from "../UI/List/SpecialtyList";
import profileImage from "../../assets/images/prof-pic.jpg";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";

const ProfileDivStyle = styled.div`
  width: 280px;
  height: 280px;
  margin: 0 auto;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const AboutMe = (props) => {
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
    { name: "Styled-components" },
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
    <ContentWrapper>
      <section id="aboutme" className="aboutMe section">
        <Title title="About Me" />
        <ProfileDivStyle className="aboutMe__picture">
          <ImageStyle src={profileImage} alt="picture" />
        </ProfileDivStyle>
        <div className="aboutMe__description">
          <AboutMeDescription isLightMode={props.isLightMode} />
        </div>
        <div className="skills">
          <SkillSetList isLightMode={props.isLightMode} />
        </div>
        <div className="specialties">
          <SpecialtyList
            specialties={specialtiesArr}
            isLightMode={props.isLightMode}
            title="Specialties"
          />
        </div>
        <div className="specialties">
          <SpecialtyList
            specialties={frontEndLibrariesArr}
            isLightMode={props.isLightMode}
            title="Front-End Libraries"
          />
        </div>
        <div className="specialties">
          <SpecialtyList
            specialties={othersArr}
            isLightMode={props.isLightMode}
            title="Others"
          />
        </div>
      </section>
    </ContentWrapper>
  );
};

export default AboutMe;
