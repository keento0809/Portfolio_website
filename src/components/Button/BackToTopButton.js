import styled from "styled-components";
import Button from "./Button";
import useToggleModeContext from "../../hooks/useToggleModeContext";
import useChangeLayoutContext from "../../hooks/useChangeLayoutContext";

const BackToTopBtnStyle = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  background-color: #050710;
  border-radius: 8px;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease;

  &.lightMode {
    background-color: #eff3ff;
  }

  @media screen and (min-width: 1023px) {
    &.active {
      transform: none;
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`;

const BackToTopButton = () => {
  const { isLightMode } = useToggleModeContext();
  const { isTopBtnActive } = useChangeLayoutContext();
  return (
    <BackToTopBtnStyle
      className={`${isTopBtnActive ? "active" : ""} ${
        isLightMode ? "lightMode" : ""
      }`}
    >
      <Button label={"TOP"} url={"#home"} />
    </BackToTopBtnStyle>
  );
};

export default BackToTopButton;
