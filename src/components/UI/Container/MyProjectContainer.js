import { Fragment } from "react";
import styled from "styled-components";

const PaperStyle = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #1b1f29;
  border-radius: 8px;
`;

const MyProjectContainer = (props) => {
  return <PaperStyle>{props.children}</PaperStyle>;
};

export default MyProjectContainer;
