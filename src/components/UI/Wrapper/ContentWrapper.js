import styled from "styled-components";

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 0;

  @media screen and (min-width: 1023px) {
    max-width: 912px;
    width: 100%;
  }
`;

const ContentWrapper = (props) => {
  return <ContentContainer>{props.children}</ContentContainer>;
};

export default ContentWrapper;
