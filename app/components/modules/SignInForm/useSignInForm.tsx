import { FormStatus } from "@fsTypes/common.types";
import { SignInFormSchema } from "@schemas/signin-form.schema";
import React, { useState } from "react";

export const useSignInForm = () => {
  const [emailInputError, setEmailInputError] = useState<string | null>(null);
  const [passwordInputError, setPasswordInputError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE);

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const email = document.getElementById("signin-email") as HTMLInputElement;
    const password = document.getElementById("signin-password") as HTMLInputElement;

    email.blur();
    password.blur();
    setFormError(null);
    const { error, value } = SignInFormSchema.validate({
      email: email.value,
      password: password.value,
    });

    const canSubmit = Boolean(formStatus === FormStatus.IDLE || formStatus === FormStatus.ONERROR);

    if (error === undefined && canSubmit) {
      /**
       * Auth Signin Form are safe to submit
       */
      setFormStatus(FormStatus.SUBMITTING);

      setTimeout(() => {
        setFormStatus(FormStatus.ONERROR);
        setFormError("Invalid Email / Password");
      }, 3000);
    } else {
      /**
       * Auth Signin Form are not safe to submit
       */
      const err = error?.details[0];
      const errPath = err?.path[0] as string;

      switch (errPath) {
        case "email":
          setEmailInputError(err?.message as string);
          break;
        case "password":
          setPasswordInputError(err?.message as string);
          break;
      }
      setFormStatus(FormStatus.ONERROR);
    }
  };

  return {
    emailInputError,
    setEmailInputError,
    passwordInputError,
    setPasswordInputError,
    formError,
    formStatus,
    submit,
  };
};
