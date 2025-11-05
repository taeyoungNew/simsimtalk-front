import { TextField, InputAdornment, Box } from "@mui/material";
import { forwardRef } from "react";
interface EditBoxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string | number) => void;
  icon?: React.ReactNode;
  outLineColor?: string;
  width?: string | number;
  maxLength?: number;
  numbericOnly?: boolean;
  multiline?: boolean;
  value: string | number;
  type?: string;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
}

const EditBox = forwardRef<HTMLInputElement, EditBoxProps>(
  (
    {
      label,
      value,
      onChange,
      icon,
      outLineColor,
      width,
      maxLength,
      numbericOnly,
      multiline,
      onValueChange,
      type,
      minRows,
      maxRows,
      placeholder,
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      // ✅ 길이 제한 (maxLength 지정 시)
      if (label === "age" && maxLength && val.length > maxLength) return;
      // onChange?.(e); // 기존 이벤트 핸들러도 호출
      if (numbericOnly) {
        // 빈값은 빈 문자열로 남기고, 아니면 숫자로 변환
        const val = e.target.value;

        if (/^\d*$/.test(val)) onChange(e);
      } else {
        onChange(e);
      }
    };

    return (
      <Box sx={{ width: width }}>
        <TextField
          inputRef={ref}
          label={label}
          value={value}
          onChange={handleChange}
          fullWidth={true}
          variant="outlined"
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
          placeholder={placeholder}
          InputProps={{
            startAdornment: icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : undefined,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: outLineColor,
                borderRadius: "7px",
              },
              "&:hover fieldset": {
                borderColor: outLineColor,
              },
              "&.Mui-focused fieldset": {
                borderColor: outLineColor,
              },
            },
          }}
        />
      </Box>
    );
  },
);

export default EditBox;
