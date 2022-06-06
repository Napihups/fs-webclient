import { FIXTURES } from "@constant/fixtures";
import { LogoPlainWhite } from "@element/Logo/LogoPlainWhite";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      data-testid="app-footer"
      aria-label="Famspace Company metadata"
      className="footer footer-center bg-primary text-primary-content p-10 border-t-2 border-t-base-200"
    >
      <div>
        <LogoPlainWhite />
        <p className="font-bold">{FIXTURES.footer.company_name}</p>
        <p>{FIXTURES.footer.copyright}</p>
      </div>
    </footer>
  );
};
