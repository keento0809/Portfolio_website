import styled from "styled-components";
import useToggleModeContext from "../../../hooks/useToggleModeContext";

const BackdropStyle = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(5, 7, 16, 0.2);
  z-index: 5;
  visibility: hidden;
  display: none;

  &.shown {
    visibility: visible;
    display: block;
  }

  &.lightMode {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Backdrop = (props) => {
  const { isLightMode } = useToggleModeContext();

  const handleCloseAside = () => {
    props.setIsAsideShown(false);
  };

  return (
    <BackdropStyle
      className={`${props.isAsideShown ? "shown" : ""} ${
        isLightMode ? "lightMode" : ""
      }`}
      onClick={handleCloseAside}
    >
      {props.children}
    </BackdropStyle>
  );
};

export default Backdrop;
