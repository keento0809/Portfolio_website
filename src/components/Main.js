import { Fragment, useState, useEffect } from "react";
import Header from "../layouts/Header";
import Loader from "../layouts/Loader";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2880);
  }, []);

  return (
    <Fragment>
      {isLoading && <Loader />}
      <Header />
    </Fragment>
  );
};

export default Main;
