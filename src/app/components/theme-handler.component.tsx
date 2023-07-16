import {
  ThemeProvider,
  createTheme,
  useColorScheme,
  useMediaQuery,
} from "@mui/material";
import { createContext, useEffect, useMemo } from "react";
import MenuBar from "./menubar.component";

export type ThemeMode = "light" | "dark";

export const ColorModeContext = createContext({
  toggleColorMode: (mode: ThemeMode) => {},
});

var isFirstCall = true;
export default function ThemeHandler() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  var { mode, setMode } = useColorScheme();
  // Check if we need to override the theme to use dark mode
  useEffect(() => {
    if (isFirstCall && prefersDarkMode && mode !== "dark") {
      mode = "dark";
      setMode(mode);
    }
    isFirstCall = false;
  }, []);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (mode: ThemeMode) => {
        setMode(mode);
      },
    }),
    []
  );

  const convertMode = mode === "light" ? "light" : "dark";

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: convertMode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MenuBar />
        {/* <Router></Router> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
