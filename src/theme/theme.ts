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
    userCardColor: {
      text: {
        title: string;
        section: string;
        assist: string;
      };
      icon: {
        suggest: string;
        popular: string;
      };
      button: {
        bg: string;
        hover: string;
        border: string;
        text: string;
      };
    };
    alarmCardIconColor: {
      likeBg: string;
      likeIconColr: string;
      commentBg: string;
      commentIconColr: string;
      followBg: string;
      followIconColr: string;
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
    userCardColor: {
      text: {
        title: string;
        section: string;
        assist: string;
      };
      icon: {
        suggest: string;
        popular: string;
      };
      button: {
        bg: string;
        hover: string;
        border: string;
        text: string;
      };
    };
    alarmCardIconColor: {
      likeBg: string;
      likeIconColr: string;
      commentBg: string;
      commentIconColr: string;
      followBg: string;
      followIconColr: string;
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
    //     | 타입 | 아이콘 배경 | 아이콘 색상
    // |-----|-----|-----
    // | message | `bg-blue-100` = `#dbeafe` | `text-blue-600` = `#2563eb`
    // | like | `bg-red-100` = `#fee2e2` | `text-red-600` = `#dc2626`
    // | comment | `bg-green-100` = `#dcfce7` | `text-green-600` = `#16a34a`
    // | follow | `bg-purple-100` = `#f3e8ff` | `text-purple-600` = `#9333ea`
    // | share | `bg-orange-100` = `#ffedd5` | `text-orange-600` = `#ea580c`
    alarmCardIconColor: {
      likeBg: "#fee2e2",
      likeIconColr: "#dc2626",
      commentBg: "#dcfce7",
      commentIconColr: "#16a34a",
      followBg: "#f3e8ff",
      followIconColr: "",
    },
    userCardColor: {
      text: {
        title: "#0f172a",
        section: "#1e293b",
        assist: "#64748b",
      },
      icon: {
        suggest: "#2563eb",
        popular: "#f59e0b",
      },
      button: {
        bg: "#2563eb",
        hover: "#1d4ed8",
        border: "#cbd5e1",
        text: "#475569",
      },
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
