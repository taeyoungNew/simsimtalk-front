import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { HeartIcon } from "../../assets/icons/Heart";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";

interface PostDetailBodyProps {
  title: string;
  content: string;
  likeCnt: number;
  commentCnt: number;
}
export const PostDetailBody = ({
  title,
  content,
  likeCnt,
  commentCnt,
}: PostDetailBodyProps) => {
  return (
    <>
      <Typography
        sx={{
          color: (theme) => theme.palette.fontColor.normal,
          paddingTop: "0.4rem",
          paddingRight: "0.9rem",
          paddingLeft: "0.9rem",
        }}
        variant="h4"
      >
        {title}
      </Typography>
      <Box
        sx={{
          padding: "1rem",
          height: "auto",
          minHeight: "40vh",
          // borderBottom: 1,
          // borderBottomColor: "gray",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
            color: (theme) => theme.palette.fontColor.main,
          }}
        >
          {content}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.4rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button>
            <HeartIcon
              color={theme.palette.primary.contrastText}
              fillColor={theme.palette.primary.light}
              size={40}
            ></HeartIcon>
          </Button>
          <Typography
            color={theme.palette.primary.dark}
            sx={{ fontSize: "1.2em" }}
          >
            {likeCnt}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button>
            <ChatDuotone
              color={theme.palette.primary.dark}
              fillColor={theme.palette.primary.light}
              size={40}
            ></ChatDuotone>
          </Button>
          <Typography
            color={theme.palette.primary.dark}
            sx={{ fontSize: "1.2em" }}
          >
            {commentCnt}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
