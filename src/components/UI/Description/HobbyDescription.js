import ProjectSectionWrapper from "../Wrapper/ProjectSectionWrapper";
import styled from "styled-components";

const HobbySentenceStyle = styled.p`
  color: #94a3b8;
`;

const UlStyle = styled.ul`
  padding: 1.5rem 0;

  & li {
    padding-bottom: 0.4rem;
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

const HobbyDescription = () => {
  return (
    <ProjectSectionWrapper>
      <h2>Hobbies</h2>
      <HobbySentenceStyle>
        Aside from things regarding my skills, I would like to introduce what I
        love to do a little.
      </HobbySentenceStyle>
      <UlStyle>
        <li>
          <HobbyOutlineStyle className="">
            <ion-icon name="airplane-outline"></ion-icon>
            {/* <ion-icon name="checkmark-outline"></ion-icon> */}
            <h3>
              I'm a <strong>"Travel lover"</strong>.
            </h3>
          </HobbyOutlineStyle>
          <HobbySentenceStyle>
            I've been to 16 countries and regions to explore something new and
            enjoy the adventures.
          </HobbySentenceStyle>
        </li>
        <li>
          <HobbyOutlineStyle className="">
            <ion-icon name="basketball-outline"></ion-icon>
            {/* <ion-icon name="checkmark-outline"></ion-icon> */}
            <h3>
              I'm a <strong>"Sports lover"</strong>.
            </h3>
          </HobbyOutlineStyle>
          <HobbySentenceStyle>
            Watching any kinds of sports on live is always fun for me,
            especially baseball and handball.
          </HobbySentenceStyle>
        </li>
        <li>
          <HobbyOutlineStyle className="">
            <ion-icon name="tv-outline"></ion-icon>
            {/* <ion-icon name="checkmark-outline"></ion-icon> */}
            <h3>
              I'm a <strong>"Movie lover"</strong>.
            </h3>
          </HobbyOutlineStyle>
          <HobbySentenceStyle>
            I've watched various types of movies including Japanese Studio
            Ghibli movies.
          </HobbySentenceStyle>
        </li>
      </UlStyle>
    </ProjectSectionWrapper>
  );
};

export default HobbyDescription;
