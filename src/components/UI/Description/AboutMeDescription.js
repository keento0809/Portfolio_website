import styled from "styled-components";

const AboutMeDescriptionWrapper = styled.div`
  padding: 20px 0;

  & h2 {
    padding: 1rem 0;
    /* text-align: center; */
  }

  & p {
    /* color: #CBD5E1; */
    color: #94a3b8;
  }
`;

const DescriptionBodyStyle = styled.div`
  padding: 1rem 0;

  &.lightMode p {
    color: #393e46;
  }
`;

const StrongStyle = styled.strong`
  font-size: 18px;
  color: #cbd5e1;

  &.lightMode {
    color: #393e46;
  }
`;

const AboutMeDescription = (props) => {
  return (
    <AboutMeDescriptionWrapper>
      <h2>"Always Be Resilient"</h2>
      <DescriptionBodyStyle
        className={`${props.isLightMode ? "lightMode" : ""} description-body`}
      >
        <p className="description-body__firstParagraph">
          My name is{" "}
          <StrongStyle
            className={`${
              props.isLightMode ? "lightMode" : ""
            } description-body`}
          >
            KENTO HONDA
          </StrongStyle>
          ; front-end developer with an extensive education in web development
          and a vast passion for building user experience and interaction
          design.
          {/* Learning and growing as a developer always comes as my first
          priority to enhance my skills by creating an e-commerce-like
          application as my personal project utilizing React.js, Javascript,
          Typescript, Redux, and so on.  */}
          {/* I am confident in working and collaborating in teams through the
          experience of group projects in my college. */}
          {/* creative, hard-working, and resilient Front-End Web Developer from
          Japan. I always pursue creating, designing sophisticated web
          applications with better solutions. */}
        </p>
        <br />
        <p>
          Learning and growing as a developer always comes as my first priority
          to enhance my skills throughout the experiences of creating my
          personal projects utilizing React.js, Javascript, Typescript, Redux,
          and so on.
        </p>
        <br />
        <p>
          I am very confident in working and collaborating in teams through the
          experience of group projects in my college.
        </p>
        <br />
        <p className="description-body__secondParagraph">
          My motto is
          <StrongStyle
            className={`${
              props.isLightMode ? "lightMode" : ""
            } description-body`}
          >
            "Always Be Resilient"
          </StrongStyle>
          . Since every time I'm very strict with myself to complete my task and
          work, I can persistently handle with any kind of problems or bugs no
          matter how difficult they are.
          {/* Indeed, I will never stop learning
          something new related to web development and grow more to become a
          better developer as I really work hard on improving my tech skills
          with a huge passion for coding. */}
          {/* with difficulties. */}
        </p>
        <br />
        <p>
          Indeed, I will never stop learning something new related to web
          development and grow more to become a better developer as I really
          work hard on improving my tech skills with a huge passion for coding.
        </p>
      </DescriptionBodyStyle>
    </AboutMeDescriptionWrapper>
  );
};

export default AboutMeDescription;
