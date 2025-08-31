import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { HeartIcon } from "../../assets/icons/Heart";
import { ChatDuotone } from "../../assets/icons/ChatDuotone";
import { CustomTextArea } from "../../components/atoms/inputs/CustomTextArea";

interface PostDetailBodyProps {
  content: string;
  likeCnt: number;
  commentCnt: number;
}

interface PostEditingProps {
  isEditing: boolean;
}

export const PostDetailBody = ({
  content,
  likeCnt,
  commentCnt,
  isEditing,
}: PostDetailBodyProps & PostEditingProps) => {
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
      ></Typography>
      <Box
        sx={{
          padding: "1rem",
          height: "auto",
          minHeight: "40vh",
        }}
      >
        {isEditing === false ? (
          <CustomTextArea
            sx={{ height: "inherit", padding: "10px", width: "100%" }}
          ></CustomTextArea>
        ) : (
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: (theme) => theme.palette.fontColor.main,
            }}
          >
            {content}
          </Typography>
        )}
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
