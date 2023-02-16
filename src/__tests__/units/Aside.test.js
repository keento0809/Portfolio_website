import { screen, render } from "@testing-library/react";
import Aside from "../../components/templates/Aside";
import ToggleModeProvider from "../../context/ToggleModeContext";
import DataContextProvider from "../../context/dataContext";
import ChangeLayoutProvider from "../../context/changeLayoutContext";

const MockAside = () => {
  return (
    <ToggleModeProvider>
      <DataContextProvider>
        <ChangeLayoutProvider>
          <Aside />
        </ChangeLayoutProvider>
      </DataContextProvider>
    </ToggleModeProvider>
  );
};

it("renders", async () => {
  render(<MockAside />);
  const arr = screen.getAllByRole("link");
  arr.forEach((txt) => {
    expect(txt).toContainHTML("a");
  });
});
