import { Box, Button, Typography } from "@mui/material";
import { HeartIcon } from "../../assets/icons/Heart";
import { theme } from "../../theme/theme";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";

interface PostDetailFooterProps {
  likeCnt: number;
  commentCnt: number;
  Comments: [{}];
}

export const PostDetailFooter = ({
  likeCnt,
  commentCnt,
  Comments,
}: PostDetailFooterProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.4em",
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
