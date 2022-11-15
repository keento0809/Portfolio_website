import Main from "./components/Main";
import ToggleModeProvider from "./context/ToggleModeContext";
import DataContextProvider from "./context/dataContext";
import React from "react";

function App() {
  return (
    <ToggleModeProvider>
      <DataContextProvider>
        <Main />
      </DataContextProvider>
    </ToggleModeProvider>
  );
}

export default App;
