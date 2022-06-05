import React, { ReactNode, useEffect } from "react";

type AppThemeProps = {
  children: ReactNode;
};
export const Apptheme: React.FC<AppThemeProps> = ({ children }) => {
  /**
   * TODO: will try to use redux for easily change theme on user event
   */
  useEffect(() => {
    const theme = window.localStorage.getItem("data-theme") ?? "dark";
    const html = document.getElementsByTagName("html");
    html[0].setAttribute("data-theme", theme);
  }, []);

  return <div>{children}</div>;
};
