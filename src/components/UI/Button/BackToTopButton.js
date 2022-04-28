import styled from "styled-components";
import ButtonUI from "./Button";

const BackToTopBtnStyle = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  background-color: #050710;
  border-radius: 8px;
  /* width: 100%; */
  /* height: auto; */
`;

const BackToTopButton = (props) => {
  return (
    <BackToTopBtnStyle>
      <ButtonUI isLightMode={props.isLightMode} label={"TOP"} url={"#home"} />
    </BackToTopBtnStyle>
  );
};

export default BackToTopButton;
