import { useColorScheme } from "@mui/material";
import { useEffect } from "react";

export const customColorScheme = () => {
  var { mode, setMode } = useColorScheme();
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";

    if (systemPrefersDark) {
      setMode(systemPrefersDark);
    }
  }, []);

  return {
    mode,
    setMode,
  };
};
