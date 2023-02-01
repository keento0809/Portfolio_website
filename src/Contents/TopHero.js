import styled from "styled-components";
import classes from "../styles/NeonText.module.css";
import ButtonUI from "../components/Button/Button";
import useToggleModeContext from "../hooks/useToggleModeContext";

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
    padding-bottom: 0.5rem;
    letter-spacing: 0.8px;
    font-size: 1.5rem;
  }
  & p.nextToTitle {
    font-size: 1.25rem;
    padding-bottom: 2rem;
    letter-spacing: 1px;
  }
  & h4 {
    padding-bottom: 3rem;
  }

  @media screen and (min-width: 767px) {
    max-width: none;
    min-height: 260px;
    & h4 {
      font-size: 8vw;
      line-height: 8vw;
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
    & p {
      font-size: 1.7rem;
      padding-bottom: 1rem;
    }
    & p.nextToTitle {
      padding-bottom: 2.5rem;
    }
    & h4 {
      font-size: 5vw;
      line-height: 5vw;
    }
  }
`;

const MainDescStyle = styled.div`
  padding-bottom: 2rem;
  @media screen and (min-width: 1600px) {
    padding: 1.5rem 0;
  }
`;

const TopHero = () => {
  const { isLightMode } = useToggleModeContext();
  return (
    <TopHeroStyle id="home">
      <TopHeroWrapperStyle className="topHero__wrapper">
        <div>
          <p className="nextToTitle">Hi, I'm</p>
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
