import { Transform, Translate } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

interface FilterIconProps {
  position?: String;
  color?: String;
  fillColor?: String;
}

export const FilterIcon = (props: FilterIconProps) => {
  return (
    <>
      <SvgIcon>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="50" fill={`${props.fillColor}`} />
          <path
            d="M10.4166 25L10.4166 8.33333"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <path
            d="M39.5834 41.6667L39.5834 35.4167"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <path
            d="M10.4166 41.6667L10.4166 33.3333"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <path
            d="M39.5834 27.0833L39.5834 8.33334"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <path
            d="M25 14.5833L25 8.33334"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <path
            d="M25 41.6667L25 22.9167"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <circle
            cx="10.4167"
            cy="29.1667"
            r="4.16667"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <circle
            cx="25"
            cy="18.75"
            r="4.16667"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
          <circle
            cx="39.5833"
            cy="31.25"
            r="4.16667"
            stroke={`${props.color}`}
            strokeLinecap="round"
          />
        </svg>
      </SvgIcon>
    </>
  );
};
