import { Button } from "@mui/material";
import { ReactNode } from "react";

interface DynamicCustomButtonProps {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  //   color?:
}
