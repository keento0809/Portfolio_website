import React, { useState } from "react";
import { createContext } from "react";

export const ToggleModeContext = createContext();

const ToggleModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  return (
    <ToggleModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      {children}
    </ToggleModeContext.Provider>
  );
};

export default ToggleModeProvider;
