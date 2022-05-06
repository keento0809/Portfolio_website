import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";
import ButtonUI from "../UI/Button/Button";

const TopHeroStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  transition: all 0.5s ease;
`;

const TopHeroWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 240px;
  max-width: 350px;

  & p {
    font-weight: bold;
    font-size: 18px;
  }

  & p.nextToTitle {
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 767px) {
    max-width: none;
    min-height: 260px;

    & h4 {
      font-size: 9vw;
      line-height: 9vw;
    }
  }

  @media screen and (min-width: 1023px) {
    min-height: 280px;

    & h4 {
      font-size: 7.5vw;
      line-height: 7.5vw;
    }

    & p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1300px) {
    min-height: 300px;

    & h4 {
      font-size: 8vw;
      line-height: 8vw;
    }
  }
`;

const TopHero = (props) => {
  return (
    <TopHeroStyle id="home">
      <TopHeroWrapperStyle className="topHero__wrapper">
        <div>
          <p className="nextToTitle">Hello, I'm</p>
          <h4
            className={`${
              props.isLightMode ? `${classes.fluxLight}` : `${classes.flux}`
            }`}
          >
            KENTO
          </h4>
        </div>
        <div className="topHero__mainDescription">
          <p>Front-end Developer</p>
          <p>Based in Vancouver</p>
          {/* test */}
          {/* <p>Front-end Developer Based in Vancouver</p> */}
        </div>
        <div className="toHero__button">
          <ButtonUI
            isLightMode={props.isLightMode}
            label={"Explore"}
            url={"#myproject"}
          />
        </div>
      </TopHeroWrapperStyle>
    </TopHeroStyle>
  );
};

export default TopHero;
