import ProjectSectionWrapper from "../../../../components/Wrapper/ProjectSectionWrapper";
import styled from "styled-components";

const HobbySentenceStyle = styled.p`
  color: #94a3b8;
  &.lightMode {
    color: #393e46;
  }
`;

const UlStyle = styled.ul`
  border: 1px solid;
  border-radius: 8px;
  margin: 2rem 0;
  padding: 1rem 1.5rem;
  & li {
    padding-bottom: 1rem;
  }
`;

const HobbyOutlineStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & h3 {
    font-weight: normal;
  }
  & ion-icon {
    padding-right: 0.5rem;
  }
`;

const HobbyDescription = (props) => {
  return (
    <ProjectSectionWrapper>
      <h2>Hobbies</h2>
      <HobbySentenceStyle className={props.isLightMode ? "lightMode" : ""}>
        Aside from things regarding my skills, I would like to introduce what I
        love to do a little.
      </HobbySentenceStyle>
      <UlStyle>
        <li>
          <HobbyOutlineStyle className="">
            <ion-icon name="airplane-outline"></ion-icon>
            <h3>
              I'm a <strong>"Travel lover"</strong>.
            </h3>
          </HobbyOutlineStyle>
          <HobbySentenceStyle className={props.isLightMode ? "lightMode" : ""}>
            I've been to 17 countries and regions so far to broaden my horizons
            and enjoy new adventures.
          </HobbySentenceStyle>
        </li>
        <li>
          <HobbyOutlineStyle className="">
            <ion-icon name="basketball-outline"></ion-icon>
            <h3>
              I'm a <strong>"Sports lover"</strong>.
            </h3>
          </HobbyOutlineStyle>
          <HobbySentenceStyle className={props.isLightMode ? "lightMode" : ""}>
            Watching any kinds of sports on live is always fun for me,
            especially baseball and handball.
          </HobbySentenceStyle>
        </li>
        <li>
          <HobbyOutlineStyle className="">
            <ion-icon name="tv-outline"></ion-icon>
            <h3>
              I'm a <strong>"Movie lover"</strong>.
            </h3>
          </HobbyOutlineStyle>
          <HobbySentenceStyle className={props.isLightMode ? "lightMode" : ""}>
            I've watched various types of movies including Japanese Studio
            Ghibli movies.
          </HobbySentenceStyle>
        </li>
      </UlStyle>
    </ProjectSectionWrapper>
  );
};

export default HobbyDescription;
