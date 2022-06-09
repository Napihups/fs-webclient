import { AppHeadbar } from "@module/AppHeadbar/AppHeadBar";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("AppHeadbar UI test", () => {
  let emit: any;

  beforeAll(() => {
    ({ emit } = window._virtualConsole);
  });

  beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    window._virtualConsole.emit = emit;
  });

  it("Static: display Title should be display correctly based on title props", async () => {
    const title = "FINANCE";

    useRouter.mockImplementation(() => {
      return {
        pathname: "/finance",
      };
    });

    render(<AppHeadbar />);
    expect(await screen.findByRole("heading", { name: title }));
  });

  it("Static: AppHeadbar snapshot test", async () => {
    useRouter.mockImplementation(() => {
      return {
        pathname: "/finance",
      };
    });

    const comp = render(<AppHeadbar />);

    expect(comp).toMatchSnapshot();
  });
});
