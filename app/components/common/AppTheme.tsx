import React, { ReactNode, useContext, useEffect, useState } from "react";

type Theme = "fsLight" | "fsDark";

type AppThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const AppthemeContext = React.createContext<AppThemeContextProps>({
  theme: "fsDark",
  setTheme: () => {},
});

export const useAppTheme = () => {
  return useContext(AppthemeContext);
};

type AppThemeProviderProps = {
  children: ReactNode;
};

/**
 * Set the default theme to Dark
 */
const DEFAULT_THEME = "fsDark";

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setTheme((window.localStorage.getItem("data-theme") as Theme) ?? DEFAULT_THEME);
  }, []);
  useEffect(() => {
    const html = document.getElementsByTagName("html");
    html[0].setAttribute("data-theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return <AppthemeContext.Provider value={value}>{children}</AppthemeContext.Provider>;
};
