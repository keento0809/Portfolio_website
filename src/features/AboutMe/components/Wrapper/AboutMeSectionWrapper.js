import styled from "styled-components";

const AboutMeWrapperStyle = styled.div`
  padding: 16px 0;
`;

const AboutMeWrapper = (props) => {
  return <AboutMeWrapperStyle>{props.children}</AboutMeWrapperStyle>;
};

export default AboutMeWrapper;
