import React, { ReactNode, useContext, useEffect, useState } from "react";

type Theme = "fsLight" | "fsDark";

type AppThemeContextProps = {
  theme: Theme | null;
  setTheme: (theme: Theme | null) => void;
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
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (theme === null) {
      /** Scripts for setting initial theme mode and
       * listening to on Change event regarding the theme being set */

      /** if there is no current theme being set, use browser prefered mode */
      const currentThemeCached = window.localStorage.getItem("data-theme");

      if (currentThemeCached === undefined || currentThemeCached === null) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          window.localStorage.setItem("data-theme", "fsDark");
          html.setAttribute("data-theme", "fsDark");
          setTheme("fsDark");
          return;
        }
        window.localStorage.setItem("data-theme", "fsLight");
        html.setAttribute("data-theme", "fsLight");
        setTheme("fsLight");
      } else {
        html.setAttribute("data-theme", currentThemeCached);
        setTheme(currentThemeCached as Theme);
      }
    } else {
      window.localStorage.setItem("data-theme", theme);
      html.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return <AppthemeContext.Provider value={value}>{children}</AppthemeContext.Provider>;
};
