import { SignInGreeting } from "@element/SigninGreeting/SigninGreeting";
import { screen, render } from "@testing-library/react";

const useTheme = jest.spyOn(require("@hook/useTheme"), "useTheme");

describe("SigninGreeting UI Test & Testing", () => {
  test("Static: SigninGreeting static text display should be correct", async () => {
    render(<SignInGreeting />);

    await screen.findByText("Welcome Back to");
    await screen.findByText("Sign in to continue with your account.");
  });

  test("Static: SigninGreeting Snapshot test", async () => {
    const comp = render(<SignInGreeting />);
    expect(comp).toMatchSnapshot();
  });

  test("Behaviour: SigninGreeting should dark logo for dark theme", async () => {
    useTheme.mockImplementation(() => {
      return "dark";
    });

    render(<SignInGreeting />);

    const targetDark = await screen.findByTestId("LogoDark");
    expect(targetDark).toBeDefined();
  });

  test("Behaviour: SigninGreeting should light logo for light theme", async () => {
    useTheme.mockImplementation(() => {
      return "light";
    });

    render(<SignInGreeting />);

    const targetLight = await screen.findByTestId("LogoLight");
    expect(targetLight).toBeDefined();
  });
});
