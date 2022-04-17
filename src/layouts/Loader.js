import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loading}>
      <div id="load" className={classes.load}>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};

export default Loader;
