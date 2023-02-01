import styled from "styled-components";

const AboutMeSectionWrapperStyle = styled.div`
  padding: 16px 0;
`;

const AboutMeSectionWrapper = (props) => {
  return (
    <AboutMeSectionWrapperStyle>{props.children}</AboutMeSectionWrapperStyle>
  );
};

export default AboutMeSectionWrapper;
