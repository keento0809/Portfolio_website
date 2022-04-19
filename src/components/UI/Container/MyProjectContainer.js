import { Fragment } from "react";
import styled from "styled-components";

const PaperStyle = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #1b1f29;
  border-radius: 8px;

  &.lightMode {
    background-color: #e7edff;
  }
`;

const MyProjectContainer = (props) => {
  return (
    <PaperStyle className={props.isLightMode ? "lightMode" : ""}>
      {props.children}
    </PaperStyle>
  );
};

export default MyProjectContainer;
