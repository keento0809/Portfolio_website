import { createContext, useState } from "react";

export const ChangeLayoutContext = createContext({});

const ChangeLayoutProvider = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAsideShown, setIsAsideShown] = useState(false);
  const [isTopBtnActive, setIsTopBtnActive] = useState(false);
  return (
    <ChangeLayoutContext.Provider
      value={{
        isScrollingDown,
        isAsideShown,
        isTopBtnActive,
        setIsScrollingDown,
        setIsAsideShown,
        setIsTopBtnActive,
      }}
    >
      {children}
    </ChangeLayoutContext.Provider>
  );
};

export default ChangeLayoutProvider;
