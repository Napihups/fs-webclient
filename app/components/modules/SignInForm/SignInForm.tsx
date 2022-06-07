import { FIXTURES } from "@constant/fixtures";
import React, { useState, useRef, useEffect } from "react";
import { useSignInForm } from "./useSignInForm";
import { BiLoaderAlt as Spinner } from "react-icons/bi";
import { IoAlertCircleOutline as Alert } from "react-icons/io5";
import { FormStatus } from "@fsTypes/common.types";

export const SignInForm: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, [emailInputRef]);

  const form = useSignInForm();

  const onShowPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(ev.target.checked);
  };

  const onEmailInputBlur = (ev: React.FocusEvent) => {
    const value = emailInputRef.current?.value ?? undefined;
    if (value !== undefined && value.length > 0) {
      form.setEmailInputError(null);
    }
  };

  const onPasswordInputBlur = (ev: React.FocusEvent) => {
    const value = passwordInputRef.current?.value ?? undefined;
    if (value !== undefined && value.length > 0) {
      form.setPasswordInputError(null);
    }
  };

  return (
    <form className="signInForm" role="form" onSubmit={form.submit}>
      <p className="signInForm__title">{FIXTURES.signinPage.signInFormTitle}</p>

      <div className="signInForm__formControl">
        <input
          id="signin-email"
          role="textbox"
          autoFocus={true}
          ref={emailInputRef}
          onBlur={onEmailInputBlur}
          autoComplete="off"
          className={`input input-bordered ${form.emailInputError !== null ? "input-error" : ""}`}
          placeholder={FIXTURES.signinPage.signInForm.emailPlaceholder}
        />
        {form.emailInputError !== null && (
          <label className="label">
            <span className="label-text-alt text-error">{form.emailInputError}</span>
          </label>
        )}
      </div>
      <div className="signInForm__formControl">
        <input
          role="textbox"
          ref={passwordInputRef}
          onBlur={onPasswordInputBlur}
          id="signin-password"
          className={`input input-bordered ${
            form.passwordInputError !== null ? "input-error" : ""
          }`}
          type={showPassword ? "text" : "password"}
          placeholder={FIXTURES.signinPage.signInForm.passwordPlaceholder}
        />
        {form.passwordInputError !== null && (
          <label className="label">
            <span className="label-text-alt text-error">{form.passwordInputError}</span>
          </label>
        )}
      </div>

      <div className="signInForm__showPassword">
        <input
          role="checkbox"
          id="signin-email"
          className="checkbox"
          type="checkbox"
          onChange={onShowPasswordChange}
        />
        <label className="label text-sm">{FIXTURES.signinPage.signInForm.showPasswordLabel}</label>
      </div>

      {form.formError !== null && (
        <div className="signInForm__formError">
          <div>
            <Alert size={20} />
            <p className="text-center">{form.formError}</p>
          </div>
        </div>
      )}
      <div className="grid grid-rows-2 gap-2">
        <button type="submit" className="btn btn-primary">
          {form.formStatus === FormStatus.SUBMITTING ? (
            <Spinner
              size={30}
              data-testid="signin-loader"
              role="progressbar"
              className="animate-spin"
            />
          ) : (
            <>{FIXTURES.signinPage.signInForm.signInButtonText}</>
          )}
        </button>
        <button type="button" className="btn btn-ghost">
          {FIXTURES.signinPage.signInForm.signUpButtonText}
        </button>
      </div>
    </form>
  );
};
