import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    fontColor: {
      main: string;
      normal: string;
      icon: string;
      assist: string;
      placeholder: string;
    };
    buttonColor: PaletteColor;
  }

  interface PaletteOptions {
    fontColor: {
      main: string;
      normal: string;
      icon: string;
      assist: string;
      placeholder: string;
    };
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
      main: "#1976d2",
    },
    warning: {
      main: "#ed6c02",
    },
    error: {
      main: "#d32f2f",
    },
    fontColor: {
      main: "#1e293b", // text-slate-800 (메인 텍스트)
      normal: "#334155", // text-slate-700 (일반 텍스트)
      icon: "#475569", // text-slate-600 (아이콘)
      assist: "#64748b", // text-slate-500 (보조 텍스트)
      placeholder: "#94a3b8", // text-slate-400 (플레이스홀더)
    },
    background: {
      default: "#f1f5f9",
      paper: "#ffffff",
    },

    buttonColor: {
      main: "#7F7373",
    },
  },

  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#d32f2f",
        },
      },
    },
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
