import { FormStatus } from "@fsTypes/common.types";
import { SignInForm } from "@module/SignInForm/SignInForm";
import { screen, render, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { not } from "joi";

declare global {
  interface Window {
    _virtualConsole: any;
  }
}

describe("SignInForm UI Test", () => {
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

  test("Static: All UI static textual should be as per requirement & snapshot", async () => {
    const comp = render(<SignInForm />);

    await screen.findByText("Sign in");
    await screen.findByPlaceholderText("Email Address");
    await screen.findByText("Show password");
    await screen.findByText("Login");
    await screen.findByText("Sign Up");

    expect(comp).toMatchSnapshot();
  });

  test("Static: On initial render, the email input should be focus automatically", async () => {
    render(<SignInForm />);

    const emailInput = await screen.findByPlaceholderText("Email Address");
    expect(emailInput).toHaveFocus();
  });

  test("UseCase: Password should use normal text when the Show Password checkbox is checked", async () => {
    const user = userEvent.setup();

    render(<SignInForm />);

    const passwordInput = await screen.findByPlaceholderText("Password");
    const checkbox = await screen.findByRole("checkbox");
    await user.click(checkbox);

    expect(passwordInput).toHaveAttribute("type");
    expect(passwordInput.getAttribute("type")).toBe("text");

    await user.click(checkbox);
    expect(passwordInput.getAttribute("type")).toBe("password");
  });

  test(`UseCase: User typing invalid email and 
  click on Login button should display Email 
  input error with message "Invalid email address"`, async () => {
    const user = userEvent.setup();

    render(<SignInForm />);
    const emailInput = await screen.findByPlaceholderText("Email Address");
    const loginButton = await screen.findByText("Login");

    await user.type(emailInput, "napif4578");

    await user.click(loginButton);

    await new Promise(process.nextTick);

    const target = screen.getByText("Invalid email address");
    expect(target).toBeInTheDocument();
  });

  test(`Usecase : User Typing valid email and invalid password follow by click on login, will
  display password input Error with message of "Please provide a valid password"`, async () => {
    const user = userEvent.setup();

    render(<SignInForm />);
    const emailInput = await screen.findByPlaceholderText("Email Address");
    const passwordInput = await screen.findByPlaceholderText("Password");
    const loginButton = await screen.findByText("Login");

    await user.type(emailInput, "napi@gmail.com");
    await user.type(passwordInput, "lala");

    await user.click(loginButton);

    await new Promise(process.nextTick);

    const target = screen.getByText("Please provide a valid password");
    expect(target).toBeInTheDocument();
  });

  test("Usecase : User enter both valid email and password, signin form should be able to be in submit status", async () => {
    const user = userEvent.setup();

    render(<SignInForm />);
    const emailInput = await screen.findByPlaceholderText("Email Address");
    const passwordInput = await screen.findByPlaceholderText("Password");
    const loginButton = await screen.findByText("Login");

    await user.type(emailInput, "napi@gmail.com");
    await user.type(passwordInput, "Sayang_Afifah07");

    await user.click(loginButton);

    await new Promise(process.nextTick);

    const loader = await screen.findByTestId("signin-loader");
    expect(loader).toBeInTheDocument();
  });

  test("Usecase : User press tab, should autofocus on the next element which is the password input", async () => {
    const user = userEvent.setup();
    render(<SignInForm />);

    const emailInput = await screen.findByPlaceholderText("Email Address");
    const passwordInput = await screen.findByPlaceholderText("Password");

    await user.type(emailInput, "napi@gmail.com");
    await user.type(passwordInput, "Sayang_Afifah07");

    await user.keyboard("{Enter}");

    expect(await screen.getByTestId("signin-loader")).toBeDefined();
  });

  test("Usecase : User after filling the signin form, pressing enter key should allow form to be in submit state", async () => {
    const user = userEvent.setup();
    render(<SignInForm />);

    const passwordInput = await screen.findByPlaceholderText("Password");

    await user.keyboard("{Tab}");
    expect(passwordInput).toHaveFocus();
  });

  test("Behaviour: Email Input should display error when emailInputError state have value", async () => {
    const emailErrorMesage = "This field is required";
    const useSignInForm = jest.spyOn(require("@module/SignInForm/useSignInForm"), "useSignInForm");
    useSignInForm.mockImplementation(() => {
      return {
        emailInputError: emailErrorMesage,
        setEmailInputError: () => {},
        passwordInputError: null,
        setPasswordInputError: () => {},
        formError: null,
        formStatus: null,
        submit: () => {},
      };
    });
    render(<SignInForm />);
    const emailInput = await screen.findByPlaceholderText("Email Address");
    const errElement = await screen.findByText(emailErrorMesage);
    expect(errElement).toBeVisible();
    expect(emailInput).toHaveClass("input-error");

    useSignInForm.mockClear();
  });

  test("Behaviour: Password Input Should display error when passwordInputError state have value", async () => {
    const passwordErrorMessage = "Password is invalid";
    const useSignInForm = jest.spyOn(require("@module/SignInForm/useSignInForm"), "useSignInForm");
    useSignInForm.mockImplementation(() => {
      return {
        emailInputError: null,
        setEmailInputError: () => {},
        passwordInputError: passwordErrorMessage,
        setPasswordInputError: () => {},
        formError: null,
        formStatus: null,
        submit: () => {},
      };
    });

    render(<SignInForm />);
    const passwordInput = await screen.findByPlaceholderText("Password");
    const errElement = await screen.findByText(passwordErrorMessage);
    expect(errElement).toBeVisible();
    expect(passwordInput).toHaveClass("input-error");

    useSignInForm.mockClear();
  });

  test("Behaviour: Form should display FormError text when formError state have value", async () => {
    const formErrorMessage = "Invalid Email / Password";
    const useSignInForm = jest.spyOn(require("@module/SignInForm/useSignInForm"), "useSignInForm");
    useSignInForm.mockImplementation(() => {
      return {
        emailInputError: null,
        setEmailInputError: () => {},
        passwordInputError: null,
        setPasswordInputError: () => {},
        formError: formErrorMessage,
        formStatus: null,
        submit: () => {},
      };
    });

    render(<SignInForm />);
    const errElement = await screen.findByText(formErrorMessage);
    expect(errElement).toBeVisible();

    useSignInForm.mockClear();
  });

  test('Behaviour: Form submit button "login" should display loader during fomr onsubmit progress state', async () => {
    const useSignInForm = jest.spyOn(require("@module/SignInForm/useSignInForm"), "useSignInForm");
    useSignInForm.mockImplementation(() => {
      return {
        emailInputError: null,
        setEmailInputError: () => {},
        passwordInputError: null,
        setPasswordInputError: () => {},
        formError: null,
        formStatus: FormStatus.SUBMITTING,
        submit: () => {},
      };
    });
    render(<SignInForm />);

    await screen.findByTestId("signin-loader");
  });
});
