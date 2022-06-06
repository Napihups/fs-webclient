import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    setTheme(window.localStorage.getItem("data-theme") ?? "dark");
  }, []);

  return theme;
};
