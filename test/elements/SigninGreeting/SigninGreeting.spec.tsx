import { SignInGreeting } from "@element/SigninGreeting/SigninGreeting";
import { screen, render } from "@testing-library/react";

const useAppTheme = jest.spyOn(require("@common/AppTheme"), "useAppTheme");

describe("SigninGreeting UI Test & Testing", () => {
  test("Static: SigninGreeting static text display should be correct", async () => {
    useAppTheme.mockImplementation(() => {
      return {
        theme: "light",
      };
    });
    render(<SignInGreeting />);

    await screen.findByText("Welcome Back to");
    await screen.findByText("Sign in to continue with your account.");
  });

  test("Static: SigninGreeting Snapshot test", async () => {
    useAppTheme.mockImplementation(() => {
      return {
        theme: "light",
      };
    });
    const comp = render(<SignInGreeting />);
    expect(comp).toMatchSnapshot();
  });

  test("Behaviour: SigninGreeting should dark logo for dark theme", async () => {
    useAppTheme.mockImplementation(() => {
      return {
        theme: "dark",
      };
    });

    render(<SignInGreeting />);

    const targetDark = await screen.findByTestId("LogoDark");
    expect(targetDark).toBeDefined();
  });

  test("Behaviour: SigninGreeting should light logo for light theme", async () => {
    useAppTheme.mockImplementation(() => {
      return {
        theme: "light",
      };
    });

    render(<SignInGreeting />);

    const targetLight = await screen.findByTestId("LogoLight");
    expect(targetLight).toBeDefined();
  });
});
