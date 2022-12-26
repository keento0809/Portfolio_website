import styled from "styled-components";
import AboutMeDescription from "../UI/Description/AboutMeDescription";
import SkillSetList from "../UI/List/SkillSetList";
import SpecialtyList from "../UI/List/SpecialtyList";
import ContentWrapper from "../UI/Wrapper/ContentWrapper";
import HobbyDescription from "../UI/Description/HobbyDescription";
import Title from "../UI/Title/Title";
import useContentful from "../../hooks/useContentful";
import { useEffect, useState } from "react";
import useToggleModeContext from "../../hooks/useToggleModeContext";

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

const SpecialtiesStyle = styled.div`
  padding-bottom: 1rem;
`;

const AboutMe = (props) => {
  const [dataArray, setDataArray] = useState();
  const [profileImgPath, setProfileImgPath] = useState();
  const { isLightMode } = useToggleModeContext();
  const { getDataArray, getProfileImage } = useContentful();
  const handleSetDataArray = async () => {
    await getDataArray()
      .then((res) => setDataArray(res))
      .catch((err) => console.log(err));
  };
  const handleSetProfileImage = async () => {
    await getProfileImage()
      .then((res) => setProfileImgPath(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleSetDataArray();
    handleSetProfileImage();
  }, []);
  return (
    <div id="aboutme">
      <ContentWrapper>
        <section className="aboutMe section">
          <Title title="About Me" isLightMode={isLightMode} />
          <ProfileDivStyle className="aboutMe__picture">
            <ImageStyle src={profileImgPath} alt="picture" />
          </ProfileDivStyle>
          <div className="aboutMe__description">
            <AboutMeDescription isLightMode={isLightMode} />
          </div>
          <div className="skills">
            <SkillSetList isLightMode={isLightMode} />
          </div>
          {dataArray &&
            dataArray.map((data, index) => {
              return (
                <div key={index + data.title}>
                  <SpecialtiesStyle className="specialties">
                    <SpecialtyList
                      specialties={data.array}
                      isLightMode={isLightMode}
                      title={data.title}
                    />
                  </SpecialtiesStyle>
                </div>
              );
            })}
          <HobbyDescription isLightMode={isLightMode} />
        </section>
      </ContentWrapper>
    </div>
  );
};

export default AboutMe;
