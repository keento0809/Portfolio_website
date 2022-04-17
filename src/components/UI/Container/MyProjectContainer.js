import { Fragment } from "react";
import styled from "styled-components";

const MyProjectContainer = (props) => {
  return <PaperStyle>{props.children}</PaperStyle>;
};

export default MyProjectContainer;
