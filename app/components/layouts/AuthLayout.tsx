import { Footer } from "@element/footer/Footer";
import React, { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="authLayout">
      <div className="authLayout__content">{children}</div>
      <Footer />
    </div>
  );
};
