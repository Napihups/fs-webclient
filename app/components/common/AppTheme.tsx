import { useTheme } from "@hook/useTheme";
import React, { ReactNode, useEffect } from "react";

type AppThemeProps = {
  children: ReactNode;
};
export const Apptheme: React.FC<AppThemeProps> = ({ children }) => {
  const theme = useTheme();
  /**
   * TODO: will try to use redux for easily change theme on user event
   */
  useEffect(() => {
    const html = document.getElementsByTagName("html");
    html[0].setAttribute("data-theme", theme);
  }, [theme]);

  return <div>{children}</div>;
};
