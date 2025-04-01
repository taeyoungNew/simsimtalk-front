import { SvgIcon } from "@mui/material";

type Props = {
  size?: number;
};

export const ChatDuotone = (props: Props) => {
  return (
    <>
      <SvgIcon>
        <svg
          width="54"
          height="50"
          viewBox="0 0 54 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: props.size,
            height: props.size,
          }}
        >
          <path
            d="M9.3576 25C9.3576 17.8034 9.3576 14.2051 11.2979 11.7512C11.7314 11.203 12.2272 10.7071 12.7755 10.2736C15.2293 8.33334 18.8277 8.33334 26.0243 8.33334H26.9261C34.9924 8.33334 39.0255 8.33334 41.6145 10.7343C41.7802 10.888 41.94 11.0478 42.0936 11.2135C44.4946 13.8024 44.4946 17.8356 44.4946 25.9018V37.6667C44.4946 39.5523 44.4946 40.4951 43.9088 41.0809C43.323 41.6667 42.3802 41.6667 40.4946 41.6667H26.0243C18.8277 41.6667 15.2293 41.6667 12.7755 39.7264C12.2272 39.2929 11.7314 38.797 11.2979 38.2488C9.3576 35.7949 9.3576 32.1966 9.3576 25Z"
            fill="#7E869E"
            fillOpacity="0.25"
            stroke="#222222"
            strokeWidth="1.2"
          />
          <path
            d="M20.3379 22.9167L33.5143 22.9167"
            stroke="#222222"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.9261 31.25H33.5143"
            stroke="#222222"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SvgIcon>
    </>
  );
};
