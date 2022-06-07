import { useAppTheme } from "@common/AppTheme";
import { FIXTURES } from "@constant/fixtures";
import { LogoDark } from "@element/Logo/LogoDark";
import { LogoLight } from "@element/Logo/LogoLight";
import React from "react";

export const SignInGreeting: React.FC = () => {
  const { theme } = useAppTheme();

  return (
    <div className="signinGreeting">
      <p className="signinGreeting__greeting">{FIXTURES.signinPage.greeting}</p>
      {theme === "dark" ? <LogoDark /> : <LogoLight />}
      <p className="signinGreeting__info">{FIXTURES.signinPage.info}</p>
    </div>
  );
};
