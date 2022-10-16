import classes from "../styles/Loader.module.css";
import neonClasses from "../styles/NeonText.module.css";
import styled from "styled-components";

const LoaderStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  & h4 {
    font-size: 6vw;
    line-height: 6vw;
  }

  @media screen and (min-width: 1023px) {
    & h4 {
      font-size: 3.5vw;
      line-height: 3.5vw;
    }
  }
`;

const Loader = () => {
  return (
    <div className="">
      <LoaderStyle className={classes.loading}>
        {/* <div id="load" className={classes.load}>
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div> */}
        <h4 className={`${classes.loader} ${neonClasses.flux}`}>Loading</h4>
      </LoaderStyle>
    </div>
  );
};

export default Loader;
