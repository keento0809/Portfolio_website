import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../../styles/NeonText.module.css";

const TitleStyle = styled.div`
  padding: 24px 0;
`;

const Title = (props) => {
  return (
    <TitleStyle>
      <h4 className={`${classes.flux} ${props.className}`}>{props.title}</h4>
    </TitleStyle>
  );
};

export default Title;
