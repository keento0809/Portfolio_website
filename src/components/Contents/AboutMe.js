import { Fragment } from "react";
import styled from "styled-components";
import AboutMeDescription from "../UI/Description/AboutMeDescription";
import SkillSetList from "../UI/List/SkillSetList";
import SpecialtyList from "../UI/List/SpecialtyList";
import profileImage from "../../assets/images/prof-pic.jpg";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";

const ProfileDivStyle = styled.div`
  width: 320px;
  height: 320px;
  margin: 0 auto;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
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
    <ContentWrapper>
      <section id="aboutme" className="aboutMe section">
        <Title title="About Me" />
        <ProfileDivStyle className="aboutMe__picture">
          <ImageStyle src={profileImage} alt="picture" />
        </ProfileDivStyle>
        <div className="aboutMe__description">
          <AboutMeDescription />
        </div>
        <div className="skills">
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
    </ContentWrapper>
  );
};

export default AboutMe;
