import React, { useContext } from "react";
import { ToggleModeContext } from "../context/ToggleModeContext";

const useToggleModeContext = () => {
  const context = useContext(ToggleModeContext);
  if (!context) {
    alert("Invalid context");
    return;
  }
  return context;
};

export default useToggleModeContext;
