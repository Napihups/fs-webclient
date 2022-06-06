import { render, screen } from "@testing-library/react";
import { Footer } from "@element/footer/Footer";

describe("Footer Static UI Snapshot", () => {
  it("Static textual test on Footer", async () => {
    render(<Footer />);

    await screen.getByText("Famspace Pte Ltd.");
    await screen.getByText("Copyright © 2022 - All right reserved");
  });
  it("Footer background should be using primary color", async () => {
    render(<Footer />);

    const footer = await await screen.findByTestId("app-footer");
    expect(footer).toHaveClass("bg-primary");
  });
  it("Footer Snapshot changes test", async () => {
    await render(<Footer />);

    const footer = await await screen.findByTestId("app-footer");
    expect(footer).toMatchSnapshot();
  });
});
