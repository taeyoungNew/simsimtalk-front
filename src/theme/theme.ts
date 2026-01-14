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
      isLike: string;
      assist: string;
      placeholder: string;
    };
    chatCardColor: {
      unreadNickname: string;
      unreadBg: string;
      unreadBd: string;
      unreadMsg: string;
      unreadTime: string;
      unreadBadgeBg: string;
      readNickname: string;
      readBg: string;
      readBd: string;
      readMsg: string;
      readTime: string;
      readBadgeBg: string;
      hoverBd: string;
    };
    buttonColor: PaletteColor;
    borderLineColor: {
      normal: string;
      light: string;
    };
    User: {
      online: string;
    };
  }

  interface PaletteOptions {
    fontColor: {
      main: string;
      normal: string;
      icon: string;
      isLike: string;
      assist: string;
      placeholder: string;
    };
    chatCardColor: {
      unreadNickname: string;
      unreadBg: string;
      unreadBd: string;
      unreadMsg: string;
      unreadTime: string;
      unreadBadgeBg: string;
      readNickname: string;
      readBg: string;
      readBd: string;
      readMsg: string;
      readTime: string;
      readBadgeBg: string;
      hoverBd: string;
    };
    buttonColor: PaletteColorOptions;
    borderLineColor: {
      normal: string;
      light: string;
    };
    User: {
      online: string;
    };
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
    success: {
      main: "#22c55e",
    },
    primary: {
      main: "#1976d2",
    },
    warning: {
      main: "#ed6c02",
    },
    error: {
      main: "#ef4444",
    },
    fontColor: {
      main: "#1e293b", // text-slate-800 (메인 텍스트)
      normal: "#334155", // text-slate-700 (일반 텍스트)
      icon: "#475569", // text-slate-600 (아이콘)
      assist: "#64748b", // text-slate-500 (보조 텍스트)
      isLike: "#ef4444",
      placeholder: "#94a3b8", // text-slate-400 (플레이스홀더)
    },
    background: {
      default: "#f1f5f9",
      paper: "#ffffff",
    },
    buttonColor: {
      main: "#7F7373",
    },
    borderLineColor: {
      normal: "#e2e8f0",
      light: "#93c5fd",
    },
    User: {
      online: " #10b981",
    },
    chatCardColor: {
      unreadNickname: "#0f172a",
      unreadBg: "#eff6ff",
      unreadBd: "#bfdbfe",
      unreadMsg: "#334155",
      unreadTime: "#2563eb",
      unreadBadgeBg: "#2563eb",
      readNickname: "#334155",
      readBg: "#ffffff",
      readBd: "#e2e8f0",
      readMsg: "#64748b",
      readTime: "#94a3b8",
      readBadgeBg: "",
      hoverBd: "#93c5fd",
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
