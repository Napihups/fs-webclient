import { FIXTURES } from "@constant/fixtures";
import { LogoDark } from "@element/Logo/LogoDark";
import { LogoLight } from "@element/Logo/LogoLight";
import { useTheme } from "@hook/useTheme";
import React from "react";

export const SignInGreeting: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="signinGreeting">
      <p className="signinGreeting__greeting">{FIXTURES.signinPage.greeting}</p>
      {theme === "dark" ? <LogoDark /> : <LogoLight />}
      <p className="signinGreeting__info">{FIXTURES.signinPage.info}</p>
    </div>
  );
};
