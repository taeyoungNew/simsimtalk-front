import { Box } from "@mui/material";
import { Typography } from "@mui/material";

interface PostDetailBodyProps {
  title: string;
  content: string;
}
export const PostDetailBody = ({ title, content }: PostDetailBodyProps) => {
  return (
    <>
      <Typography
        sx={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
        variant="h4"
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: "1em",
          height: "auto",
          minHeight: "40vh",
          borderBottom: 1,
          borderBottomColor: "gray",
          opacity: "0.2",
          fontSize: "1.3em",
        }}
      >
        {content}
      </Box>
    </>
  );
};
