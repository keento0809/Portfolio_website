import { useEffect } from "react";
import Main from "./components/Main";
import ToggleModeProvider from "./context/ToggleModeContext";
import React from "react";
import useContentful from "./hooks/useContentful";

function App() {
  const { getResume } = useContentful();
  useEffect(() => {
    getResume().then((res) =>
      console.log("https:" + res[0].fields.myResume.fields.file.url)
    );
    // console.log(resume);
  }, []);
  return (
    <ToggleModeProvider>
      <Main />
    </ToggleModeProvider>
  );
}

export default App;
