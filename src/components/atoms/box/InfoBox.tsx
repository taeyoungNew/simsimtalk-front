import { Box, Typography } from "@mui/material";

interface InfoBoxProps {
  label: string;
  text: string;
  fontSize?: string;
  padding?: string;
  width?: string;
  outLineColorProps?: string;
  lineWeightProps?: string;
  minHeight?: string;
}

export default function InfoBox({
  label,
  text,
  fontSize,
  padding,
  width,
  outLineColorProps,
  lineWeightProps,
  minHeight,
}: InfoBoxProps) {
  const outLineColor = outLineColorProps ? outLineColorProps : "black";
  const lineWeight = lineWeightProps ? lineWeightProps : "1px";

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: width ?? "100%",
      }}
    >
      {/* 라벨 영역 */}
      <Box
        sx={{
          position: "absolute",
          top: "-10px",
          left: "12px",
          backgroundColor: "white",
          padding: "0 6px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
          {label}
        </Typography>
      </Box>

      {/* 본문 박스 */}
      <Box
        sx={{
          padding: padding ?? "8px 12px",
          border: `${lineWeight} solid ${outLineColor}`,
          borderRadius: "7px",
          fontSize: fontSize ?? "1rem",
          color: "black",
          whiteSpace: "pre-wrap",
          minHeight: minHeight,
        }}
      >
        {text}
      </Box>
    </Box>
  );
}
