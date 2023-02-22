import Main from "./pages/Main";
import ToggleModeProvider from "./context/ToggleModeContext";
import DataContextProvider from "./context/dataContext";
import ChangeLayoutProvider from "./context/changeLayoutContext";
import React from "react";

function App() {
  return (
    <ToggleModeProvider>
      <DataContextProvider>
        <ChangeLayoutProvider>
          <Main />
        </ChangeLayoutProvider>
      </DataContextProvider>
    </ToggleModeProvider>
  );
}

export default App;
