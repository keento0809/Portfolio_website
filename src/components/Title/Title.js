import styled from "styled-components";
import useToggleModeContext from "../../hooks/useToggleModeContext";
import classes from "../../styles/NeonText.module.css";

const TitleStyle = styled.div`
  padding: 24px 0;
  text-align: center;

  & h4 {
    font-size: 8vw;
    line-height: 8vw;
  }
  @media screen and (min-width: 767px) {
    & h4 {
      font-size: 5vw;
      line-height: 5vw;
    }
  }
  @media screen and (min-width: 1440px) {
    & h4 {
      font-size: 4vw;
      line-height: 4vw;
    }
  }
`;

const Title = (props) => {
  const { isLightMode } = useToggleModeContext();
  return (
    <TitleStyle>
      <h4
        className={`${isLightMode ? classes.fluxLight : classes.flux} ${
          props.className
        }`}
      >
        {props.title}
      </h4>
    </TitleStyle>
  );
};

export default Title;
