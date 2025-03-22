import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    backGroungColor: PaletteColor;
    fontColor: PaletteColor;
  }

  interface PaletteOptions {
    backGroungColor: PaletteColorOptions;
    fontColor: PaletteColorOptions;
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
      light: "#757ce8",
      main: "#f44336",
      dark: "#002884",
      contrastText: "#fff",
    },
    fontColor: {
      main: "#918A8A",
    },
    backGroungColor: {
      main: "#EFEAEA",
    },
  },
});
