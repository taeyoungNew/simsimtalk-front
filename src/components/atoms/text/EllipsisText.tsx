import { Typography, TypographyProps } from "@mui/material";

interface EllipsisTextProps extends TypographyProps {
  lines?: number; // 기본 1줄
}

export function EllipsisText({
  lines = 1,
  sx,
  children,
  ...props
}: EllipsisTextProps) {
  return (
    <Typography
      {...props}
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
