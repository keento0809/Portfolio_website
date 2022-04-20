import { Fragment } from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";

const ContainerWrapperStyle = styled.div`
  padding: 0 24px;
  /* test */
  &.shown {
    opacity: 0.5;
  }
  @media screen and (min-width: 767px) {
    padding: 0 56px;
  }
`;

const ContainerWrapper = (props) => {
  return (
    <ContainerWrapperStyle className={props.isAsideShown ? "shown" : ""}>
      {/* test */}
      <Backdrop isAsideShown={props.isAsideShown} />
      {props.children}
    </ContainerWrapperStyle>
  );
};

export default ContainerWrapper;
