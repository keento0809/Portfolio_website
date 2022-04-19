import { Fragment } from "react";
import styled from "styled-components";

const ContainerWrapperStyle = styled.div`
  padding: 0 24px;
  /* test */
  &.shown {
    opacity: 0.5;
  }
`;

const ContainerWrapper = (props) => {
  return (
    <ContainerWrapperStyle className={props.isAsideShown ? "shown" : ""}>
      {props.children}
    </ContainerWrapperStyle>
  );
};

export default ContainerWrapper;
