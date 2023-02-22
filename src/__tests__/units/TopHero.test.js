import { screen, render } from "@testing-library/react";
import TopHero from "../../Contents/TopHero";
import ToggleModeProvider from "../../context/ToggleModeContext";
import DataContextProvider from "../../context/dataContext";
import ChangeLayoutProvider from "../../context/changeLayoutContext";

const MockTopHero = () => {
  return (
    <ToggleModeProvider>
      <DataContextProvider>
        <ChangeLayoutProvider>
          <TopHero />
        </ChangeLayoutProvider>
      </DataContextProvider>
    </ToggleModeProvider>
  );
};

describe("TopHero", () => {
  it("should render title on the screen", async () => {
    render(<MockTopHero />);
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeTruthy();
  });

  it("should render subtitle texts on the screen", async () => {
    render(<MockTopHero />);
    const subtitleTexts = screen.getAllByTestId("subtitle_text");
    expect(subtitleTexts.length).toBe(2);
  });

  it("should render 'Explore' anchor-link", async () => {
    render(<MockTopHero />);
    const anchorLinkElement = screen.getByRole("link");
    expect(anchorLinkElement).toBeInTheDocument();
  });
});
