import { Fragment } from "react";
import styled from "styled-components";
import AboutMeDescription from "../UI/Description/AboutMeDescription";
import SkillSetList from "../UI/List/SkillSetList";
import SpecialtyList from "../UI/List/SpecialtyList";
import profileImage from "../../assets/images/prof-pic.jpg";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import Title from "../UI/Title/Title";
import {
  specialtiesArr,
  frontEndLibrariesArr,
  othersArr,
} from "../../data/data";

const ProfileDivStyle = styled.div`
  width: 240px;
  height: 240px;
  margin: 1rem auto;
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0px 0px 14px 4px #4a4a4a;
`;

const AboutMe = (props) => {
  return (
    <div id="aboutme">
      <ContentWrapper>
        <section className="aboutMe section">
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
    </div>
  );
};

export default AboutMe;
