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

const TopHero = () => {
  return (
    <TopHeroStyle>
      <div>
        <h4 className={classes.flux}>KENTO</h4>
      </div>
      <p>Front-end Developer</p>
      <p>Based in Vancouver</p>
    </TopHeroStyle>
  );
};

export default TopHero;
