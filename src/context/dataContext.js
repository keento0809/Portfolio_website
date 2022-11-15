import React, { useState, useContext, createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [resumeUrl, setResumeUrl] = useState("");
  const [projectImages, setProjectImages] = useState([]);
  const dataContextValue = {
    resumeUrl,
    setResumeUrl,
    projectImages,
    setProjectImages,
  };
  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!DataContext) throw new Error("Invalid context");
  return context;
};

export default DataContextProvider;
