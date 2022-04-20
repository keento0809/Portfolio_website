import { Fragment } from "react";
import styled from "styled-components";

const BackdropStyle = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  visibility: hidden;
  display: none;

  &.show {
    visibility: visible;
    display: block;
  }
`;

const Backdrop = (props) => {
  return (
    <BackdropStyle
      className={`${props.isAsideShown ? "shown" : ""} バックドロップです`}
    >
      <div className="">{props.children}</div>
    </BackdropStyle>
  );
};

export default Backdrop;
