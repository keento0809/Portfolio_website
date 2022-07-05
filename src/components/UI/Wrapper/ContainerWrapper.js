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
    <div className="">
      {/* test */}
      <Backdrop
        isLightMode={props.isLightMode}
        isAsideShown={props.isAsideShown}
        setIsAsideShown={props.setIsAsideShown}
      />
      <ContainerWrapperStyle className={props.isAsideShown ? "shown" : ""}>
        {props.children}
      </ContainerWrapperStyle>
    </div>
  );
};

export default ContainerWrapper;
