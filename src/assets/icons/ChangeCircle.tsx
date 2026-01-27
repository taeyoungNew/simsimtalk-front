import { SvgIcon, SvgIconProps } from "@mui/material";

export function ChangeCircleCustomIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Outer Circle */}
      <circle cx="12" cy="12" r="10" fill="currentColor" />

      {/* Change Arrows */}
      <path
        d="M8.5 10a3.5 3.5 0 0 1 6-2.3l.5-.5V9h-2.3l.9-.9a2.5 2.5 0 1 0 .7 2.9h1.2A3.5 3.5 0 0 1 8.5 10Zm7 4a3.5 3.5 0 0 1-6 2.3l-.5.5V15h2.3l-.9.9a2.5 2.5 0 1 0-.7-2.9H8.5A3.5 3.5 0 0 1 15.5 14Z"
        fill="black"
      />
    </SvgIcon>
  );
}
