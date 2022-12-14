import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#834781",
      dark: "#6B3267",
      // light: "red",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f7f6f3"
    },
  }
})