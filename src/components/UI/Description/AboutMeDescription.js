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
`;

const StrongStyle = styled.strong`
  font-size: 18px;
  color: #cbd5e1;
`;

const AboutMeDescription = () => {
  return (
    <AboutMeDescriptionWrapper>
      <h2>"Always Be Resilient"</h2>
      <DescriptionBodyStyle className="description-body">
        <p className="description-body__firstParagraph">
          My name is <StrongStyle className="">KENTO HONDA</StrongStyle>;
          creative, hard-working, and resilient Front-End Web Developer from
          Japan. I always pursue creating, designing sophisticated web
          applications with better solutions.
        </p>
        <br />
        <p className="description-body__secondParagraph">
          My motto is
          <StrongStyle className="">"Always Be Resilient"</StrongStyle>. Since
          every time I'm very strict with myself to complete my task and work, I
          can persistently handle with any kind of problems or bugs with
          difficulties.
        </p>
      </DescriptionBodyStyle>
    </AboutMeDescriptionWrapper>
  );
};

export default AboutMeDescription;
