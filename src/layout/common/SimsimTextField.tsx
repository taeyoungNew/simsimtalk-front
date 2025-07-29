import { TextField } from "@mui/material";
import { styled } from "@mui/material";

const myStyle = {
  "& .MuiInputBase-input": {
    color: "#8D77AB", // 入力文字の色
  },
  "& label": {
    color: "#8D77AB", // 通常時のラベル色
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#5C5470", // 通常時のボーダー色
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#DBD8E3", // ホバー時のボーダー色
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8D77AB", // 通常時のボーダー色(アウトライン)
    },
    "&:hover fieldset": {
      borderColor: "#BAD8B6", // ホバー時のボーダー色(アウトライン)
    },
  },
};

export const SimSimTextField = styled(TextField)(myStyle);
