import { useContext } from "react";
import { ChangeLayoutContext } from "../context/changeLayoutContext";

const useChangeLayoutContext = () => {
  const context = useContext(ChangeLayoutContext);
  if (!context) throw new Error("Invalid context");
  return context;
};

export default useChangeLayoutContext;
