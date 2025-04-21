import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    backGroungColor: PaletteColor;
    fontColor: PaletteColor;
    buttonColor: PaletteColor;
  }

  interface PaletteOptions {
    backGroungColor: PaletteColorOptions;
    fontColor: PaletteColorOptions;
    buttonColor: PaletteColorOptions;
  }
}
export const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans JP, sans-serif",
    // 폰트의 각각의 굵기
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  palette: {
    primary: {
      light: "#F9F6E6",
      main: "#E1EACD",
      dark: "#BAD8B6",
      contrastText: "#8D77AB",
    },
    fontColor: {
      light: "#FFFFFF",
      main: "#918A8A",
    },
    backGroungColor: {
      light: "#8b8989",
      main: "#414345",
      dark: "#434343",
    },
    buttonColor: {
      main: "#7F7373",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "5px",
        },
        "*::-webkit-scrollbar-track": {
          background: "#FFFFFF",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#918A8A",
          borderRadius: "2px",
        },
      },
    },
  },
});
