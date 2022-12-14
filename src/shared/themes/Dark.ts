import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#834781",
      dark: "#6B3267",
      // light:,
      contrastText: "#fff",
    },
    background: {
      paper: "#303134",
      default: "#202124"
    },

  }
})