import styled from "styled-components";
import useToggleModeContext from "../../hooks/useToggleModeContext";
import useChangeLayoutContext from "../../hooks/useChangeLayoutContext";

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

const Backdrop = ({ children }) => {
  const { isLightMode } = useToggleModeContext();
  const { isAsideShown, setIsAsideShown } = useChangeLayoutContext();
  const handleCloseAside = () => {
    setIsAsideShown(false);
  };

  return (
    <BackdropStyle
      className={`${isAsideShown ? "shown" : ""} ${
        isLightMode ? "lightMode" : ""
      }`}
      onClick={handleCloseAside}
    >
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;
