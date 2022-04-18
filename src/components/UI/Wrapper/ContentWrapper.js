import { Fragment } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 0;
`;

const ContentWrapper = (props) => {
  return <ContentContainer>{props.children}</ContentContainer>;
};

export default ContentWrapper;
