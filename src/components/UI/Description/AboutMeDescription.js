import styled from "styled-components";

const AboutMeDescriptionWrapper = styled.div`
  padding: 20px 0;
`;

const AboutMeDescription = () => {
  return (
    <AboutMeDescriptionWrapper>
      <h4>"Always Be Resilient"</h4>
      <div className="description-body">
        <p>I'll add descriptions here.This is a dummy text.</p>
      </div>
    </AboutMeDescriptionWrapper>
  );
};

export default AboutMeDescription;
