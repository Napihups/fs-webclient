import { render, screen } from "@testing-library/react";
import { Footer } from "@element/Footer/Footer";

describe("Footer Static UI Test &  Snapshot", () => {
  it("Static textual test on Footer", async () => {
    render(<Footer />);

    await screen.getByText("Napigo Pte Ltd.");
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
