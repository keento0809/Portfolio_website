import styled from "styled-components";
import ButtonUI from "./Button";

const BackToTopBtnStyle = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  background-color: #050710;
  border-radius: 8px;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease;

  @media screen and (min-width: 1023px) {
    &.active {
      transform: none;
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`;

const BackToTopButton = (props) => {
  return (
    <BackToTopBtnStyle className={props.isTopBtnActive ? "active" : ""}>
      <ButtonUI isLightMode={props.isLightMode} label={"TOP"} url={"#home"} />
    </BackToTopBtnStyle>
  );
};

export default BackToTopButton;
