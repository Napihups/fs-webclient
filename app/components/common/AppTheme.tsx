import React, { ReactNode, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type AppThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const AppthemeContext = React.createContext<AppThemeContextProps>({
  theme: "dark",
  setTheme: () => {},
});

export const useAppTheme = () => {
  return useContext(AppthemeContext);
};

type AppThemeProviderProps = {
  children: ReactNode;
};
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

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
