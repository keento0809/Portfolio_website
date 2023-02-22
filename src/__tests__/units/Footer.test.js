import { screen, render } from "@testing-library/react";
import Footer from "../../components/templates/Footer";

describe("Footer", () => {
  it("renders footer texts", () => {
    render(<Footer />);
    const footerText = screen.getByText(
      /©︎ KENTO HONDA 2022. All Rights Reserved./i
    );
    expect(footerText).toBeInTheDocument();
  });
});
