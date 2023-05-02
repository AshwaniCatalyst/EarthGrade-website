import { createTheme } from "@mui/material/styles"
export const Theme = createTheme({
  palette: {
    primary: {
      main: "#124734",
      dark: "#848484",
      100: "#D6832B",
      light: "#F1F1F1",
    },
    secondary: {
      main: "#D6832B",
      light: "#FFF2D9",
    },
  },
  typography: {
    h1: {
      fontFamily: "ITC Avant Garde Gothic Std",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "48px",
    },
    h2: {
      fontFamily: "ITC Avant Garde Gothic Std",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "44px",
    },
    h3: {
      fontFamily: "ITC Avant Garde Gothic Std",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "40px",
    },
    h4: {
      fontFamily: "ITC Avant Garde Gothic Std",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      color: "blue",
    },
    h5:{
      fontFamily: "ITC Avant Garde Gothic Std",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
    },
    h6:{
      fontFamily: "ITC Avant Garde Gothic Std",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "16px",
    }
  },
})
