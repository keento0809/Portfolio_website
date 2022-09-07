import Main from "./components/Main";
import ToggleModeProvider from "./context/ToggleModeContext";

function App() {
  return (
    <ToggleModeProvider>
      <Main />
    </ToggleModeProvider>
  );
}

export default App;
