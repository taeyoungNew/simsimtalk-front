import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import { TextFieldProps } from "@mui/material";

type OutlineInputProps = TextFieldProps & {
  startIcon?: React.ReactNode;
};

const OutlineInput: React.FC<OutlineInputProps> = ({ startIcon, ...props }) => {
  return (
    <TextField
      sx={{ borderRadius: 10 }}
      id="outlined-basic"
      variant="outlined"
      label="Outlined with slotProps"
      {...props}
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : null,
        },
      }}
    />
  );
};

export default OutlineInput;
