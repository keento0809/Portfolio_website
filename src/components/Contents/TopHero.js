import { Fragment } from "react";
import styled from "styled-components";
import classes from "../../styles/NeonText.module.css";

const TopHeroStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  transition: all 0.3s ease;
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
`;

const AtagStyle = styled.a`
  font-size: 14px;
  display: inline-block;
  padding: 0.5rem 1.8rem;
  margin-top: 1rem;
  font-weight: bold;
  border: 2px solid #8bfdfe;
  border-radius: 8px;

  &.lightMode {
    border-color: #19224e;
    color: #19224e;
  }
`;

const TopHero = (props) => {
  return (
    <TopHeroStyle id="home">
      <TopHeroWrapperStyle className="topHero__wrapper">
        <div>
          <p className="nextToTitle">Hello, I'm</p>
          <h4 className={classes.flux}>KENTO</h4>
        </div>
        <div className="topHero__mainDescription">
          <p>Front-end Developer</p>
          <p>Based in Vancouver</p>
        </div>
        {/* <div className="topHero__subDescription">
          <p>"Being Passionate for better solutions"</p>
        </div> */}
        <div className="toHero__button">
          {/* <p>"Always Be Resilient"</p> */}
          <AtagStyle
            href="#aboutme"
            className={props.isLightMode ? "lightMode" : ""}
          >
            Explore
          </AtagStyle>
        </div>
      </TopHeroWrapperStyle>
    </TopHeroStyle>
  );
};

export default TopHero;
