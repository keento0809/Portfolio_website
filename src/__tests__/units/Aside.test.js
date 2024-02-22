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

describe("Aside", () => {
  it("The text 'Menu' should be rendered", async () => {
    render(<MockAside />);
    const text = screen.getByText(/Menu/i);
    expect(text).toBeTruthy();
  });

  it("All links in Aside should be rendered", async () => {
    render(<MockAside />);
    const arr = screen.getAllByRole("link");
    arr.forEach((txt) => {
      expect(txt).toContainHTML("a");
    });
  });

  it("Page transition should be implemented", async () => {
    render(<MockAside />);
    const resumeLink = await screen.findByRole("link", { name: "Resume" });
    expect(resumeLink).toHaveAttribute("href");
  });
});
