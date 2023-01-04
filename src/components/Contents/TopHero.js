import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";
import ButtonUI from "../UI/Button/Button";
import useToggleModeContext from "../../hooks/useToggleModeContext";

const TopHeroStyle = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
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

    & p.nextToTitle {
      padding-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 1023px) {
    min-height: 280px;

    & h4 {
      font-size: 6vw;
      line-height: 6vw;
    }

    & p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1300px) {
    min-height: 300px;

    & p.nextToTitle {
      padding-bottom: 2rem;
    }
  }
`;

const MainDescStyle = styled.div`
  @media screen and (min-width: 1600px) {
    padding: 1.5rem 0;
  }
`;

const TopHero = (props) => {
  const { isLightMode } = useToggleModeContext();
  return (
    <TopHeroStyle id="home">
      <TopHeroWrapperStyle className="topHero__wrapper">
        <div>
          <p className="nextToTitle">Hello, I'm</p>
          <h4
            className={`${
              isLightMode ? `${classes.fluxLight}` : `${classes.flux}`
            }`}
          >
            KENTO
          </h4>
        </div>
        <MainDescStyle className="topHero__mainDescription">
          <p>Web Developer</p>
          <p>Based in Vancouver</p>
        </MainDescStyle>
        <div className="toHero__button">
          <ButtonUI label={"Explore"} url={"#myproject"} />
        </div>
      </TopHeroWrapperStyle>
    </TopHeroStyle>
  );
};

export default TopHero;
