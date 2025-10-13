import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SubTitleProps {
  icon?: ReactNode;
  fontSize?: string;
  text: string;
}

export default function SubTitle({ icon, text, fontSize }: SubTitleProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.4,
        padding: "0.2rem",
      }}
    >
      {icon && (
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          color="primary.main"
        >
          {icon}
        </Box>
      )}
      <Typography
        sx={{
          fontSize: () => (fontSize ? fontSize : "1.5rem"),
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
