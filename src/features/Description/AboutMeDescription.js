import styled from "styled-components";

const AboutMeDescriptionWrapper = styled.div`
  padding: 20px 0;
  & h2 {
    padding: 1rem 0;
  }
  & p {
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
          ; web developer with +1 year of equivalent experience mainly in the
          FrontEnd field including work experience in my current company, my
          personal projects, and school projects. A quick learner and coding
          lover with an insatiable passion for self-improvement to grow more as
          a web developer.
        </p>
        <br />
        <p>
          Specialized in Javascript including Javascript framework & libraries
          such as ReactJS, Redux, and NextJS for building great user experience.
          Since I am comfortable with them, I could work my tail off for
          contributing to companies with high performances that are beyond
          expectations.
        </p>
        <br />
        <p>
          Throughout the experience as a web developer in my current company and
          school projects, I am very confident in working and collaborating in a
          team with detail-oriented communications.
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
          matter how complicated they are.
        </p>
        <br />
        <p>
          Indeed, I would never stop learning something new related to web
          development and grow more to become a better developer as I really
          work hard on improving my tech skills with a huge passion for coding.
        </p>
      </DescriptionBodyStyle>
    </AboutMeDescriptionWrapper>
  );
};

export default AboutMeDescription;
